import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from 'next/router';

// Layout for the homepage
const HomeLayout = ({ children }) => {
    return (
      <div className="flex flex-col h-screen justify-between" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp10716254.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black-eerie opacity-50"></div>
        <Navbar />
        <main className="flex items-center justify-center flex-grow text-4xl text-white-almond z-10">{children}</main>
        <Footer />
      </div>
    );
  };
  
  // Layout for the rest of the pages
  const PageLayout = ({ children }) => {
    return (
      <div className="flex flex-col h-screen justify-between bg-gray-davys">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };

const AppLayout = ({ children }) => {
    const router = useRouter();

    return (
        (
            router.pathname === "/" ? <HomeLayout>{children}</HomeLayout> : <PageLayout>{children}</PageLayout>
        )
    );
}; 


  export {AppLayout, HomeLayout, PageLayout };