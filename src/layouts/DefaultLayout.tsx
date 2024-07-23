import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function DefaultLayout() {
    return (
        <div 
            className="min-h-screen bg-azure-50 text-neutral-600" >
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}