import { NextPage } from 'next'
import Head from "next/head";
import fs from 'fs';
import { useState } from 'react';

interface Props {
  dayOne?: any;
  dayTwo?: any;
}

const Program: NextPage<Props> = ({ dayOne, dayTwo }) => {
  const [isDayOne, setIsDayOne] = useState(true);
  const [program, setProgram] = useState(dayOne);

  function toggle() {
    setIsDayOne(!isDayOne);
    isDayOne ? setProgram(dayTwo) : setProgram(dayOne);
  }

  return (
    <>
      <Head>
        <title>UWW2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className='contents'>
          <h1 className='pt-16 text-4xl underline text-center pb-2 font-mono'>Program</h1>
            <div className='p-2 text-center md:mx-48 rounded'>
              <table className='m-auto'>
                <tr>
                  <td><img src='./img/presenter.png' width='32' height='32' /></td>
                  <td><p className='text-center font-bold'>:発表者</p></td>
                </tr>
              </table>
              <p className='text-xl'>発表時間: 12分 (目安: 9分発表 + 2分質疑 + 1分転換) </p>
            </div>
            <div className='text-xl text-center md:mx-24'>
              <button  onClick={toggle} className={isDayOne ? "m-2 p-2 text-center bg-gray-200 rounded underline" : "m-2 p-2 text-center rounded hover:bg-gray-200"}>12/23 (金)</button>
              <button  onClick={toggle} className={isDayOne ? "m-2 p-2 text-center rounded hover:bg-gray-200" : "m-2 p-2 text-center bg-gray-200 rounded underline"}>12/24 (土)</button>
            </div>

            <div>
              {Object.values(program).map((s: any, i: number) => (
                <div className='my-4 md:mx-24 p-2 border-black rounded-lg border-2 justify-center' key={i}>
                  <h1 className='text-xl text-center'>{s.startTime} - {s.endTime}</h1>
                  <h1 className='text-2xl font-bold text-center'>{s.eventName}</h1>

                  {s.isSession ? (
                    <div className='text-center m-4' key={i}>
                      <h2>座長: {s.chairperson}</h2>

                      {s.presentations.map((p: any, j: number) => (
                        <ul className='list-disc list-inside m-2 p-2 rounded-lg bg-gray-100' key={j}>
                          <li className='md:text-xl text-center'>{p.title}</li>
                          <table className='m-auto'>
                            <tr>
                              <td><img src='./img/presenter.png' width='24' height='24' /></td>
                              <td><p className='text-center font-bold'>{p.name} ({p.affiliation})</p></td>
                            </tr>
                          </table>
                          <div className='flex mb-1 justify-center'>
                            {p.coauthors.map((ca: any, idx: number ,ary: any) => (
                              <div key={idx}>
                                <p className='md:text-sm md:break-words text-xs'>{(ca.name.length > 4 && (ca.name.match(/[a-z]/g) === null)) ? ca.name.replaceAll(' ', '') : ca.name}{(ary[idx+1] && (ary[idx+1].affiliation === ca.affiliation)) ? '' : " (" + ca.affiliation + ")"}{idx < (ary.length-1) ? ',' : ''}&nbsp;</p>
                              </div>
                            ))}
                          </div>
                        </ul>
                    ))}

                    </div>
                  ) : (
                      <h1 key={i}></h1>
                  )}

                </div>
              ))}
            </div>

          </div>
        </body>
    </>
  );
}

Program.getInitialProps = async () => {
  const dayOne = JSON.parse(fs.readFileSync("./public/data/dayOne.json"));
  const dayTwo = JSON.parse(fs.readFileSync("./public/data/dayTwo.json"));
  return { dayOne, dayTwo };
}


export default Program;
