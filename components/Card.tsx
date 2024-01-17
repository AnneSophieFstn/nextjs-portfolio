import Image from './Image'
import Link from './Link'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, dataBubble }) => (
  <div className="md max-w-[350px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="flex flex-col p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap">
          {dataBubble.map((item, i) => (
            <div
              key={i}
              className="ring-offset-background focus-visible:ring-ring text-secondary-foreground mr-2 mt-2 inline-flex h-9 cursor-pointer items-center justify-center rounded-md bg-blue-600 px-3 text-sm font-medium uppercase text-white transition-colors hover:bg-blue-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-100"
            >
              <SocialIcon kind={item} href="#" size={5} />
              {item}
            </div>
          ))}
        </div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            En savoir plus &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
