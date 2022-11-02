import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/description";
import Registration from "../components/registration";
import ImportantDates from "../components/importantDates";
import Download from "../components/download";
import Schedule from "../components/schedule";
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
        <div className='grid md:grid-cols-2 sm:grid-cols-none'>
          <Registration />
          <div className='grid grid-rows2'>
            <ImportantDates />
            <Download />
          </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-none'>
          <Schedule />
          <Organizers />
        </div>
        <Sponsors />
      </main>
    </div>
  );
};

export default Home;
