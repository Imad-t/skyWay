import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';


const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const matches = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        setIsSmallScreen(matches);
    }, [matches]);
    return (
        <div className='z-40 bg-gray-100 h-20 sm:p-3 flex justify-between items-center fixed w-screen shadow'>
            <Link to="/" className="text-blue-700  mr-4 text-2xl md:text-4xl font-bold flex  items-center">
            <AirplaneTicketIcon style={{ fontSize: isSmallScreen ? '2rem' : '3rem' }} className='mx-2' />
                <p className='hidden sm:block'> SkyWay </p>
            </Link>
            <div className='flex items-center relative'>
                <div className='text-gray-500 text-md sm:text-xl lg:text-2xl font-bold lg:pr-12 flex gap-2 sm:gap-6 md:gap-10'>
                    <Link to="/" className='cursor-pointer hover:text-blue-700'>Home</Link>
                    <Link to="/trending" className='cursor-pointer hover:text-blue-700'>Explore</Link>
                    <Link to="/discounts" className='cursor-pointer hover:text-blue-700'>Discounts</Link>
                    <Link to="/about" className='cursor-pointer hover:text-blue-700'>About</Link>
                </div>

                <span className="text-blue-700 mx-3">
                    <ArrowDropDownIcon style={{ fontSize: '3rem' }} className=' cursor-pointer' />
                </span>

            </div>

        </div>
    );
}

export default Navbar;