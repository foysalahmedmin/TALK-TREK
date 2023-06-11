import React from 'react';
import useAuth from '../../../hooks/useAuth';

const SideBar = () => {
    const {user} = useAuth()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 pt-16 w-60 h-full bg-base-300 text-base-content">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideBar;