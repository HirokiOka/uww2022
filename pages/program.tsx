import * as fs from 'fs';
import * as path from 'path';
import { NextPage, GetStaticProps } from 'next'
import Head from "next/head";
import { useState } from 'react';
import Link from 'next/link';

interface Props {
  dayOne?: any;
  dayTwo?: any;
  video?: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dayOnePath = path.join(process.cwd(), 'public', 'data', 'dayOne.json');
  const dayTwoPath = path.join(process.cwd(), 'public', 'data', 'dayTwo.json');
  const videoPresenPath = path.join(process.cwd(), 'public', 'data', 'videoPresen.json');
  const dayOneJSON = fs.readFileSync(dayOnePath).toString();
  const dayTwoJSON = fs.readFileSync(dayTwoPath).toString();
  const videoPresenJSON = fs.readFileSync(videoPresenPath).toString();
  const dayOne = JSON.parse(dayOneJSON);
  const dayTwo = JSON.parse(dayTwoJSON);
  const video = JSON.parse(videoPresenJSON);
  return {
    props: { dayOne, dayTwo, video }
  }
}

const Program: NextPage<Props> = ({ dayOne, dayTwo, video }: Props) => {
  const bussSchedules = [
    [
      ['7:00', '7:48'],
      ['7:30', '8:18'],
      ['8:00', '8:45'],
      ['8:30', '9:18'],
      ['8:55', '9:45'],
      ['9:30', '10:18'],
    ],
    [
      ['17:46', '18:32'],
      ['18:16', '19:02'],
      ['19:16', '20:02'],
      ['20:16', '20:58'],
      ['21:16', '21:58'],
    ],
  ];
  const [scene, setScene] = useState('dayOne');
  const [program, setProgram] = useState(dayOne);

  function changeScene(newScene: string) {
    if (scene === newScene) return;
    if (newScene === 'dayOne') {
      setScene('dayOne');
      setProgram(dayOne);
    } else if (newScene === 'dayTwo') {
      setScene('dayTwo');
      setProgram(dayTwo);
    } else if (newScene === 'video') {
      setScene('video');
      setProgram(video);
    } 
  }

  return (
    <>
      <Head>
        <title>UWW2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className='contents'>
          <h1 className='pt-16 text-4xl underline text-center pb-2'>Program</h1>
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
              <button disabled={scene==='dayOne'} onClick={() => changeScene('dayOne')} className={scene === 'dayOne' ? 'm-2 p-2 text-center bg-gray-200 rounded underline' : 'm-2 p-2 text-center rounded hover:bg-gray-200'}>12/23 (金)</button>
              <button disabled={scene==='dayTwo'} onClick={() => changeScene('dayTwo')} className={scene === 'dayTwo' ? 'm-2 p-2 text-center bg-gray-200 rounded underline' : 'm-2 p-2 text-center rounded hover:bg-gray-200'}>12/24 (土)</button>
              <button disabled={scene==='video'} onClick={() => changeScene('video')} className={scene === 'video' ? 'm-2 p-2 text-center bg-gray-200 rounded underline' : 'm-2 p-2 text-center rounded hover:bg-gray-200'}>ビデオ発表</button>
            </div>

            <div>
              {scene === 'dayOne' ? (
              <div className='text-center p-2 border-black rounded-lg border-2 md:mx-24'>
                <h1 className='text-2xl font-bold'>23日行き高速バス情報</h1>
                <div className='flex justify-center p-2 text-lg'>
                  <table className='table-auto border text-center'>
                    <td className='border px-3 font-bold'>三宮発</td>
                    <td className='border px-3 font-bold'>淡路夢舞台着</td>
                    {bussSchedules[0].map((v, i) =>  (
                      <tr key={i}>
                        <td className='border px-3'>{v[0]}</td>
                        <td className='border px-3'>{v[1]}</td>
                      </tr>
                    ))}
                  </table>
                </div>
                <Link href="https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2209.pdf" className='hover:underline text-blue-500'>バス時刻表詳細</Link>
              </div>
              ) : (
                <>
                </>
              )}
              {Object.values(program).map((s: any, i: number) => (
                <div className='my-4 md:mx-24 p-2 border-black rounded-lg border-2 justify-center' key={i}>
                  <h1 className='text-2xl font-bold text-center'>{s.eventName}</h1>
                  {(scene !== 'video') ? (
                    <>
                      <h1 className='text-xl text-center'>{s.startTime} - {s.endTime}</h1>
                    </>
                    ) : (
                      <></>
                    )}

                  {s.isSession ? (
                    <div className='text-center m-4' key={i}>
                    {scene !== 'video' ? (
                      <h2>座長: {s.chairperson}</h2>
                    ) : (
                      <></>
                    )}

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
              {scene === 'dayTwo' ? (
              <div className='text-center p-2 border-black rounded-lg border-2 md:mx-24'>
                <h1 className='text-2xl font-bold'>24日帰り高速バス情報</h1>
                <div className='flex justify-center p-2 text-lg'>
                  <table className='table-auto border text-center'>
                    <td className='border px-3 font-bold'>淡路夢舞台発</td>
                    <td className='border px-3 font-bold'>三ノ宮着</td>
                    {bussSchedules[1].map((v, i) =>  (
                      <tr key={i}>
                        <td className='border px-3'>{v[0]}</td>
                        <td className='border px-3'>{v[1]}</td>
                      </tr>
                    ))}
                  </table>
                </div>
                <Link href="https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2209.pdf" className='hover:underline text-blue-500'>バス時刻表詳細</Link>
              </div>
              ) : (
                <>
                </>
            )}
            </div>

          </div>
        </body>
    </>
  );
}


export default Program;
