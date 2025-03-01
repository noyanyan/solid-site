import { Resource, ResourceCategory, ResourceType } from '../Resources';

const utilities: Array<Resource> = [
  {
    link: 'https://github.com/solidjs/solid-styled-jsx',
    title: 'solid-styled-jsx',
    description: "Wrapper for using Solid with Vercel's Styled JSX.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['vercel', 'styled', 'jsx'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid-app-router',
    title: 'solid-app-router',
    description:
      "A small config-driven router inspired by Ember Router. While less dynamic than the common React it's used for things like you'd find in isomorphic metaframeworks.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid/blob/main/packages/solid-element',
    title: 'solid-element',
    description: 'Extensions to Solid.js that add a Web Component wrapper.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['web', 'components', 'web components', 'elements'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://www.npmjs.com/package/@rturnq/solid-router',
    title: 'solid-router',
    description: 'An official/unofficial router for Solid.',
    author: 'Ryan Turnquist',
    author_url: 'https://github.com/rturnq',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/milahu/solidjs-treeview-component',
    title: 'solidjs-treeview-component',
    description: 'Interactive tree of nodes, expand/collapse, fetch child nodes on demand.',
    author: 'milahu',
    author_url: 'https://github.com/milahu',
    keywords: ['tree', 'expand', 'collapse'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/mikeplus64/solid-typefu-router5',
    title: 'solid-typefu-router5',
    description:
      'This package provides a router with integration with router5 and solid-js, and features type safe router and link creation.',
    author: 'Mike Ledger',
    author_url: 'https://github.com/mikeplus64',
    keywords: ['router'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Routers],
  },
  {
    link: 'https://github.com/solidjs/solid-meta',
    title: 'solid-meta',
    description: 'Asynchronous SSR-ready Document Head management for Solid based on React Head.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['meta', 'document'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/solidjs/solid-refresh',
    title: 'solid-refresh',
    description: 'This project aims to provide HMR for Solid for various bundlers.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['hmr', 'refresh'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/solidjs/solid-jest',
    title: 'solid-jest',
    description:
      'This library contains presets for SolidJS to easily get started testing with Jest for both browser and server rendering with Node.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['testing', 'jest'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Testing],
  },
  {
    link: 'https://github.com/solidjs/solid-testing-library',
    title: 'solid-testing-library',
    description:
      'Simple and complete Solid DOM testing utilities that encourage good testing practices.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryancarniato',
    keywords: ['testing'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Testing],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-debug',
    title: 'solid-debug',
    description: 'A very simple visual debugger for Solid.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['debug'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/solid-playground',
    title: 'solid-playground',
    description: 'A playground and REPL for Solid.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['playground', 'plugin'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/amoutonbrady/vite-plugin-solid',
    title: 'vite-plugin-solid',
    description: 'A plugin to bring support for Solid to Vite.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['vite', 'plugin'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-heroicons',
    title: 'solid-heroicons',
    description: 'A convenient port of the Tailwind Heroicons.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['icons', 'ui', 'hero'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/amoutonbrady/esbuild-plugin-solid',
    title: 'esbuild-plugin-solid',
    description: 'Plugin to compile solid-js jsx components with esbuild.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['esbuild', 'tooling'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions/tree/main/packages/lit-dom-expressions',
    title: 'lit-dom-expressions',
    description: 'Tagged Template Literal API for DOM Expressions.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['babel', 'expressions'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions/tree/main/packages/babel-plugin-jsx-dom-expressions',
    title: 'babel-plugin-jsx-dom-expressions',
    description: 'Babel plugin that converts JSX to DOM Expressions.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['babel', 'expressions'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/create-solid',
    title: 'create-solid',
    description: "Solid's port of Create React App.",
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter', 'cra'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/dom-expressions',
    title: 'dom-expressions',
    description:
      'The renderer behind Solid.js that enables lightning fast fine grained performance.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['dom', 'expressions'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/high1/solid-typescript-rollup',
    title: 'solid-typescript-rollup',
    description: 'Solid and Rollup support starter.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: ['starter', 'rollup'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://gitlab.com/enom/solid-parcel-starter',
    title: 'solid-parcel-starter',
    description: 'Solid starter with Tailwind and Parcel',
    author: 'Jonathan Ginn',
    author_url: 'https://gitlab.com/enom',
    keywords: ['starter', 'typescript', 'parcel', 'tailwind'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/parcel2-solid-ts-starter',
    title: 'parcel2-solid-ts-starter',
    description: 'Parcel 2 support for SOlid. Great DX + performances out of the box.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'typescript', 'parcel2'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-snowpack-starter',
    title: 'solid-snowpack-starter',
    description:
      'Solid + snowpack + tailwindcss template You get HMR out of the box and full PWA compatible.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'typescript', 'snowpack'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/builderio/jsx-lite',
    title: 'jsx-lite',
    description:
      'Generalized JSX that transpiles into Solid, React, Angular, Vue, etc. They have plugins for Figma, VSCode, & Builder.io.',
    author: 'Builder.io',
    author_url: 'https://github.com/builderio',
    keywords: ['jsx', 'jsx-lite', 'builder'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/high1/solid-typescript-starter',
    title: 'solid-typescript-starter',
    description: 'Typescript start with Solid.',
    author: 'high1',
    author_url: 'https://github.com/high1',
    keywords: ['starter', 'typescript'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/ryansolid/solid-ts-webpack',
    title: 'solid-ts-webpack',
    description: 'Typescript start with Webpack.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter', 'typescript', 'webpack'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/templates',
    title: 'solidjs/templates',
    description: 'This repository holds most of the official starter templates for vite.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['starter', 'templates', 'vite', 'tailwind', 'bootstrap'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/amoutonbrady/snowpack-solid',
    title: 'snowpack-solid',
    description:
      'Solid + snowpack + tailwindcss template You get HMR out of the box and full PWA compatible.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['snowpack', 'tooling'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters],
  },
  {
    link: 'https://github.com/amoutonbrady/parcel2-solid-ts-starter',
    title: 'parcel2-solid-ts-starter',
    description:
      'This template is based on yarn 2 pnp resolution (zero-install). It also uses parcel 2 for bundling.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['parcel2', 'tooling', 'boilerplate'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/MrFoxPro/solid-rollup-boilerplate',
    title: 'solid-rollup-boilerplate',
    description: 'Simple starter for Rollup + Solid.',
    author: 'Dmitriy Nikiforov',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['boilerplate', 'rollup'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://github.com/solidjs/solid-transition-group',
    title: 'solid-transition-group',
    description:
      'Animation library influenced by React Transition Group and Vue Transitions for the SolidJS library.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['transitions', 'animations'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/solidjs/solid-start',
    title: 'solid-start',
    description:
      'This is the home of the new official starter for Solid. This is still a work in progress.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['starter'],
    official: true,
    type: ResourceType.Library,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/solidjs/vite-plugin-solid',
    title: 'vite-plugin-solid',
    description: 'Plugin that allows SolidJS to run with Vite.',
    author: 'Alexandre Mount Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: ['vite', 'bundler'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.BuildUtilities, ResourceCategory.Plugins],
  },
  {
    link: 'https://github.com/thisbeyond/solid-dnd',
    title: 'solid-dnd',
    description: 'A lightweight and extremely performant drag and drop toolkit for Solid.',
    author: 'Martin Pengelly-Phillips',
    author_url: 'https://github.com/martinpengellyphillips',
    keywords: ['drag', 'drop', 'dnd'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Primitives],
  },
  {
    link: 'https://github.com/solidjs/react-solid-state',
    title: 'react-solid-state',
    description: 'React Hooks API to use Solid.js paradigm in your existing React apps.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['hooks'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/MrFoxPro/solid-chart.js',
    title: 'solid-chart',
    description: 'Chart.js powered by solid-js framework.',
    author: 'Dmitriy Nikiforov',
    author_url: 'https://github.com/MrFoxPro',
    keywords: ['chart', 'chart.js'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/mduclehcm/solid-form',
    title: 'solid-form',
    description: 'Build 60fps forms with solid.js.',
    author: 'Le Minh Duc',
    author_url: 'https://github.com/mduclehcm',
    keywords: ['form'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/storeon/solidjs',
    title: 'reatom-solid',
    description: 'Reatom bindings for Reatom.',
    author: 'skrylnikov',
    keywords: ['reatom'],
    official: false,
    author_url: 'https://github.com/skrylnikov',
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/storeon/solidjs',
    title: 'solid-storeon',
    description:
      'A package that helps to connect store with Solid.js to provide a better performance and developer experience while remaining so tiny.',
    author: 'Storeon',
    keywords: ['storeon', 'store'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/solidjs/solid-styled-components',
    title: 'solid-styled-components',
    description:
      'This library provides Styled Components and css helper found in popular JS in CSS libraries.',
    author: 'Ryan Carniato',
    author_url: 'https://github.com/ryansolid',
    keywords: ['styled', 'components', 'goober'],
    official: true,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn],
  },
  {
    link: 'https://github.com/Acidic9/emotion-solid',
    title: 'emotion-solid',
    description: 'This library is an Emotion Styled port for Solid.',
    author: 'Ari Seyhun',
    author_url: 'https://github.com/Acidic9',
    keywords: ['emotion', 'styled', 'components', 'css in js'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/andgate/solid-orbit',
    title: 'solid-orbit',
    description:
      'This package provides Solid a provider and hooks for Orbit. Most notably, this provides a useQuery hook which is a query transform listener, updating component props with records as they are changed.',
    author: 'Gabriel Anderson',
    author_url: 'https://github.com/andgate',
    keywords: ['orbit', 'store', 'data'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/lume/lume',
    title: 'LUME',
    description:
      'Custom elements powered by Solid. LUME is a toolkit that creates 2D or 3D experiences for any device from mobile to desktop to AR/VR.',
    author: 'Joe Pea',
    author_url: 'https://github.com/trusktr',
    keywords: ['graphics', '3d', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://www.npmjs.com/package/phosphor-solid',
    title: 'phosphor-solid',
    description:
      'Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.',
    author: 'Arturo Aguilera',
    author_url: 'https://github.com/aguilera51284',
    keywords: ['phosphor', 'ui', 'icon'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/matteobruni/tsparticles/tree/main/components/solid',
    title: 'solid-particles',
    description: 'Official particles.js implementation for Solid.',
    author: 'Matteo Bruni',
    author_url: 'https://particles.js.org/',
    keywords: ['particles', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/mosheduminer/solid-form-action',
    title: 'solid-form-action',
    description:
      'This package provides a function that accepts a definition of the initial state of your form, its validation, and submission.',
    author: 'Moshe Uminer',
    author_url: 'https://github.com/mosheduminer',
    keywords: ['action', 'form', 'validation', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.AddOn, ResourceCategory.UI],
  },
  {
    link: 'https://github.com/wobsoriano/vite-solid-tailwind-starter',
    title: 'vite-solid-tailwind-starter',
    description: 'Starter using Vite + Solid + Tailwind CSS.',
    author: 'Robert Soriano',
    author_url: 'https://github.com/wobsoriano',
    keywords: ['starter', 'templates', 'vite', 'tailwind'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Starters, ResourceCategory.BuildUtilities],
  },
  {
    link: 'https://www.npmjs.com/package/solid-urql',
    title: 'solid-urql',
    description: 'A highly customizable and versatile GraphQL client for Solid.',
    author: 'Ari Seyhun',
    author_url: 'https://github.com/Acidic9',
    keywords: ['graphql', 'url', 'url', 'formidable'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.Data],
  },
  {
    link: 'https://github.com/pablo-abc/solid-reach',
    title: 'solid-reach',
    description:
      'This is a port of ReachUI for Solid that (hopefully) will serve you as The Accessible Foundation for Solid Apps and Design Systems.',
    author: 'Pablo Berganza',
    author_url: 'https://github.com/pablo-abc',
    keywords: ['accessibility', 'system', 'reach', 'ui'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/pablo-abc/felte',
    title: 'Felte',
    description:
      'An extensible form library that supports Solid. No Field or Form components are needed, just plain stores and actions.',
    author: 'Pablo Berganza',
    author_url: 'https://github.com/pablo-abc',
    keywords: ['form', 'validator', 'validation', 'input'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/amoutonbrady/solid-i18n',
    title: 'solid-i18n',
    description: 'Tiny translation library for solid-js inspired by rosetta.',
    author: 'Alexandre Mouton Brady',
    author_url: 'https://github.com/amoutonbrady',
    keywords: [
      'i18n',
      'localisation',
      'localization',
      'translate',
      'translations',
      'language',
      'rosetta',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI, ResourceCategory.Data],
  },
  {
    link: 'https://github.com/davedbase/solid-slider',
    title: 'solid-slider',
    description: 'A carousel/slider implementation in TypeScript for Solid using KeenSlider.',
    author: 'David Di Biase',
    author_url: 'https://github.com/davedbase/solid-slider',
    keywords: [
      'slider',
      'carouse',
      'solid',
      'keen',
      'slider',
      'carousel',
      'caroussel',
      'slideshow',
      'gallery',
      'plugin',
    ],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
  {
    link: 'https://github.com/minht11/solid-virtual-container',
    title: 'solid-virtual-container',
    description: 'Efficient, single direction virtual list/grid for Solid-js.',
    author: 'Justinas Delinda',
    author_url: 'https://github.com/minht11',
    keywords: ['container', 'virtual', 'list', 'grid'],
    official: false,
    type: ResourceType.Package,
    categories: [ResourceCategory.UI],
  },
];

export default utilities;
