import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="p-6">{children}</main>
        </div>
    )
};

export default Layout;