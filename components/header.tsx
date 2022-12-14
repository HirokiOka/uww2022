import Link from "next/link";

const Header = () => {
  return (
    <>
    <header className='bg-gray-200 top-0 fixed w-full'>
      <nav className='m-3 text-xl text-right font-mono '>
        <Link href="http://cse.eedept.kobe-u.ac.jp/uww2022/index.html"><a className='m-2 hover:underline'>Home</a></Link>
        <Link href="http://cse.eedept.kobe-u.ac.jp/uww2022/program.html"><a className='m-2 hover:underline'>Program</a></Link>
        <Link href="http://www.yumebutai.org/access/index.html"><a className='m-2 hover:underline'>Access</a></Link>
      </nav>
    </header>
    </>
  );
}

export default Header;
