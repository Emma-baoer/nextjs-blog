import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from '../styles/utils.module.scss'
import Link from "next/link";

const name = 'Ella'
const Layout = ({ children, home=false }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="description"
          content="welcome to my personal website"
        ></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <div><Link href={"/"}>← Back to home</Link></div>}
    </div>
  );
};
export default Layout;
