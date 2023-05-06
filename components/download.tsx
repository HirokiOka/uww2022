const Download = () => {
  return (
    <div className='p-2 m-3 rounded-lg border-2 border-black'>
      <h2 className='text-3xl underline mx-4'>Download</h2>
      <div className='rounded  m-2 p-2'>
        <div className='text-center inline-flex'> 
         <h3 className='text-xl mx-auto'>原稿テンプレート：</h3>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2022/UWW2022_Format_LaTeX.zip">LaTeX</a></button>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2022/word_UWW2022.docx">Word</a></button>
        </div>
      </div>
    </div>
  );
}

export default Download;
