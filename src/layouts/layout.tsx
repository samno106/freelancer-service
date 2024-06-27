import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";

export default function Layout(){
    return(
        <>
        <Header/>
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