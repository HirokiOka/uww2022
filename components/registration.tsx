import Link from 'next/link';

const Registration = () => {
  return (
    <div className='p-2 m-3 border-black rounded-lg border-2'>
      <h2 className='text-3xl underline mx-4 py-1'>Registration Fees</h2>
      <div className='rounded m-2 p-3'>
        <p className='text-xl px-2'>参加費</p>
        <p className='text-lg px-4'>一般: 20,000円 (会議参加費8,000円、宿泊費12,000円)</p>
        <p className='text-lg px-4'>学生: 17,000円 (会議参加費5,000円、宿泊費12,000円)</p>
        <ul className='list-disc list-inside mx-3 p-2 rounded'>
          <li>お支払いは当日現金にてお願いします。</li>
          <li>社会人学生については一般と同じ参加費になります。</li>
          <li>食事の有無で参加費は変わりません。</li>
          <li>宿泊せずに参加される場合は、参加費（一般）8,000円、（学生）5,000円のみを頂戴いたします。</li>
          <li>参加費は1日のみの参加の場合でも減額は致しませんので、ご了承下さい。</li> 
        </ul>
        <h3 className='text-xl'>参加登録は締め切りました。</h3>
      </div>
    </div>
  );
}

export default Registration;
