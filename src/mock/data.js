import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alex Norberto', // e.g: 'Name | Developer'
  lang: 'pt, en', // e.g: en, es, fr, jp
  description: "I'm a front-end developer.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá! Eu sou',
  name: 'Alex Norberto',
  subtitle: 'e sou um desenvolvedor front-end.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Sou formado em Ciência da Computação pela Universidade Federal do Rio Grande do Norte, UFRN e estou iniciando como desenvolvedor front-end. Tenho desenvolvido páginas com HTML, CSS e JavaScript e fiz cursos recentes em bootstrap e React.',
  paragraphTwo:
    'Estou aberto a novas oportunidades e sempre disposto a aprender novas tecnologias para melhorar minhas habilidades afim de desenvolver melhores aplicações.',
  paragraphThree:
    'Tive experiência com JAVA e C++ durante o período acadêmico. Atualmente com interesse em estudar tecnologias como Angular e Node JS.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'p_same.jpg',
    title: 'SAME',
    info:
      'Webapp desenvolvido para o Serviço de Arquivo Médico e Estatística do HRDML como teste de integração de interface para o google sheets usando React, HTML+CSS+JS e tentativa de testes e hospedagem com firebase.',
    info2: '',
    url: 'https://same-hrdml.web.app',
    repo: 'https://github.com/alexnorberto/same-hrdml', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_fashion.jpg',
    title: 'Fashion',
    info: 'Página básica desenvolvida utilizando HTML+CSS para o curso de desenvolvedor front-end',
    info2: '',
    url: 'https://alexnorberto.github.io/fashion/',
    repo: 'https://github.com/alexnorberto/fashion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_flexblog.jpg',
    title: 'FlexBlog',
    info: 'Página desenvolvida utilizando HTML+CSS+JS para o curso de desenvolvedor front-end',
    info2: '',
    url: 'https://alexnorberto.github.io/flexblog/',
    repo: 'https://github.com/alexnorberto/flexblog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_strata.jpg',
    title: 'Strata',
    info:
      'Página responsiva desenvolvida utilizando HTML+CSS+JS para o curso de desenvolvedor front-end',
    info2: '',
    url: 'https://alexnorberto.github.io/strata/',
    repo: 'https://github.com/alexnorberto/strata', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_hostels.jpg',
    title: 'Hostels',
    info: 'Página desenvolvida utilizando HTML+CSS+JS para o curso de desenvolvedor front-end',
    info2: '',
    url: 'https://alexnorberto.github.io/hostels/',
    repo: 'https://github.com/alexnorberto/hostels', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_infusion.jpg',
    title: 'Infusion',
    info:
      'Página totalmente responsiva desenvolvida utilizando HTML+CSS+JS, para o curso de desenvolvedor front-end',
    info2: '',
    url: 'https://alexnorberto.github.io/infusion/',
    repo: 'https://github.com/alexnorberto/infusion', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'e-mail',
  email: 'alexsandronorberto@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-norberto-1850961bb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alexnorberto',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
