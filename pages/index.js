import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import * as React from 'react'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData = []}) {
  const MyContext = React.createContext('default value')
  const useContextValue = React.useContext(MyContext)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={indexStyles.border_dotted}>
        <section className={utilStyles.headingMd}>
        <h1>
          This is a Nextjs website!
        </h1>
        <p>
          This website demonstrates various aspects of Nextjs and Jest and serves as "living" documentation.
        </p>
        <h2>
          Notes about this page
        </h2>
        <ul>
          <li>All markup and styles outside the dotted line come from the Layout component. It wraps the markup and templates page content.</li>
          <li></li>
        </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog tutorial</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>API file system test</h2>
          <Link href={`/api/hello`}>
            <a>API Test</a>
          </Link>
        </section>
        <section>
          <h2>
            React Context
          </h2>
          <p><code>{'<'}MyContext.Provider{'>'}</code></p>
          <MyContext.Provider value='This is MyContext.Provider value prop'>
          <p><code>{'<'}MyContext.Consumer{'>'}</code></p>
            <MyContext.Consumer>
              {value => value}
            </MyContext.Consumer>
          <p><code>{'</'}MyContext.Consumer{'>'}</code></p>
          <p>this is useContextValue</p>
            <code className='code-value'>{useContextValue}</code>
          </MyContext.Provider>
          <p><code>{'</'}MyContext.Provider{'>'}</code></p>
        </section>
      </div>
    </Layout>
  )
}