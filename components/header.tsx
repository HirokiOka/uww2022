import Link from "next/link";

const Header = () => {
  return (
    <>
    <header className='bg-gray-200 top-0 fixed w-full'>
      <nav className='m-3 text-xl text-right'>
        <Link href="./index" className='m-2 hover:underline'>Home</Link>
        <Link href="./program" className='m-2 hover:underline'>Program</Link>
        <Link href="http://www.yumebutai.org/access/index.html" className='m-2 hover:underline'>Access</Link>
      </nav>
    </header>
    </>
  );
}

export default Header;
