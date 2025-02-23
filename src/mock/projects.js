import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://www.perfectreplicawatch.is/wp-content/uploads/2020/05/www.perfectreplica.to_-1024x686.jpg',
    title: 'Watch Store - E - Commerce Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
     ],
    description:
      'Watch Store is done with top-notch features for the entrepreneur startups like Daraz. It is build with React Js, Node Js.',
    repoLink: 'https://github.com/mr-fahad-03/watch-store',
    sourceLink: 'https://timeless-treasure.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://i0.wp.com/blog.favoree.io/wp-content/uploads/2023/10/image-19.png?resize=1024%2C515&ssl=1',
    title: 'Movie Rating Website',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'React Router'),
    ],
    description:
      'Simple and classic Movie Ratings for who wants to present himself as a software developer. Movie Rating Website build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/mr-fahad-03/',
    sourceLink: 'https://filmfeelz.netlify.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://www.mikeroysoft.com/post/download-fusion-ws/dl-vmw-fusion-ws-04.png',
    title: 'Broadcom Inc - E - Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'Github'),
    ],
    description:
      'The e-commerce to buy Broadcom related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/mr-fahad-03/broadcom-nextjs',
    sourceLink: 'https://broadcom-inc.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://repository-images.githubusercontent.com/481788283/f68c84a1-9c9d-4fd6-baed-c5e68eb3ac30',
    title: 'Movie Clone - TMDB API Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: 'Movie clone using react Js. Proving movies details using TMDB API.',
    repoLink: 'https://github.com/mr-fahad-03/notfound',
    sourceLink: 'https://codewithsadee.github.io/filmlane/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
