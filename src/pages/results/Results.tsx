import { useState } from "react";
import FlightPlan from "./FlightPlan";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

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
    transits: ["KEF, Iceland"],
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
    duration: 430,
    direct: false,
    transits: ["KEF, Iceland"],
    price: 475,

}
const Results = () => {

    const [tickets, setTickets] = useState(1);

    return (
        <div className=" pt-20 h-screen">
            <div className=" bg-blue-950 h-28 flex flex-col justify-center items-center">
                <h2 className="text-white text-5xl">Paris</h2>
                <div className="flex gap-5 text-white justify-center">

                </div>
            </div>

            <div className='grid grid-cols-10 h-full'>

                <div className=' col-span-6 bg-white border-r border-gray-400'>
                    <div className=" min-w-max m-6 px-4 py-2 rounded-2xl grid grid-cols-3 justify-between " style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                        <div className="col-span-2 pr-2">
                            <FlightPlan flight={outbandFlight} isOutband={true} />
                            <FlightPlan flight={returnFlight} isOutband={false} />
                        </div>

                        <div className="flex flex-col justify-center items-center col-span-1 border-l-2">
                            <span>
                                <RemoveCircleIcon className="text-blue-950 hover:opacity-80" style={{height: "1.5rem"}}  onClick={()=>(tickets>1)?setTickets(tickets-1):null}/>
                                <span className="text-gray-600 text-sm mx-2">{(tickets === 1) ? `${tickets} ticket` : `${tickets} tickets`}</span>
                                <AddCircleIcon className="text-blue-950 hover:opacity-80" style={{height: "1.5rem"}} onClick={()=>(tickets<9)?setTickets(tickets+1):null}/>
                            </span>


                            <div className="text-gray-900 text-2xl  ">{outbandFlight.price + returnFlight.price} $</div>
                            <div className="text-gray-600 text-sm">{tickets * (outbandFlight.price + returnFlight.price)} $ total</div>

                            <button className="bg-blue-950 text-white mt-6 px-5 py-2 rounded-xl text-center text-lg flex items-center hover:opacity-80">
                                Select <ArrowForwardIcon style={{ height: "2rem" }} />
                            </button>
                        </div>
                    </div>


                </div>



                <div className=' col-span-4 bg-green-400'>
                    hehe
                </div>
            </div>


        </div >

    );
}

export default Results;