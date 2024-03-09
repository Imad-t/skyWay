import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, ChangeEvent } from "react";

const Filter = () => {

    const [stops, setStops] = useState(true);
    const [price, setPrice] = useState(false);
    const [duration, setDuration] = useState(false);
    const [maxDuration, setMaxDuration] = useState("8");
    const [airlines, setAirlines] = useState(false);
    const [airport, setAirport] = useState(false);

    const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxDuration(event.target.value);
    }

    return (
        <>
            <div className="bg-blue-700 text-white py-4 px-4 mb-4 text-2xl flex  justify-between items-center " >
                <h4>
                    Filters <TuneIcon />
                </h4>
                <SortIcon className="rounded-full p-1 cursor-pointer hover:bg-blue-400 transition duration-600 ease-in" style={{ fontSize: "2rem" }} />
            </div>

            <div className="px-4">
                <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                    <span className="flex justify-between">
                        Stops{stops ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                            onClick={() => setStops(!stops)} />
                            : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                onClick={() => setStops(!stops)} />}
                    </span>
                    {stops ? (<form className="flex flex-col gap-4 my-4 px-2">

                        <span className="flex items-center ">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="direct" />
                            <label className="ml-2 text-sm" htmlFor="direct"> Direct</label>
                        </span>

                        <span className="flex items-center">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="1stop" />
                            <label className="ml-2 text-sm" htmlFor="1stop"> 1 Stop</label>
                        </span>

                        <span className="flex items-center">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="2+stops" />
                            <label className="ml-2 text-sm" htmlFor="2+stops"> 2+ Stops</label>
                        </span>

                    </form>) : null}
                </div>

                <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                    <span className="flex justify-between">
                        Price{price ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                            onClick={() => setPrice(!price)} />
                            : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                onClick={() => setPrice(!price)} />}
                    </span>
                    {price ? (<form className="flex items-center my-4">
                        <label htmlFor="minPrice" className="text-sm mr-1">min</label>
                        <input type="number" id="minPrice" className=" w-16 p-1 mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
                        <label htmlFor="minPrice" className="text-sm mr-1">max</label>
                        <input type="number" id="minPrice" className="w-16 p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
                    </form>) : null}
                </div>

                <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                    <span className="flex justify-between">
                        Duration{duration ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                            onClick={() => setDuration(!duration)} />
                            : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                onClick={() => setDuration(!duration)} />}
                    </span>
                    {duration ? (<form className="flex flex-col gap-4 my-4 px-4">
                        <div className=" text-gray-900 text-sm">
                            Less than {maxDuration} hours
                        </div>
                        <input type="range" value={maxDuration} min={1} max={24} onChange={onRangeChange} />

                    </form>) : null}
                </div>

                <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                    <span className="flex justify-between">
                        Airlines{airlines ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                            onClick={() => setAirlines(!airlines)} />
                            : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                onClick={() => setAirlines(!airlines)} />}
                    </span>
                    {airlines ? (<form className="flex flex-col gap-4 my-4 px-4">
                        <span className="flex items-center ">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="Air france" />
                            <label className="ml-2 text-sm" htmlFor="Air france"> Air france</label>
                        </span>

                        <span className="flex items-center ">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="TurkishAirlines" />
                            <label className="ml-2 text-sm" htmlFor="TurkishAirlines">Turkish Airlines</label>
                        </span>

                        <span className="flex items-center ">
                            <input className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="AmericanAirlines" />
                            <label className="ml-2 text-sm" htmlFor="AmericanAirlines">American Airlines</label>
                        </span>
                    </form>) : null}
                </div>

                <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                    <span className="flex justify-between">
                        Airport{airport ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                            onClick={() => setAirport(!airport)} />
                            : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                onClick={() => setAirport(!airport)} />}
                    </span>
                    {airport ? (<form className="flex flex-col gap-4 my-4 px-4">

                        <div className="flex flex-col gap-2">
                            <h3>Depart from :</h3>
                            <span className="flex items-center ">
                                <input className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="ORY" />
                                <label className="ml-2 text-xs white" htmlFor="ORY">Orly airport, Paris</label>
                            </span>
                            <span className="flex items-center ">
                                <input className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="CDG" />
                                <label className="ml-2 text-xs white" htmlFor="CDG">Charles de Gaulle, Paris</label>
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3>Arrive at :</h3>
                            <span className="flex items-center ">
                                <input className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="JFK" />
                                <label className="ml-2 text-xs white" htmlFor="JFK">JFK, New-York</label>
                            </span>
                            <span className="flex items-center ">
                                <input className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" type="checkbox" id="EWR" />
                                <label className="ml-2 text-xs white" htmlFor="EWR">Newark, New-York</label>
                            </span>
                        </div>

                    </form>) : null}
                </div>
            </div>
        </>
    );
}

export default Filter;