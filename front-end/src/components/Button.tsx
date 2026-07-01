type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// w-full cursor-pointer rounded-md bg-[#F8E2CF] px-4 py-1 text-sm font-bold text-[#992C38]

const Button = ({ title, variant = "primary", ...props }: ButtonProps) => {
  const buttonVariant = () => {
    if (variant === "primary") {
      return "w-full cursor-pointer rounded-md bg-[#992C38] px-4 py-1 text-sm font-bold text-[#F8E2CF]";
    } else if (variant === "secondary") {
      return "w-full cursor-pointer rounded-md bg-[#F8E2CF] px-4 py-1 text-sm font-bold text-[#992C38]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
