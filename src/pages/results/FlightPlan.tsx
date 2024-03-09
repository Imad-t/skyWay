import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { useState } from 'react';
import logo from "../../assets/images/air-france.png"

interface Flight {
    date: Date,
    logo: string,
    airline: string,
    departureTime: string,
    departureAirport: string,
    arrivalTime: string,
    arrivalAirport: string,
    duration: number,
    direct: boolean,
    transits: string[],
    price: number,
}
const toTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');
    if (formattedHours !== "00") return `${formattedHours}h ${formattedMinutes}min`;
    else return `${formattedMinutes}min`
}

const FlightPlan: React.FC<{ flight: Flight, isOutband: boolean }> = ({ flight, isOutband }) => {

    const [hoveredTransit, setHoveredTransit] = useState<string | null>(null);
    const renderTransitIcon = (transits: string[]) => {

        const handleTransitHover = (transit: string) => {
            setHoveredTransit(transit);
        };

        const handleTransitLeave = () => {
            setHoveredTransit(null);
        };
        if (transits.length > 0) {
            const gap = 12 / transits.length; 
            return (
                <div className={`relative flex gap-${gap}`}>
                    {transits.map((transit, index) => (
                        <span key={index}>
                            <RadioButtonCheckedIcon
                                style={{ backgroundColor: "white", width: "1rem"}}
                                onMouseEnter={() => handleTransitHover(transit)}
                                onMouseLeave={handleTransitLeave}
                            />
                            <div
                                className={`absolute bg-gray-100 p-2  rounded border border-gray-700 text-gray-700 transition-opacity duration-300 ${transit === hoveredTransit ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{ top: "1.5rem", width: "" }}
                            >
                                <span style={{whiteSpace: "nowrap"}}>{transit}</span>
                            </div>
                        </span>
                    ))}
                </div>
            );
        }

        return null;
    };


    return (
        <div className='flex flex-col mb-2'>
            <div>
                <span className=' text-lg sm:text-xl font-semibold mr-2'>{isOutband ? "Outband" : "Return"}</span>
                <span className=' text-gray-600 text-sm'>{flight.date.toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
            </div>

            <div className=' bg-white flex justify-between  w-1/2 sm:w-4/6 h-24'>

                <div className=' col-span-1'>
                    < div className={`h-12 w-12 sm:h-16 sm:w-16 border border-1 m-1 bg-[url(${logo})]`}></div>
                    <span className='text-xs'>{flight.airline} </span>
                </div>

                <div className='flex items-center sm:gap-3 xl:gap-4 text-gray-600'>
                    <div className=" text-right">
                        <div className=' text-sm sm:text-lg'>{flight.departureTime}</div>
                        <div className='  text-xs sm:text-sm'> {flight.departureAirport} </div>
                    </div>
                    <div className="flex items-center">
                        <div className='flex flex-col gap-2 w-24 lg:w-32 xl:w-full'>
                            <span className=' text-center text-sm'>{toTime(flight.duration)}</span>
                            <span className="flex items-center">
                                <div className=' h-0.5 bg-gray-600 min-w-full w-40 flex justify-around items-center relative '>
                                    {renderTransitIcon(flight.transits)}
                                </div>
                            </span>
                            <span className='text-center text-xs text-blue-500'>{flight.direct ? "direct" : "transit"}</span>
                        </div>
                        <LocalAirportIcon style={{ transform: "rotate(90deg)", width: "1rem", marginLeft: "2px" }} />
                    </div>
                    <div className="text-left">
                        <div className=' text-sm sm:text-lg'>{flight.arrivalTime}</div>
                        <div className=' text-xs sm:text-sm'> {flight.arrivalAirport}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FlightPlan;