import Link from 'next/link'; // Import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/characters">Characters</Link>
                </li>
                <li>
                    <Link href="/covenants">Covenants</Link> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;