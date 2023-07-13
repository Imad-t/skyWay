import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

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
    return `${formattedHours}:${formattedMinutes}`;
}

const FlightPlan: React.FC<{ flight: Flight, isOutband: boolean }> = ({ flight, isOutband }) => {
    return (
        <div className='flex flex-col'>
            <div>
                <span className=' text-xl font-semibold mr-2'>{isOutband ? "Outband" : "Return"}</span>
                <span className='text-lg text-gray-600'>{flight.date.toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
            </div>

            <div className=' bg-white flex justify-between mt-2 w-4/6 h-24'>

                <div className=' col-span-1'>
                    <img src={flight.logo} alt="Airline logo" className='h-16 w-16 border border-1' />
                    <span className='text-xs'>{flight.airline} </span>
                </div>

                <div className='flex items-center gap-4 text-gray-600'>
                    <div className=" text-right">
                        <div className=' text-xl'>{flight.departureTime}</div>
                        <div> {flight.departureAirport} </div>
                    </div>
                    <div className="flex items-center">
                        <div className='flex flex-col w-full gap-2'>
                            <span className=' text-center text-xs'>{toTime(flight.duration)}</span>
                            <span className="flex items-center">
                                <div className=' h-0.5 bg-gray-600 w-40 flex justify-around items-center'>
                                    <RadioButtonCheckedIcon style={{ backgroundColor: "white", width: "1rem" }} />
                                    <RadioButtonCheckedIcon style={{ backgroundColor: "white", width: "1rem" }} />
                                </div>
                            </span>
                            <span className='text-center text-xs text-blue-500'>{flight.direct ? "direct" : "transit"}</span>
                        </div>
                        <LocalAirportIcon style={{ transform: "rotate(90deg)", width: "1rem", marginLeft: "2px" }} />
                    </div>
                    <div className="text-left">
                        <div className=' text-xl'>{flight.arrivalTime}</div>
                        <div> {flight.arrivalAirport}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FlightPlan;