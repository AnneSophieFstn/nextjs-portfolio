import SocialIcon from '@/components/social-icons'
import Moi from '../../public/static/images/annesophie-faustino.jpeg'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-[700px] flex-col justify-center divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1
            id="a-propos"
            className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
          >
            A propos
          </h1>
        </div>
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={Moi.src}
              alt="face-annesophie"
              width={300}
              height={300}
              className="h-48 w-48 rounded-full"
            />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Anne-Sophie FAUSTINO
            </h3>
            <div className="text-center text-primary-500 dark:text-primary-500">
              Recherche poste Développeuse Web et/ou mobile
            </div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:annesophie.faustino@gmail.com`} />
              <SocialIcon kind="github" href="https://github.com/AnneSophieFstn" />
              <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/annesophie-faustino/" />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p>
              Jeune développeuse web et mobile passionnée par les technologies et la création
              d'application métiers modernes et interactifs.
            </p>
            <p>
              Spécialisée dans les technologies telles que JavaScript, PHP et les frameworks tels
              que Symfony, React et React Native.
            </p>
            <p>
              J'aime travailler en équipe et je suis toujours à la recherche de nouveaux défis pour
              améliorer mes compétences et mon expérience.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
