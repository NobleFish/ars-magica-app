const Button = ({children, onClick}) => {
    return (
      <button onClick={onClick} className="bg-red-wine hover:bg-red-ncs text-white-almond font-bold py-2 px-2 rounded m-4">
        {children}
      </button>
    );
  };
  
  export default Button;