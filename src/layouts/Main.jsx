import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Main;