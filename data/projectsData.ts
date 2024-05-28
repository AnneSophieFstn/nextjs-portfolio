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
    href: 'https://github.com/AnneSophieFstn/nodejs-api-noutbasket',
    dataBubble: ['nodejs', 'react', 'reactnative'],
  },
  {
    title: 'Croix-Rouge Française de la Réunion',
    description: `Refonte complète du site internet officiel de la Croix-Rouge française de la Réunion.
`,
    imgSrc: '/static/images/crf.jpg',
    href: 'https://reunion.croix-rouge.fr/',
    dataBubble: ['wordpress'],
  },
  {
    title: "BACKEND - Gestion réservation d'ordinateurs",
    description: `Créer une application sécurisée qui permet de gérer l'attribution des postes informatiques aux visiteurs d'un centre culturel sur les horaires d'ouverture.
`,
    imgSrc: '/static/images/logo/node-js.png',
    href: 'https://github.com/AnneSophieFstn/nodejs-api',
    dataBubble: ['nodejs', 'react'],
  },
]

export default projectsData
