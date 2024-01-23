import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import Figma from '../../public/static/images/logo/figma.png'
import Adobe from '../../public/static/images/logo/adobe.png'
import React from '../../public/static/images/logo/react.png'
import Electron from '../../public/static/images/logo/electron.png'
import NodeJs from '../../public/static/images/logo/node-js.png'
import Symfony from '../../public/static/images/logo/symfony.png'
import MySQL from '../../public/static/images/logo/mysql.png'
import Github from '../../public/static/images/logo/github.png'

export default function Skills() {
  return (
    <div className=" divide-y divide-gray-200 dark:divide-gray-700 ">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1
          id="skills"
          className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="mt-5">
          <h3 className="text-4xl font-bold max-md:text-2xl">Design</h3>
          <ul className="mt-2">
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={Figma.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />
              <span> Figma</span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={Adobe.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />
              <span> Adobe</span>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-4xl font-bold max-md:text-2xl">Front-end</h3>
          <ul className="mt-2">
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={React.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>React</span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={React.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>React native</span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={Electron.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>Electron Js</span>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="text-4xl font-bold max-md:text-2xl">Back-end</h3>
          <ul className="mt-2">
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={NodeJs.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>NodeJs</span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={Symfony.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>Symfony</span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={MySQL.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span>MySQL</span>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-4xl font-bold max-md:text-2xl">Autres</h3>
          <ul className="mt-2">
            <li className="mb-2 flex items-center justify-start">
              <Image
                className="mr-2 rounded-full"
                src={Github.src}
                alt="face of anne-sophie"
                width={40}
                height={40}
              />{' '}
              <span> Github</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
