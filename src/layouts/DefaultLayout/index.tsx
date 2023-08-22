import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = () => {
    return (
        <div className="app-wrapper">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default DefaultLayout;
