import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface City {
    name: string;
    image: () => Promise<{ default: string }>;
}

const cities: City[] = [
    { name: "Dubai", image: () => import("../../assets/images/dubai.webp") },
    { name: "NewYork", image: () => import("../../assets/images/newyork.webp") },
    { name: "London", image: () => import("../../assets/images/london.webp") },
    { name: "Paris", image: () => import("../../assets/images/paris.webp") },
];

const Trending = () => {
    const [current, setCurrent] = useState(0);
    const [loadedImages, setLoadedImages] = useState<(string | undefined)[]>([]);

    const loadImage = async (index: number) => {
        if (!loadedImages[index]) {
            const module = await cities[index].image();
            setLoadedImages((prev) => {
                const newImages = [...prev];
                newImages[index] = module.default;
                return newImages;
            });
        }
    };

    //preload the current and next image
    loadImage(current);
    loadImage((current + 1) % cities.length);

    const cityElements = cities.map((city, index) => (
        <div
            key={city.name}
            style={{
                height: "calc(100vh - 80px)",
                backgroundImage: `url('${loadedImages[index] || ""}')`,
                flexGrow: 1,
            }}
            className="flex flex-col gap-24 items-end justify-center p-20 pb-80 bg-cover bg-right"
        >
            <div className="absolute top-1/4 inset-x-0 left-1/2 transform -translate-x-1/2 sm:transform-none sm:inset-auto sm:top-1/4 sm:left-12 flex flex-col items-center">
                <h2
                    className="text-6xl sm:text-8xl font-semibold text-white mb-4"
                    style={{ textShadow: "1px 1px 3px black" }}
                >
                    {city.name}
                </h2>
                <button className="bg-blue-950 text-white w-fit text-xl sm:text-4xl px-5 py-2 rounded-xl text-center flex items-center hover:bg-blue-700 transition duration-600 ease-in">
                    Book Flight
                </button>
            </div>
        </div>
    ));

    return (
        <div className="pt-20 relative">
            <button
                className="absolute top-1/2 left-4"
                onClick={() => {
                    current === 0
                        ? setCurrent(cityElements.length - 1)
                        : setCurrent(current - 1);
                }}
            >
                <ArrowBackIosIcon style={{ fontSize: "4rem", color: "#172554" }} />
            </button>
            {cityElements[current]}
            <button
                className="absolute top-1/2 right-5"
                onClick={() => {
                    current === cityElements.length - 1
                        ? setCurrent(0)
                        : setCurrent(current + 1);
                }}
            >
                <ArrowForwardIosIcon style={{ fontSize: "4rem", color: "#172554" }} />
            </button>
        </div>
    );
};

export default Trending;
