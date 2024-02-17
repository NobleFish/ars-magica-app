// coponents/layout/Footer.js

const Footer = () => {
  return (
    <footer className="flex justify-between bg-gray-800 p-4 sticky bottom-0 w-full text-white">
      <div>
        Ars Magica is a trademark of <a href='https://www.atlas-games.com/' className="py-2 text-blue-400 hover:bg-gray-600">Atlas Games</a>. All rights reserved.

        Learn more about the game at <a href='https://www.atlas-games.com/arsmagica' className="py-2 text-blue-400 hover:bg-gray-600">atlas-games.com/arsmagica</a>.
      </div>
    </footer>
  );
};

export default Footer;