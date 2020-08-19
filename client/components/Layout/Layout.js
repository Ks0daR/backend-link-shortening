import Link from "next/link";
import Head from "next/head";
import styles from "./Layout.module.css";

export default function Layout({ title = "Название", children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Сокращение ссылок`}</title>
      </Head>

      <header>
        <nav className={styles.navBar}>
        <li className={styles.listElement}>
            <Link href="/">
              <a className={styles.navLink}>Домашняя страница</a>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/links">
              <a className={styles.navLink}>Все ссылки</a>
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/links/create">
              <a className={styles.navLink}>Создать ссылку</a>
            </Link>
          </li>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
