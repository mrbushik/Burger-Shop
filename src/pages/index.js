import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Main</title>
        <title name="title" content="fat burgers"></title>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
        <Image src="/fatburger.png" alt="fat burger" width={400} height={350} />
        <p className={styles.text}>
          What is the perfect burger? Fresh lettuce leaf, soft buns, juicy meat.
          You can argue about other components of the filling, because this is
          the case taste.
        </p>
        <p className={styles.text}>
          There are a couple of other factors that affect appetite: prices,
          quality service, the right atmosphere of the institution.
        </p>
        <Link href="/burgers" className={styles.btn}>
          All Burgers
        </Link>
      </div>
    </>
  );
}
