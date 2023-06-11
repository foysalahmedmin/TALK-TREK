import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive? "text-primary" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default DashboardActiveLink;