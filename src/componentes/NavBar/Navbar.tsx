import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="bg-black w-full h-14 flex justify-center items-center absolute">
        <nav className="w-fit h-5 flex gap-3 text-white">
          <Link to={"/login"} className="hover:text-cyan-400">Option 1</Link>
          <Link to={"/login"} className="hover:text-cyan-400">Option 2</Link>
          <Link to={"/login"} className="hover:text-cyan-400">Option 3</Link>
          <Link to={"/login"} className="hover:text-cyan-400">Option 4</Link>
          <Link to={"/login"} className="hover:text-cyan-400">Option 5</Link>
        </nav>
      </header>
    </>
  );
};
