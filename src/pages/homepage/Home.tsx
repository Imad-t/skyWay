import { useState, useEffect } from "react";
import cover1 from "../../assets/images/cover1.webp";
import cover2 from "../../assets/images/cover2.webp";
import cover3 from "../../assets/images/cover3.webp";
import cities from "../../data/cities.ts";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

interface City {
  id: number;
  country: string;
  city: string;
}
const covers = [cover1, cover2, cover3];
const Home = () => {
  const navigate = useNavigate();
  const [searchDestination, setSearchDestination] = useState<string>();
  const [searchLocation, setSearchLocation] = useState<string>();
  const [destinations] = useState<City[]>(cities);
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(true);
  const [showDestinationSuggestions, setShowDestinationSuggestions] =
    useState(true);

  const filteredDestinations: City[] = searchDestination
    ? destinations?.filter(
        (destination: City) =>
          destination.city
            .toLowerCase()
            .includes(searchDestination.toLowerCase()) ||
          destination.country
            .toLowerCase()
            .includes(searchDestination.toLowerCase()) ||
          (destination.city + ", " + destination.country)
            .toLowerCase()
            .includes(searchDestination.toLowerCase())
      )
    : destinations;

  const filteredLocations: City[] = searchLocation
    ? destinations?.filter(
        (destination: City) =>
          destination.city
            .toLowerCase()
            .includes(searchLocation.toLowerCase()) ||
          destination.country
            .toLowerCase()
            .includes(searchLocation.toLowerCase()) ||
          (destination.city + ", " + destination.country)
            .toLowerCase()
            .includes(searchLocation.toLowerCase())
      )
    : destinations;

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
    const interval = setInterval(rotateBackgroundImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-white h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${covers[currentCoverIndex]})` }}
    >
      <p
        className=" font-bold mx-4 text-3xl sm:text-4xl text-white text-center"
        style={{ textShadow: "1px 1px 3px black" }}
      >
        Your Wings to Limitless Destinations!
      </p>
      <div className="relative ">
        <form action="" className="m-6 flex flex-col lg:flex-row items-center gap-4 lg:text-lg">
          <div className="md:h-20 grid grid-cols-6 md:grid-cols-9 rounded-lg overflow-hidden shadow-md max-w-screen-lg">
            <span className="col-span-3 md:col-span-2 flex flex-col bg-gray-100 p-2 border-b-2 md:border-b-0 border-r-2">
              <label className="font-semibold px-1 lg:px-3" htmlFor="location">
                From
              </label>
              <input
                type="text"
                id="location"
                required={true}
                placeholder="City, country"
                value={searchLocation}
                onChange={(event) => setSearchLocation(event.target.value)}
                className=" bg-gray-100 focus:outline-none px-1 lg:px-3 placeholder:text-gray-400"
              />
              {/* Location Suggestions */}
        {searchLocation &&
        showLocationSuggestions &&
        filteredLocations?.length === 0 ? (
          <p className="absolute top-60 md:top-24 -left-0  my-4 mx-6 text-black text-lg font-bold bg-white rounded-lg p-2">
            No locations that match your search found!
          </p>
        ) : (
          searchLocation &&
          showLocationSuggestions && (
            <div className="absolute top-24 left-0 border border-solid rounded-lg w-5/12 md:w-3/12 max-h-64 overflow-hidden my-2 mx-6 bg-white">
              <ul>
                {filteredLocations.map((location) => (
                  <li
                    key={location.id}
                    className="h-8 flex items-center p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSearchLocation(
                        `${location.city}, ${location.country}`
                      );
                      setShowLocationSuggestions(false);
                    }}
                  >
                    {location.city}, {location.country}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
            </span>

            <span className=" col-span-3 md:col-span-2 flex flex-col bg-gray-100 p-2 border-b-2 md:border-b-0 md:border-r-2">
              <label
                className="font-semibold px-1 lg:px-3"
                htmlFor="destination"
              >
                To
              </label>
              <input
                type="text"
                id="destination"
                required={true}
                placeholder="City, country"
                value={searchDestination}
                onChange={(event) => setSearchDestination(event.target.value)}
                className=" bg-gray-100   focus:outline-none px-1 lg:px-3 placeholder:text-gray-400"
              />
              {/* Destination Suggestions */}
        {searchDestination &&
        showDestinationSuggestions &&
        filteredDestinations?.length === 0 ? (
          <p className="absolute top-60 md:top-24 -left-0  my-4 mx-6 text-black text-lg font-bold bg-white rounded-lg p-2">
            No destinations that match your search found!
          </p>
        ) : (
          searchDestination &&
          showDestinationSuggestions && (
            <div className="absolute top-24 -left-8 border border-solid rounded-lg w-5/12 md:w-3/12 max-h-64 overflow-hidden my-2 ml-72 bg-white">
              <ul>
                {filteredDestinations.map((destination) => (
                  <li
                    key={destination.id}
                    className="h-8 flex items-center p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSearchDestination(
                        `${destination.city}, ${destination.country}`
                      );
                      setShowDestinationSuggestions(false);
                    }}
                  >
                    {destination.city}, {destination.country}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
            </span>

            <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
              <label className="font-semibold px-1 lg:px-3" htmlFor="depart">
                Depart
              </label>
              <input
                type="date"
                id="depart"
                required={true}
                className="text-xs sm:text-lg bg-gray-100   focus:outline-none px-1 lg:px-3 "
              />
            </span>

            <span className=" col-span-2 flex flex-col bg-gray-100 p-2 border-r-2">
              <label className="font-semibold px-1 lg:px-3" htmlFor="return">
                Return
              </label>
              <input
                type="date"
                id="return"
                className="text-xs sm:text-lg bg-gray-100 focus:outline-none px-1 lg:px-3 placeholder:text-gray-400"
              />
            </span>
            <span className=" col-span-2 md:col-span-1 flex flex-col  bg-gray-100 p-2">
              <label className="font-semibold px-1 lg:px-3   " htmlFor="class">
                Class
              </label>
              <select
                id="class"
                required={true}
                className="outline-none bg-gray-100 block appearance-none border-0 border-b-2 border-gray-500 text-center cursor-pointer"
              >
                <option value="">Economy </option>
                <option value="">Buisness </option>
                <option value="">First </option>
              </select>
            </span>
          </div>

          <button
            className="w-fit h-14 lg:h-20 bg-blue-700 px-2 lg:px-3 text-white text-2xl rounded-lg  shadow-md hover:scale-105 transition duration-90 ease-in flex items-center justify-center"
            onClick={() => navigate("/results")}
          >
            Search <SearchIcon style={{ fontSize: "2rem" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
