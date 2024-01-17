import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import AboutPage from './about/page'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'
import Header from '@/components/Header'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-grow items-center justify-center">
          <Main />
        </main>
      </div>
      <Skills />
      <AboutPage />
      <Projects />
      <Contact />
    </>
  )
}
