import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-200 p-6 h-full'>
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
                    <h4 className='font-semibold text-lg'>Information</h4>
                    <ul>
                        <li className="text-gray-500 text-md">Home</li>
                        <li className="text-gray-500 text-md">Explore</li>
                        <li className="text-gray-500 text-md">Flight status</li>
                        <li className="text-gray-500 text-md">Check-in</li>
                        <li className="text-gray-500 text-md">Manage your booking</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold text-lg'>Quick Guide</h4>
                    <ul>
                        <li className="text-gray-500 text-md">FAQ</li>
                        <li className="text-gray-500 text-md">How to</li>
                        <li className="text-gray-500 text-md">Features</li>
                        <li className="text-gray-500 text-md">Route map</li>
                        <li className="text-gray-500 text-md">Community</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold text-lg'>More Details</h4>
                    <ul>
                        <li className="text-gray-500 text-md">Our partners</li>
                        <li className="text-gray-500 text-md">Staff</li>
                        <li className="text-gray-500 text-md">Careers</li>
                        <li className="text-gray-500 text-md">Terms of use</li>
                        <li className="text-gray-500 text-md">Licences</li>
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