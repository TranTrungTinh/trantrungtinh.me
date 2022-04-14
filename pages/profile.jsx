import cn from 'classnames'
import Head from '../components/Head';
import BlankLayout from '../components/BlankLayout';
import styles from '../styles/AboutPage.module.css';
import Image from 'next/image'
import { profile } from '../configs/app.config'

const getIconPath = key => {
  const mapping = {
    'js': '/icons/javascript-original.svg',
    'ts': '/icons/typescript-plain.svg',
    'vue': '/icons/vue.svg',
    'react': '/icons/react-original.svg',
    'angular': 'icons/angularjs-plain',
    'nuxt': '/icons/nuxt.svg',
    'next': '/icons/nextjs-original.svg',
    'ant': '/icons/ant-design.svg',
    'quasar': '/icons/quasar.svg',
    'material': '/icons/material.svg',
    'tailwind': '/icons/tailwindcss-plain.svg',
    'node': '/icons/nodejs-plain.svg',
    'graphql': '/icons/graphql-plain.svg',
    'webpack': '/icons/webpack.svg',
    'vite': '/icons/vite.svg',
    'html': '/icons/html5-plain.svg',
    'css': '/icons/css3-plain.svg',
    'scss': '/icons/sass.svg',
    'php': '/icons/php-plain.svg',
    'd3': '/icons/d3js-plain.svg',
    'docker': '/icons/docker-plain.svg',
    'firebase': '/icons/firebase-plain.svg',
    'figma': '/icons/figma-original.svg',
    'dart': '/icons/dart.svg',
    'aws': '/icons/aws.svg',
    'azure': '/icons/azure-original.svg',
    'go': '/icons/go-original.svg',
    'amplify': '/icons/amplify.svg',
    'vi': '/icons/vi.svg',
    'en': '/icons/en.svg'
  }
  return mapping[key]
}

