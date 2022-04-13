// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import puppeteer from "puppeteer";
export default async (req, res) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/profile', { waitUntil: 'networkidle0' })
  await page.evaluate(() => { window.scrollBy(0, window.innerHeight); })
  // Create PDF Buffer
  const buffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    // margin: { top: 0, right: 0, bottom: 0, left: 0 }
  })

  // Return pdf buffer to caller.
  res.end(buffer)

  // Close browser **after** we returned the PDF to the caller.
  await browser.close()
}
