import Commodities from "./Commodities";
import Schedule from "./Schedule";
import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from "react";

const Results = () => {
    const [stops, setStops] = useState(true);
    const [price, setPrice] = useState(false);
    const [duration, setDuration] = useState(false);
    const [airlines, setAirlines] = useState(false);
    const [airport, setAirport] = useState(false);
    return (
        <div className=" pt-20 min-h-screen bg-gray-50">

            <div className='grid grid-cols-10 h-full'>

                <div className="col-span-2  border-r border-gray-400 pb-6">
                    <div className="bg-blue-700 text-white py-4 px-4 mb-4 text-2xl flex  justify-between items-center " >
                        <h4>
                            Filters <SortIcon />
                        </h4>
                        <TuneIcon className="rounded-full p-1 cursor-pointer hover:bg-blue-400 transition duration-600 ease-in" style={{ fontSize: "2rem" }} />
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
                                <input type="number" id="minPrice" className="w-16 p-1 mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"/>
                                <label htmlFor="minPrice" className="text-sm mr-1">max</label>
                                <input type="number" id="minPrice" className="w-16 p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"/>
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



                            </form>) : null}
                        </div>

                        <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                            <span className="flex justify-between">
                                Price{price ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                    onClick={() => setPrice(!price)} />
                                    : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                        onClick={() => setPrice(!price)} />}
                            </span>
                            {price ? (<form className="flex flex-col gap-4 my-4 px-4">

                            </form>) : null}
                        </div>

                        <div className="text-lg py-3 px-2 border-b-2 border-gray-400 text-gray-700 ">
                            <span className="flex justify-between">
                                Price{price ? <KeyboardArrowUpIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                    onClick={() => setPrice(!price)} />
                                    : <KeyboardArrowDownIcon className="rounded-full p-1 cursor-pointer hover:bg-gray-300" style={{ fontSize: "2rem" }}
                                        onClick={() => setPrice(!price)} />}
                            </span>
                            {price ? (<form className="flex flex-col gap-4 my-4 px-4">



                            </form>) : null}
                        </div>
                    </div>
                </div>

                <div className='col-span-5 border-r border-gray-400 p-8'>
                    <Schedule /><Schedule /><Schedule />
                </div>

                <div className=' col-span-3 p-8 '>
                    <Commodities />
                </div>
            </div>


        </div >

    );
}

export default Results;