const profile = {
  info: {
    firstName: 'Tran',
    lastName: 'Trung Tinh',
    avatar: 'https://avatars.githubusercontent.com/u/26228049?v=4',
    phone: '+84 972 258 138',
    email: 'trantrungtinh1x96@gmail.com',
    address: 'Ho Chi Minh, VietNam',
    role: 'Full-stack Developer'
  },
  education: {
    name: '<b> University of Science</b> - VNUHCM',
    time: '2014 - 2018',
    majors: '🎓 Software Engineer'
  },
  skills: [
    { key: 'js', label: 'Javascript' },
    { key: 'ts', label: 'Typescript' },
    { key: 'vue', label: 'Vue' },
    { key: 'react', label: 'React' },
    { key: 'nuxt', label: 'Nuxt.js' },
    { key: 'next', label: 'Next.js' },
    { key: 'ant', label: 'Ant' },
    { key: 'quasar', label: 'Quasar' },
    { key: 'material', label: 'Material' },
    { key: 'tailwind', label: 'TailwindCSS' },
    { key: 'node', label: 'NodeJS' },
    { key: 'graphql', label: 'GraphQL' },
    { key: 'webpack', label: 'Webpack' },
    { key: 'vite', label: 'Vite' },
    { key: 'html', label: 'HTML' },
    { key: 'css', label: 'CSS' },
    { key: 'scss', label: 'SASS' },
    { key: 'firebase', label: 'Firebase' },
    // { key: 'd3', label: 'D3' },
    { key: 'docker', label: 'Docker' },
    { key: 'php', label: 'PHP' },
    { key: 'figma', label: 'Figma' },
    { key: 'dart', label: 'Dart' },
    { key: 'aws', label: 'AWS' }
  ],
  languages: [
    { key: 'vi', label: 'Vietnamese - Native' },
    { key: 'en', label: 'English - Knowledge' }
  ],
  hobby: [
    { label: '<span className="mr-2">👨🏼‍💻</span> Programming' },
    { label: '<span className="mr-2">🏍️</span> Moto' },
    { label: '<span className="mr-2">🏃🏼‍♂️</span> Running' },
    { label: '<span className="mr-2">🏸</span> Badminton' },
    { label: '<span className="mr-2">🎹</span> Piano' },
    { label: '<span className="mr-2">🎮</span> Gaming' }
  ],
  workExperiences: [
    // {
    //   location: 'Deloitte',
    //   position: 'Frontend Team Lead / Manager',
    //   time: 'NOV 2020 - PRESENT, UTRECHT',
    //   descriptions: [
    //     'Lead a team of developers accross different products',
    //     'Evaluate work and performance',
    //     'Coach/train (new) developers',
    //     'Rewrote "Process X-Ray", the oldest and most successful product, from scratch with whole new techstack',
    //     'Promoted from <strong>junior manager</strong> to <strong>manager</strong> within the first year.'
    //   ],
    //   frameworks: ['ts', 'html', 'scss', 'graphql', 'react', 'next', 'amplify', 'vite']
    // },
    // {
    //   location: 'HeadFWD',
    //   position: 'Senior Full-Stack Consultant',
    //   time: 'MAR 2019 - NOV 2020, AMSTERDAM',
    //   descriptions: [
    //     'Senior Consultant for <strong>Deloitte</strong>, <strong>Achmea</strong>, and <strong>Eurovision</strong>',
    //     'Hiring and coaching developers',
    //     'Knowledge sharing within the company (presentations, hackathons and workshops)',
    //     'Rewrote "Process X-Ray", the oldest and most successful product, from scratch with whole new techstack',
    //     'Left due to being hired directly by <strong>Deloitte</strong> for a <strong>permanent team role</strong>'
    //   ],
    //   frameworks: ['ts', 'html', 'scss', 'graphql', 'react', 'next', 'amplify', 'vite']
    // },
    {
      location: 'Spring Knowledge Global',
      position: 'Frontend Developer',
      time: 'FEB 2019 - PRESENT, HO CHI MINH',
      descriptions: [
        'Define the architecture, coding convention, and setup build system for the whole front-end of the project (includes linter, unit test, build script)',
        "Maintaining <strong>Job Medica's</strong> legacy system. Refactoring code, and re-architecting the monolith service into many <strong>micro-services.</strong>",
        'Proficient in developed the projects such as Dashboard',
        'Knowledge sharing within the teams (presentations)'
        // 'Build intranet portals for <strong>Philips, ABN AMRO, Philips</strong> and <strong>Colruyt Group</strong>',
        // 'Developed a Dashboard for Endemol Shine Group together with Emotome',
        // 'Rebuild the <strong>G-STAR</strong> Checkout as consultant'
      ],
      frameworks: ['ts', 'scss', 'graphql', 'react', 'next', 'vue', 'nuxt', 'quasar', 'ant', 'material', 'tailwind', 'figma', 'amplify', 'vite',]
    },
    {
      location: 'Haravan',
      position: 'Backend Developer',
      time: 'APR 2018 - OCT 2018, HO CHI MINH',
      descriptions: [
        'Created interactive demos for <strong>Shell</strong>, combining <strong>Javascript, Websockets</strong> and the fuel pump.',
        'Worked on CRUD and monitoring applications for <strong>Shell, Vodafone, Goldbach</strong> and <strong>MyAdbooker.</strong>',
        'Kicked-off the frontend rewrite of MyAdbooker.'
      ],
      frameworks: ['js', 'html', 'css', 'node', 'php', 'firebase', 'webpack']
    }
  ]
}

export {
  profile
}