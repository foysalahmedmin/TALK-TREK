import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import SideBar from "../pages/Dashboard/Sidebar/SideBar";
import { FaDoorOpen } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <main className="flex max-w-[1700px] mx-auto justify-center lg:h-screen overflow-y-hidden flex-row-reverse relative w-full">
                <section className="flex-1 relative container 2xl:container-full lg:w-full">
                    <Header dashboard={true} />
                    <div className="">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><FaDoorOpen /> Side-Bar</label>
                    </div>
                    <div className="py-10 lg:h-[calc(100vh-18rem)] lg:overflow-y-scroll">
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