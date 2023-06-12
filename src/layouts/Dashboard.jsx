import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import SideBar from "../pages/Dashboard/Sidebar/SideBar";

const Dashboard = () => {
    return (
        <>
            <main className="flex justify-between flex-row-reverse relative w-full">
                <section className="flex-1 relative">
                    <Header dashboard={true} />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />

                </section>
                <section>
                    <SideBar />
                </section>
                <Footer />

            </main>
        </>

    );
};

export default Dashboard;