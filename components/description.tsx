const About = () => {
  return (
    <div>
      <h1 className='text-6xl text-center pt-16 py-2 font-mono'>Ubiquitous Wearable Workshop 2022</h1>
      <p className='text-center'>2022年12月23日 (金) ～ 24日 (土)</p>
      <p className='text-center'>@兵庫県立 淡路夢舞台国際会議場 B1F イベントホール</p>
      <p className='text-center'>〒656-2306 兵庫県淡路市夢舞台1番地</p>
      <div className='p-2'>
        <h2 className='text-4xl text-center py-2 underline font-mono'>Welcome to UWW2022</h2>
        <div className='rounded mx-3 p-3'>
          <p>ユビキタス・ウェアラブル技術の発展はめざましく、これらの技術に関する研究開発が活発に行われています。神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、今年は16回目となります。</p>
          <p>本ワークショップの特色は以下の通りです。</p>
          <ul className='list-disc list-inside mx-3 p-3 rounded'>
            <li>A4原稿1枚記述 (原稿テンプレートは本ページからダウンロードをお願いします。)</li>
            <li>一人15分程度のショートプレゼンテーション</li>
            <li>参加者間の交流を目指した1泊2日の合宿型ワークショップ</li>
            <li>実践的な情報処理技術に関する特別な企画などを含んだ「ナイトセッション」</li>
          </ul>
          <p className='pt-2'>※新型コロナウイルス (SARS-CoV-2) の状況によって、完全オンラインでの開催となる可能性もあります。</p>
        </div>
      </div>
    </div>
  );
}

export default About;
