import Link from 'next/link'; // Import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {/* Use href instead of to */}
                </li>
                <li>
                    <Link href="/characters">Characters</Link> {/* Use href instead of to */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;