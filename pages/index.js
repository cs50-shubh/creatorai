import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from './header/Navbar';
import Search from './search/Search';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Creator AI | Build crazy AI art</title>
        <link rel="icon" href="/logo-no-background.png" />
      </Head>
      <Navbar />
      <div className={styles.body}>
        <Search />
      </div>

      {/* <style jsx>{`
        main {
          flex: 1;
          border: 1px solid black;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style> */}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        ::placeholder {
          color: #bcb7b7;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}