const Button = ({children, onClick}) => {
    return (
      <button onClick={onClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded m-4">
        {children}
      </button>
    );
  };
  
  export default Button;