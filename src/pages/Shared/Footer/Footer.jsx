import { HiPhone, HiOutlineLocationMarker, HiShare } from "react-icons/hi";
import logo from "../../../assets/TalkTrekLogo.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-base-300 py-5 border-t-4 border-base-100'>
            <div className="container">
                <div className='grid lg:grid-cols-4 py-3 justify-between gap-5'>
                    <div className="flex h-full items-center">
                    <Link to='/' className='mr-auto'>
                        <div className='flex gap-1 items-center'>
                            <img className="w-20" src={logo} alt="" />
                            <p>
                                <span className="font-semibold text-secondary">Talk</span><span className="font-bold text-xl text-primary">Trek</span>
                            </p>
                        </div>
                    </Link>
                    </div>
                    <div className='flex'>
                        <div><HiOutlineLocationMarker className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Address</h3>
                            <p className='opacity-50'>97845 Baker st. 567</p>
                            <p className='opacity-50'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div><HiPhone className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Contact</h3>
                            <p className='opacity-50'>+94 423-23-221</p>
                            <p className='opacity-50'>talktrekg@language.com</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div><HiShare className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Service</h3>
                            <p className='opacity-50'>Formal Language</p>
                            <p className='opacity-50'>International Connection</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-center'>
                    <h5 className='py-3'>
                        © Talk-Trek - All rights reserved
                    </h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;