const ProfilePage = () => {
  return (
    <>
      <Head title="Tinh Tran | Profile" />
      <section className={cn('font-["Open_Sans"]', styles.page)}>
        <div className={cn('relative py-8 flex flex-col overflow-hidden prose-sm prose-slate', styles.sidebar)}>
          <div className='border-8 border-white w-[166px] h-[166px] rounded-full relative self-center z-20'>
            <Image className='rounded-full' loader={() => profile.info.avatar} src='avatar.png' layout="fixed" width={150} height={150} alt="Picture of the author" priority />
          </div>
          <div className="bg-indigo-100 w-[500px] h-[250px] absolute top-[-120px] left-[-100px] rotate-[-28deg]"></div>
          <div className="bg-indigo-300 w-[500px] h-[250px] absolute top-[-140px] left-[-100px] rotate-[-20deg] z-10"></div>
          <div className="bg-indigo-500 w-[500px] h-[250px] absolute top-[-160px] left-[-100px] -rotate-12 z-10"></div>
          <div className='px-6 h-full flex flex-col justify-between relative z-10'>
            {/* Info */}
            <div className='text-[#363636] text-xs'>
              <h3 className='mb-2 text-base'>Contact</h3>
              <div>
                <ul className="p-0">
                  <li className="flex items-center p-0 mb-1">
                    <svg width="14" height="14" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.975799 0.763449C0.977833 0.779311 0.973109 0.793102 0.961592 0.804481L0.826557 0.94C0.820488 0.946552 0.812523 0.952414 0.802695 0.957242C0.792902 0.962069 0.783247 0.965173 0.773764 0.966553C0.773109 0.966553 0.771075 0.966553 0.767661 0.966898C0.764316 0.967243 0.759902 0.967588 0.754488 0.967588C0.741626 0.967588 0.720798 0.965172 0.69204 0.961034C0.663281 0.956552 0.628074 0.945518 0.586454 0.927932C0.544833 0.910691 0.497592 0.884483 0.444799 0.849656C0.392005 0.814828 0.335833 0.766896 0.276282 0.706206C0.228902 0.658965 0.189626 0.613795 0.158488 0.571037C0.12735 0.527933 0.102316 0.48793 0.0833847 0.451378C0.0644192 0.414826 0.0502123 0.381723 0.0407295 0.352068C0.0312468 0.322412 0.0248333 0.296551 0.021454 0.275172C0.0180747 0.253792 0.016695 0.236897 0.0173846 0.224483C0.0180743 0.212069 0.0183849 0.205174 0.0183849 0.203794C0.0197642 0.194484 0.0227986 0.184826 0.0275228 0.174826C0.0322814 0.164826 0.0380397 0.156896 0.0447983 0.150689L0.179833 0.0144843C0.189316 0.0048291 0.200143 0 0.212316 0C0.221109 0 0.228902 0.00241278 0.235661 0.0075852C0.242419 0.0127576 0.248178 0.0189662 0.252937 0.0265524L0.361557 0.23483C0.367661 0.245519 0.36935 0.257585 0.366626 0.270689C0.363937 0.283447 0.358178 0.294484 0.349385 0.30345L0.299626 0.353448C0.298281 0.354828 0.297074 0.35724 0.296074 0.360343C0.29504 0.363447 0.294557 0.365864 0.294557 0.367933C0.297247 0.382415 0.30335 0.39862 0.312833 0.417241C0.320937 0.433447 0.333454 0.453447 0.350385 0.47724C0.367316 0.500688 0.39135 0.527929 0.422488 0.558619C0.452936 0.589998 0.480005 0.614481 0.503695 0.631722C0.527385 0.649309 0.547178 0.662067 0.563109 0.670343C0.579005 0.678619 0.591178 0.683448 0.599661 0.685172L0.61235 0.687584C0.613695 0.687584 0.615902 0.687242 0.618937 0.686208C0.621971 0.685173 0.624178 0.683795 0.625523 0.68276L0.683419 0.623102C0.695592 0.612067 0.709799 0.606896 0.72604 0.606896C0.737557 0.606896 0.746695 0.608621 0.753454 0.612759H0.754488L0.95042 0.729656C0.964661 0.738622 0.973109 0.75 0.975799 0.763449Z" fill="currentColor"></path></svg>
                    <a className="ml-2 text-accent text-indigo-700 underline">{profile.info.phone}</a>
                  </li>
                  <li className="flex items-center p-0 mb-1">
                    <svg width="14" height="14" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.376311 0.535897L0.0225867 0.857279C0.0354488 0.870037 0.0527936 0.877968 0.0719315 0.877968H0.928104C0.947138 0.877968 0.964448 0.870037 0.977276 0.857279L0.623759 0.535897L0.5 0.650727L0.376311 0.535897ZM0 0.816242L0.345242 0.505207L0 0.187277V0.816242ZM1 0.816242V0.186932L0.654794 0.505207L1 0.816242ZM0.928104 0.120728H0.0719315C0.052897 0.120728 0.0355866 0.128658 0.0227245 0.141416L0.5 0.575208L0.977414 0.141416C0.964586 0.128658 0.947276 0.120728 0.928104 0.120728Z" fill="currentColor"></path>
                    </svg>
                    <a href={"mailto:"+profile.info.email} className="ml-2 text-accent text-indigo-700 underline">{profile.info.email}</a>
                  </li>
                  <li className="flex items-center p-0 m-0">
                    <svg width="14" height="14" viewBox="0 0 1 1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.48749 0C0.290194 0 0.129639 0.16148 0.129639 0.359628C0.129639 0.605924 0.449861 0.967404 0.463528 0.982589C0.476305 0.997034 0.498675 0.997034 0.511453 0.982589C0.525083 0.967404 0.845305 0.605924 0.845305 0.359628C0.845305 0.16148 0.684786 0 0.48749 0ZM0.48749 0.54074C0.388194 0.54074 0.307453 0.459628 0.307453 0.359628C0.307453 0.259999 0.388194 0.178887 0.48749 0.178887C0.586749 0.178887 0.667527 0.259999 0.667527 0.359628C0.667527 0.459628 0.586749 0.54074 0.48749 0.54074Z" fill="currentColor"></path></svg>
                    <p className="m-0 ml-2 text-accent">{profile.info.address}</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className='text-[#363636] text-xs'>
              <h3 className='mb-2 text-base'>Education</h3>
              <div className="flex flex-col items-start prose">
                <h4 className="mt-0 mb-0.5 text-sm text-indigo-700"><span dangerouslySetInnerHTML={{__html: profile.education.name}}></span></h4>
                <small className="text-slate-500 block leading-3 text-xs uppercase tracking-wide mb-1">{profile.education.time}</small>
                <h5 className="text-slate-600 mt-1 leading-3 text-xs">{profile.education.majors}</h5>
              </div>
            </div>
            {/* Skill */}
            <div className='text-[#363636] text-xs'>
              <h3 className="mt-4 mb-2 leading-tight text-base">Skills</h3>
              <ul className='p-0 grid grid-cols-2'>
                {profile.skills.map((item, i) => (
                  <li key={i} className='p-0 mb-2 flex items-center'>
                    <div className='mr-2 not-prose'>
                      <ul className='flex -mx-1'>
                        <li className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                          <Image src={getIconPath(item.key)} width={14} height={14} layout="fixed" />
                        </li>
                      </ul>
                    </div>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Language */}
            <div className='text-[#363636] text-xs'>
              <h3 className="mt-4 mb-2 leading-tight text-base">Languages</h3>
              <ul className="pl-0">
                {profile.languages.map(item => (
                  <li key={item.key} className="mb-2 p-0 flex items-center">
                    <Image src={getIconPath(item.key)} width={18} height={18} layout="fixed" />
                    <h4 className='ml-2 my-0'>{item.label}</h4>
                  </li>
                ))}
              </ul>
            </div>
            {/* Hobby */}
            <div className='text-[#363636] text-xs'>
              <h3 className="mt-4 mb-2 leading-tight text-base">Hobby</h3>
              <ul className="p-0">
                {profile.hobby.map((item, i) => (
                  <li key={i} className="mb-2 p-0">
                    <span dangerouslySetInnerHTML={{__html: item.label}}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='py-8 pb-4 px-12 h-full flex flex-col text-[#363636]'>
          <div className="mt-0 mb-6">
            <h1 className="text-5xl font-semibold font-header tracking-wide">
              <span className='mr-2'>{profile.info.firstName}</span><span className="text-accent text-indigo-700">{profile.info.lastName}</span>
            </h1>
            <h2 className="text-xl tracking-wider mt-1">{profile.info.role}</h2>
          </div>
          <div className="mb-6 prose-sm prose-slate">
            <h3 className='text-base mb-1'>About</h3>
            <p className="leading-5 text-xs text-slate-600">As a <b>full-stack web developer</b> with <b>3+ years</b> of experience, I have a broad skill set in everything web development: Leading frontend teams, building complex business software from the ground up, high-traffic public websites, webshops, showcases, and proof-of-concepts. I specialize myself in<b> Typescript, React, Next.js, Nodejs, HTML, CSS,</b> and <b>GraphQL</b>.</p>
          </div>
          <div className='h-full flex flex-col prose-sm'>
            <h3 className='text-base mb-1'>Work Experience</h3>
            <div className='h-full flex flex-col'>
              {profile.workExperiences.map((item, rootIndex) => (
                <div key={rootIndex}>
                  <h4 className="mt-0 mb-0.5 text-sm text-indigo-700"><b>{item.location} - </b>{item.position}</h4>
                  <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide mb-2">{item.time}</p>
                  <ul className="list-disc text-xs text-slate-600 pl-5">
                    {item.descriptions.map((des, index) => (
                      <li index={index} key={rootIndex + index} className="pl-0 mb-1">
                        <span dangerouslySetInnerHTML={{__html: des}}></span>
                      </li>
                    ))}
                  </ul>
                  <div className='mt-2 not-prose'>
                    <ul className='flex -mx-1'>
                      {item.frameworks.map((keywork, index) => (
                        <li index={index} key={rootIndex + index} className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                          <Image src={getIconPath(keywork)} width={18} height={18} alt={keywork} layout="fixed" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {(rootIndex !== profile.workExperiences.length - 1) && <hr className="my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProfilePage.layout = (page) => (
  <BlankLayout>
    {page}
  </BlankLayout>
)

export default ProfilePage;
