interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  dataBubble: Array<any>
}

const projectsData: Project[] = [
  {
    title: "Nout'Basket",
    description: `Application web et mobile pour les amateurs de basket.

`,
    imgSrc: '/static/images/Mockups-nout-basket.png',
    href: 'https://github.com/AnneSophieFstn/react-native-noutbasket',
    dataBubble: ['nodejs', 'react', 'reactnative'],
  },
  {
    title: 'Prestashop',
    description: `Application web destinée à promouvoir les auto-entrepreneurs et les prestataires locaux à La Réunion.
`,
    imgSrc: '/static/images/Mockups-prestashop.png',
    href: 'https://github.com/AnneSophieFstn/prestashop',
    dataBubble: ['nodejs', 'react'],
  },
  {
    title: "BACKEND - Gestion réservation d'ordinateurs",
    description: `Création d'une API sécurisée qui permet de gérer l'attribution des postes informatiques aux visiteurs d'un centre culturel sur les horaires d'ouverture.
`,
    imgSrc: '/static/images/logo/node-js.png',
    href: 'https://github.com/AnneSophieFstn/nodejs-api',
    dataBubble: ['nodejs'],
  },
]

export default projectsData
