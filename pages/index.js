import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroStore from "../components/hero-store/hero-store.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ñucanchik Coffee</title>
      </Head>
      <HeroStore />
    </div>
  );
}
