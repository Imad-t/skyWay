import hotelRoom from "../../assets/images/hotelRoom.jpg";
import car from "../../assets/images/car.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Commodities = () => {
    return (
        <>
            <div className="bg-white rounded-xl p-4 flex flex-col justify-center items-center gap-2 w-full"
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                <h4 className=" font-semibold text-xl text-center">Found a flight? Now find a hotel</h4>
                <img src={hotelRoom} alt="hotel room" className="h-36 rounded w-80" />
                <p className="text-gray-600 text-sm text-center">Get results from all the top hotel sites right here on Skyway</p>
                <button className="bg-blue-950 text-white  px-5 py-2 rounded-xl text-center flex items-center hover:bg-blue-700 transition duration-600 ease-in">Explore hotels </button>
            </div>

            <div className="bg-white rounded-xl p-4 mt-6 flex flex-col justify-center items-center gap-2 w-full"
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                <h4 className=" font-semibold text-xl text-center">Need a car?</h4>
                <p className="text-gray-600 text-sm text-center">Don't stop at flights, find deals on wheels too!</p>
                <span className="flex text-sm">
                    <img src={car} alt="car image" className="h-28" />
                    <div className="text-right">
                        <p>Starting at</p>
                        <p className="text-xs">31.99$ per day</p>
                        <button className="bg-blue-950 text-white  w-fit pt-1 pb-1.5 px-2 mt-2 rounded-xl text-center align-middle text-lg  hover:bg-blue-700 transition duration-600 ease-in">
                            <ArrowForwardIcon />
                        </button>
                    </div>

                </span>

            </div>
        </>
    );
}

export default Commodities;