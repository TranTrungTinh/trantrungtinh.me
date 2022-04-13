import Head from '../components/Head';

const AboutPage = () => {
  return (
    <>
      <Head title="Tinh Tran | About" />
      <a href="/api/pdf" download="generated_pdf.pdf" className="block text-right">Download PDF</a>
    </>
  );
};

export default AboutPage;
