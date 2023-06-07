import { useEffect, useState } from "react";
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import ActiveLink from "../../../providers/ActiveLink";
import logo from "../../../assets/TalkTrekLogo.svg"

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const topHeight = window.scrollY
            if (topHeight > 70) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 w-full z-50 transition-[top] ${scrolled ? 'md:top-0 shadow-xl' : 'md:top-5 bg-transparent'}`}>
            <div className="container">
                <nav className='flex justify-around items-center py-2 '>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl mr-3 lg:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl mr-3 lg:hidden'><HiMenuAlt1 /></button>
                    }
                    <Link to='/' className='mr-auto'>
                        <div className='flex gap-2 items-center'>
                            <img className="w-14"  src={logo} alt="" />
                            <p>
                                <span className="font-semibold text-2xl text-secondary">Talk</span><span className="font-bold text-3xl text-primary">Trek</span>
                            </p>
                        </div>
                    </Link>
                    <ul className={`
                        p-5 
                        absolute 
                        lg:static 
                        bg-black 
                        lg:bg-transparent 
                        bg-opacity-50 
                        top-[5rem] 
                        min-h-[calc(100vh-9rem)] 
                        lg:min-h-[auto] 
                        leading-10 
                        lg:leading-3 
                        rounded-md 
                        lg:flex 
                        justify-center 
                        items-center 
                        gap-5
                        transition-[left] 
                        ${menuActive ? 'left-0' : 'left-[-100%]'}
                        `}>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/"}>HOME</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/"}>CLASSES</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/"}>INSTRUCTOR</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/"}>DASHBOARD</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 '>
                    <h3 className=' py-3'><HiOutlineUserCircle className='text-4xl' /></h3>
                    <Link to='/'><button className='btn rounded-full'>Log-In</button></Link>
                        
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;