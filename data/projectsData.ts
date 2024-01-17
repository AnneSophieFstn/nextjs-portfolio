interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  dataBubble: Array<any>
}

const projectsData: Project[] = [
  {
    title: "Ball'n co",
    description: `Application web, mobile qui permet de réunir les fans du basket.

`,
    imgSrc: '/static/images/ballnco.png',
    href: 'https://github.com/AnneSophieFstn/basketball-app',
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
