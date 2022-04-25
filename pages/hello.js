import styles from "../styles/hello.module.css";
import Head from "next/head";
import HeroStore from "../components/hero-store/hero-store.component";

const Hello = () => {
  return (
    <div>
      <Head>
        <title>Ñucanchik Coffee</title>
      </Head>
      <HeroStore />
    </div>
  );
};

export default Hello;
