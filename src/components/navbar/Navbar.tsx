import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-red-900 text-white flex justify-center">
      <div className="container items-center flex text-lg justify-between">
        <Link to="/home" className="text-2xl font-bold uppercase">
          F71
        </Link>
        <div className="flex gap-8">
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
