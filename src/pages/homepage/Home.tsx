import { useState, useEffect } from "react";
import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";
import cities from "../../data/cities.ts";
import SearchIcon from "@mui/icons-material/Search";

interface City {
    id: number,
    country: string,
    city: string
}
const covers = [cover1, cover2, cover3];
const Home = () => {
    const [searchDestination, setSearchDestination] = useState<string>();
    const [searchLocation, setSearchLocation] = useState<string>();
    const [destinations] = useState<City[]>(cities);
    const [currentCoverIndex, setCurrentCoverIndex] = useState(0);


    const filteredDestinations: City[] = searchDestination
        ? destinations?.filter(
            (destination: City) =>
                destination.city.toLowerCase().includes(searchDestination.toLowerCase()) ||
                destination.country.toLowerCase().includes(searchDestination.toLowerCase()) ||
                (destination.city + ", " + destination.country).toLowerCase().includes(searchDestination.toLowerCase())
        )
        : destinations;

    const filteredLocations: City[] = searchLocation
        ? destinations?.filter(
            (destination: City) =>
                destination.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
                destination.country.toLowerCase().includes(searchLocation.toLowerCase()) ||
                (destination.city + ", " + destination.country).toLowerCase().includes(searchLocation.toLowerCase())
        )
        : destinations;

    // Function to rotate the background image
    const rotateBackgroundImage = () => {
        setCurrentCoverIndex((prevIndex) => {
            if (prevIndex === covers.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    useEffect(() => {
        // Rotate background image every 5 seconds
        const interval = setInterval(rotateBackgroundImage, 5000);
        // Cleanup interval on component unmount    
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-white h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${covers[currentCoverIndex]})` }}>
            <p className=" font-bold text-4xl text-white" style={{ textShadow: "1px 1px 3px black" }}>
                Your Wings to Limitless Destinations!
            </p>
            <div className="relative ">
                <form action="" className="m-6 flex">
                    <div className="grid grid-cols-9 rounded-lg overflow-hidden shadow-md max-w-screen-lg">
                        <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
                            <label className="font-semibold text-lg px-4" htmlFor="location">From</label>
                            <input
                                type="text"
                                id="location"
                                required={true}
                                placeholder="City, country"
                                value={searchLocation}
                                onChange={(event) => setSearchLocation(event.target.value)}
                                className=" bg-gray-100 focus:outline-none px-4 text-lg placeholder:text-gray-400"
                            />
                        </span>

                        <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
                            <label className="font-semibold text-lg px-4" htmlFor="destination">To</label>
                            <input
                                type="text"
                                id="destination"
                                required={true}
                                placeholder="City, country"
                                value={searchDestination}
                                onChange={(event) => setSearchDestination(event.target.value)}
                                className=" bg-gray-100   focus:outline-none px-4 text-lg placeholder:text-gray-400"
                            />
                        </span>

                        <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
                            <label className="font-semibold text-lg px-4" htmlFor="depart">Depart</label>
                            <input
                                type="date"
                                id="depart"
                                required={true}
                                className=" bg-gray-100   focus:outline-none px-4 text-lg "
                            />
                        </span>

                        <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
                            <label className="font-semibold text-lg px-4" htmlFor="return">Return</label>
                            <input
                                type="date"
                                id="return"
                                className=" bg-gray-100 focus:outline-none px-4 text-lg placeholder:text-gray-400"
                            />
                        </span>
                        <span className=" col-span-1 flex flex-col bg-gray-100 p-2">
                            <label className="font-semibold text-lg px-4 " htmlFor="class">Class</label>
                            <select id="class" required={true} className="outline-none bg-gray-100 text-lg block appearance-none border-0 border-b-2 border-gray-500 text-center cursor-pointer">
                                <option value="">Economy </option>
                                <option value="">Buisness </option>
                                <option value="">First </option>

                            </select>
                        </span>
                    </div>

                    <button className="bg-blue-700 h-20 px-4 ml-4 text-white text-2xl rounded-lg  shadow-md hover:scale-105 transition duration-90 ease-in flex items-center">
                       Search <SearchIcon style={{ fontSize: '2rem' }}/>
                    </button>
                </form>
                {searchLocation && filteredLocations?.length === 0 ? (<p className="absolute my-4 mx-6 text-black text-lg font-bold">No locations that match your search found!</p>)
                    : searchLocation && (
                        <div className="absolute border border-solid  rounded-lg w-3/12 max-h-64 overflow-hidden my-2 mx-6 bg-white">
                            <ul>
                                {filteredLocations.map((location) => (
                                    <li key={location.id} className="h-8 flex items-center p-2 hover:bg-gray-100" onClick={() => {
                                        setSearchLocation(`${location.city}, ${location.country}`);
                                    }}
                                    >{location.city}, {location.country}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }

                {searchDestination && filteredDestinations?.length === 0 ? (<p className="absolute my-4 mx-6 text-black text-lg font-bold">No destinations that match your search found!</p>)
                    : searchDestination && (
                        <div className="absolute border border-solid  rounded-lg w-3/12 max-h-64 overflow-hidden my-2 ml-72 bg-white">
                            <ul>
                                {filteredDestinations.map((destination) => (
                                    <li key={destination.id} className="h-8 flex items-center p-2 hover:bg-gray-100" onClick={() => {
                                        setSearchDestination(`${destination.city}, ${destination.country}`);
                                    }}
                                    >{destination.city}, {destination.country}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default Home;
