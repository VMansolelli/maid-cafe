const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props} // Espalha as propriedades recebidas para o elemento input
      className="w-87.5 rounded-md bg-white px-2 py-2 text-xs text-[#2A1911] placeholder-[#2A191] outline-none"
    />
  );
};

export default Input;
