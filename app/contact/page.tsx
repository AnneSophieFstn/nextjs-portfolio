import SocialIcon from '@/components/social-icons'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-[400px] divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1
          id="contact"
          className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Contact
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="m-5">
          N'hésitez pas à me contacter pour discuter de projets futurs ou pour toute question
          supplémentaire.
        </p>
        <div>
          <Link
            className="ring-offset-background focus-visible:ring-ring text-secondary-foreground mr-5 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100 max-xl:mb-2 max-sm:mb-2"
            href="https://github.com/AnneSophieFstn"
          >
            <SocialIcon kind="localisation" href="https://github.com/AnneSophieFstn" size={5} />
            Saint-Benoit, La Réunion
          </Link>
          <Link
            className="ring-offset-background focus-visible:ring-ring text-secondary-foreground mr-5 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100 max-xl:mb-2 max-sm:mb-2"
            href="https://github.com/AnneSophieFstn"
          >
            <SocialIcon kind="github" href="https://github.com/AnneSophieFstn" size={5} />
            Github
          </Link>
          <Link
            className="ring-offset-background focus-visible:ring-ring text-secondary-foreground mr-5 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100 max-xl:mb-2 max-sm:mb-2"
            href="https://www.linkedin.com/in/annesophie-faustino/"
          >
            <SocialIcon
              kind="linkedin"
              href="https://www.linkedin.com/in/annesophie-faustino/"
              size={5}
            />
            LinkedIn
          </Link>
          <Link
            className="ring-offset-background focus-visible:ring-ring text-secondary-foreground mr-5 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100 max-xl:mb-2 max-sm:mb-2"
            href="mailto:annesophie.faustino@gmail.com"
          >
            <SocialIcon kind="mail" href={`mailto:annesophie.faustino@gmail.com`} size={5} />
            annesophie.faustino@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}
