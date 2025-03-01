const core = [
  {
    img: 'ryan-carniato.jpeg',
    github: 'ryansolid',
    name: 'Ryan Carniato',
    role: 'Project Founder and Manager',
    bio: 'Front-end JS performance enthusiast and long time super-fan of fine-grained reactive programming.',
  },
  {
    img: 'david-dibiase.jpeg',
    github: 'davedbase',
    name: 'David Di Biase',
    role: 'Contributor, Website and Community Manager',
    bio: 'David is a full-stack developer. He owns and operates Pilot, a Toronto-based brand technology company.',
  },
  {
    img: 'alexandre-mouton-brady.jpeg',
    github: 'amoutonbrady',
    name: 'Alexandre Mouton Brady',
    role: 'Library Maintainer',
    bio: 'A multi-talented web developer with a preference for the front. He takes great pleasure in making the web more alive.',
  },
  {
    img: 'milo-m.svg',
    github: 'modderme123',
    name: 'Milo M.',
    role: 'Library Maintainer',
    bio: ' A web developer with an interest in reactive programming and making the web a better place.',
  },
] as const;

const translators = [
  {
    name: 'Gaving Cong',
    language: 'zh-cn',
    flag: '🇨🇳',
    link: 'https://github.com/Gavin-Gong'
  },
  {
    name: 'Jun Shindo',
    language: 'jp',
    flag: '🇯🇵',
    link: 'https://github.com/jay-es'
  },
  {
    name: 'David Di Biase',
    language: 'it',
    flag: '🇮🇹',
    link: 'https://github.com/davedbase'
  }
];

const contributors = [
  {
    name: 'Eric Rochon',
    company: 'Brood Studio',
    link: 'https://brood.studio',
    detail: "A special thanks to Eric for his incredible contribution to Solid's brand.",
  },
  {
    name: 'Sarah Kim',
    company: 'Pilot Interactive',
    link: 'https://www.pilotinteractive.io',
    detail: 'Sarah has graciously provided her expertise in usability and design.',
  },
  {
    name: 'Les Pruszynski',
    company: '',
    link: 'https://github.com/seneca',
    detail: 'Les provides support for copywriting on the website and our tutorials.',
  },
] as const;

const ecosystem = [
  {
    name: 'Joe Pea',
    company: 'NASA',
    link: 'https://github.com/trusktr',
    detail: 'Founder of Lume and a powerhouse in UI.',
  },
  {
    name: 'Moshe Uminer',
    company: '',
    link: 'https://www.pilotinteractive.io',
    detail: 'Full-stack support and TypeScript guidance.',
  },
  {
    name: 'Steve Sewell',
    company: 'Builder.io',
    link: 'https://www.builder.io',
    detail: 'Founder of Builder.io CMS and creator of JSX-Lite.',
  },
  {
    name: 'Ryan Turnquist',
    company: '',
    link: 'https://github.com/rturnq',
    detail: 'Full-stack developer, web UX enthusiast, passionate problem solver.',
  },
  {
    name: 'Vish Vadlamani',
    company: '',
    link: '',
    detail: 'Provides support and insight on Solid.',
  },
] as const;

export const ContributorsData = () => ({
  core,
  contributors,
  translators,
  ecosystem,
});

export type ContributorsDataProps = ReturnType<typeof ContributorsData>;
