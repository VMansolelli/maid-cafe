import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#2A1911]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-1">
        <img src="./Logo.png" alt="" className="h-auto w-24" />

        <Link to="/login">
          <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F8E2CF]">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
