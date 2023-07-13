import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100 shadow p-6 h-full'>
            <div className='flex flex-col justify-center items-center'>
                <h4 className=''> Subscribe to our Newsletter & get the Latest News!</h4>

                <form action="" className=" rounded overflow-hidden my-6 ">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className=" bg-white h-16 w-96 focus:outline-none px-4"
                    />

                    <button className="bg-blue-700 text-white h-16 px-4 hover:underline">
                        Subscribe
                    </button>
                </form>
            </div>
            <div className=" p-4 grid grid-cols-4 gap-1 justify-items-center">
                <div>
                    <span>
                        <AirplaneTicketIcon style={{ fontSize: '3rem' }} />
                    </span>

                    <p className='text-gray-500 text-md'>Fly with us anywhere, anytime: Your wings to limitless destinations.</p>
                    <div className="text-gray-600 text-4xl font-bold flex mt-2">
                        <Link to="#" className="border border-gray-500 rounded-full h-10 w-7  flex justify-center items-center mx-2 hover:scale-110"><LinkedInIcon /></Link>
                        <Link to="#" className="border border-gray-500 rounded-full h-10 w-7  flex justify-center items-center mx-2 hover:scale-110"><FacebookIcon /></Link>
                        <Link to="#" className="border border-gray-500 rounded-full h-10 w-7  flex justify-center items-center mx-2 hover:scale-110"><TwitterIcon /></Link>
                        <Link to="#" className="border border-gray-500 rounded-full h-10 w-7  flex justify-center items-center mx-2 hover:scale-110"><InstagramIcon /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">Information</h4>
                    <ul className='text-gray-500'>
                        <li>
                            <Link to="#" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Explore</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Flight Status</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Check-in</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Manage your Booking</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">Quick Guide</h4>
                    <ul className='text-gray-500'>
                        <li>
                            <Link to="#" className="hover:underline">FAQ</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">How To</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Features</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Route Map</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Community</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">More Details</h4>
                    <ul className='text-gray-500'>
                        <li>
                            <Link to="#" className="hover:underline">Our Partners</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Staff</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Careers</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">Licences</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center  '>
                <p className='mx-auto border-2 border-t-gray-400 py-4 px-8'>Developped by
                    <Link to="https://imad-dev.vercel.app/" className=' text-blue-600 font-semibold  cursor-pointer px-1'>ImadDev</Link>
                    | All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;