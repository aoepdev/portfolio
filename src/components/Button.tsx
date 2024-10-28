type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
