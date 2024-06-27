import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <nav>Header</nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <main className="min-h-svh">
            <Outlet/>
        </main>
        </>
    );
}