import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import Moi from '../public/static/images/annesophie-faustino.jpeg'

export default function Home() {
  return (
    <>
      <div className="items-center justify-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          <h3 className="text-2xl font-bold">Bienvenue, je suis</h3>
          <h1 className="mb-2 text-8xl font-bold">Anne-Sophie</h1>
          <h1 className="mb-2 text-8xl font-bold">Faustino</h1>
          <span>
            <span className="text-4xl font-bold">Développeuse web </span>
            habitant sur l'île de la Réunion. 🌋🌴☀️
          </span>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              className="ring-offset-background focus-visible:ring-ring text-secondary-foreground inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100"
              href="https://github.com/AnneSophieFstn"
            >
              <SocialIcon kind="github" href="https://github.com/AnneSophieFstn" size={5} />
              Github
            </Link>
            <Link
              className="ring-offset-background focus-visible:ring-ring text-secondary-foreground inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100"
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
              className="ring-offset-background focus-visible:ring-ring text-secondary-foreground inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100"
              href="mailto:annesophie.faustino@gmail.com"
            >
              <SocialIcon kind="mail" href={`mailto:annesophie.faustino@gmail.com`} size={5} />
              annesophie.faustino@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-x-2 pt-8">
          <Image
            className="rounded-full"
            src={Moi.src}
            alt="face of anne-sophie"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  )
}
