import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='z-40 bg-gray-100 p-3 flex justify-between items-center fixed w-screen shadow-sm'>

            <span className="text-blue-700 text-4xl font-bold flex">
                <AirplaneTicketIcon style={{ fontSize: '3rem' }} className='mx-2' />
                <Link to="/"> SkyWay </Link>
            </span>
            <div className='flex items-center relative'>
                <div className='text-gray-600 text-xl font-bold pr-8   '>
                    <Link to="/" className='mr-10 cursor-pointer hover:text-blue-700'>Home</Link>
                    <Link to="/trending" className='mr-10 cursor-pointer hover:text-blue-700'>Trending</Link>
                    <Link to="/discounts" className='mr-10 cursor-pointer hover:text-blue-700'>Discounts</Link>
                    <Link to="/about" className='mr-10 cursor-pointer hover:text-blue-700'>About</Link>
                </div>

                <span className="text-blue-700 mx-3">
                    <ArrowDropDownIcon style={{ fontSize: '3rem' }} className=' cursor-pointer' />
                </span>

            </div>

        </div>
    );
}

export default Navbar;