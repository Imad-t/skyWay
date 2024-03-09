import FlightPlan from "./FlightPlan";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from "react";


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
    price: number
}
const outbandFlight: Flight = {
    date: new Date("2023-07-12"),
    logo: "../../assets/images/air-france.png",
    airline: "Air France",
    departureTime: "10:00",
    departureAirport: 'JFK',
    arrivalTime: "17:10",
    arrivalAirport: 'ORY',
    duration: 430,
    direct: false,
    transits: ["KEF, Isl"],
    price: 415,
}

const returnFlight: Flight = {
    date: new Date("2023-07-12"),
    logo: "../../assets/images/air-france.png",
    airline: "Air France",
    departureTime: "10:00",
    departureAirport: 'JFK',
    arrivalTime: "17:10",
    arrivalAirport: 'ORY',
    duration: 530,
    direct: false,
    transits: ["KEF, Isl","CDG, Fr"],
    price: 475,

}

const Schedule = () => {

    const [tickets, setTickets] = useState(1);

    return (
        <div className="bg-white min-w-max mb-6  py-2 rounded-2xl grid grid-cols-4 justify-between "
            style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
            <div className="col-span-3 pr-2 m-auto">
                <FlightPlan flight={outbandFlight} isOutband={true} />
                <FlightPlan flight={returnFlight} isOutband={false} />
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 border-l-2 ">
                <span>
                    <RemoveCircleIcon className="text-blue-950 hover:scale-110 cursor-pointer transition duration-600 ease-in" style={{ height: "1.5rem" }} onClick={() => (tickets > 1) ? setTickets(tickets - 1) : null} />
                    <span className="text-gray-600 text-sm mx-2">{(tickets === 1) ? `${tickets} ticket` : `${tickets} tickets`}</span>
                    <AddCircleIcon className="text-blue-950  hover:scale-110 cursor-pointer transition duration-600 ease-in" style={{ height: "1.5rem" }} onClick={() => (tickets < 9) ? setTickets(tickets + 1) : null} />
                </span>


                <div className="text-gray-900 text-2xl  ">{outbandFlight.price + returnFlight.price} $</div>
                <div className="text-gray-600 text-sm">{tickets * (outbandFlight.price + returnFlight.price)} $ total</div>

                <button className="bg-blue-950 text-white mt-6 px-5 py-2 rounded-xl text-center text-lg flex items-center hover:bg-blue-700 transition duration-600 ease-in">
                    Select <ArrowForwardIcon style={{ height: "2rem" }} />
                </button>
            </div>
        </div>);
}

export default Schedule;