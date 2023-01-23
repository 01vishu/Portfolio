import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishu&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
        <div className={styles.main_contant}>
          <Navbar />
          <About />
        </div>
      </main>
    </>
  );
}
