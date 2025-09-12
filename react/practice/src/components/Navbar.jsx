import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-evenly p-2">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/products"}>Products</Link>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/login")}
      >
        login
      </button>
      <button
        className="bg-gray-100 hover:bg-gray-600 text-blue-500 px-4 py-2 rounded"
        onClick={() => navigate("/signUp")}
      >
        signup
      </button>
      
    </div>
  );
}
