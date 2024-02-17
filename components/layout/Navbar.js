import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  
  return (
    <div className="flex justify-between bg-black-eerie p-4 sticky top-0 w-full">
      <Link href="/" className={`text-white-almond px-4 py-2 hover:bg-green-hunter ${router.pathname === "/" ? "bg-gray-davys" : ""}`}>Home</Link>
      <Link href="/characters" className={`text-white-almond px-4 py-2 hover:bg-green-hunter ${router.pathname === "/characters" ? "bg-gray-davys" : ""}`}>Characters</Link>
      <Link href="/covenants" className={`text-white-almond px-4 py-2 hover:bg-green-hunter ${router.pathname === "/covenants" ? "bg-gray-davys" : ""}`}>Covenants</Link>
    </div>
  );
};

export default Navbar;