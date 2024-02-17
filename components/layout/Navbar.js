import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  
  return (
    <div className="flex justify-between bg-gray-800 p-4 sticky top-0 w-full">
      <Link href="/" className={`text-white px-4 py-2 hover:bg-gray-600 ${router.pathname === "/" ? "bg-gray-600" : ""}`}>Home</Link>
      <Link href="/characters" className={`text-white px-4 py-2 hover:bg-gray-600 ${router.pathname === "/characters" ? "bg-gray-600" : ""}`}>Characters</Link>
      <Link href="/covenants" className={`text-white px-4 py-2 hover:bg-gray-600 ${router.pathname === "/covenants" ? "bg-gray-600" : ""}`}>Covenants</Link>
    </div>
  );
};

export default Navbar;