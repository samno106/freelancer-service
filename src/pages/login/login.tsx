import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="min-h-svh p-10 md:px-[250px] lg:px-[250px]">
      <nav className="flex items-center justify-between ">
        <Link
          to={"/"}
          className="flex items-center justify-between space-x-1 p-2 rounded hover:text-blue-500 hover:bg-blue-50"
        >
          <ChevronLeft className="w-5" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          to={"/"}
          className="flex items-center space-x-1 hover:text-blue-500 p-2 px-3 rounded hover:bg-blue-50"
        >
          <span className="text-sm">Register</span>
        </Link>
      </nav>
    </main>
  );
};

export default LoginPage;
