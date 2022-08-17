import Link from 'next/link';

const OldLinks = () => {
  const oldLink = 'http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop';
  const recentLink = 'http://cse.eedept.kobe-u.ac.jp/uww';
  const uwwYears = new Array(15).fill(0).map((v, i) => v+i+2007);

  return (
    <div className='text-center rounded m-2 font-mono'>
      <h1 className='text-2xl underline p-1'>Links</h1>
      <div className='grid grid-cols-4 p-1'>
        {uwwYears.map((year, i) => (
          year < 2009
            ? <Link key={i} href={oldLink + year}><a className='hover:underline'>UWW{year}</a></Link>
            : <Link key={i} href={recentLink + year}><a className='hover:underline'>UWW{year}</a></Link>
        ))}
      </div>
    </div>
  );
}

export default OldLinks;
