import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/description";
import Registration from "../components/registration";
import Organizers from "../components/organizers";
import Sponsors from "../components/sponsors";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UWW2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Description />
        <Registration />
        <Organizers />
        <Sponsors />
      </main>
    </div>
  );
};

export default Home;
