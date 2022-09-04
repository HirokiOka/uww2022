import Link from 'next/link';

const Registration = () => {
  return (
    <div className='p-2 m-3 border-black rounded-lg border-2'>
      <h2 className='text-3xl underline mx-4 py-1 font-mono'>Registration Fees</h2>
      <div className='rounded m-2 p-3'>
        <p className='text-xl px-2'>参加費: TBD</p>
        <ul className='list-disc list-inside mx-3 p-2 rounded'>
          <li>お支払いは当日現金にてお願いします。</li>
          <li>社会人学生については一般と同じ参加費になります。</li>
          <li>食事の有無で参加費は変わりません。</li>
          <li>参加費は1日のみの参加の場合でも減額は致しませんので、ご了承下さい。</li> 
        </ul>
    {/* <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 mx-8"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/reg/" className=''>参加登録する</a></button> */}
      </div>
    </div>
  );
}

export default Registration;
