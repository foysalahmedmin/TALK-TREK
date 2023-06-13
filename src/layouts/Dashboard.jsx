import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import SideBar from "../pages/Dashboard/Sidebar/SideBar";
import { FaDoorOpen } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <main className="flex max-w-[1700px] mx-auto justify-center h-screen overflow-y-hidden flex-row-reverse relative w-full">
                <section className="flex-1 lg:pb-[70px] relative container 2xl:container-full lg:w-full">
                    <Header dashboard={true} />
                    <div className="">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><FaDoorOpen /> Side-Bar</label>
                    </div>
                    <div className="h-full py-10 overflow-y-scroll">
                        <Outlet />
                    </div>
                    <Footer dashboard={true} />
                </section>
                <section>
                    <SideBar />
                </section>

            </main>
        </>

    );
};

export default Dashboard;