import { createContext, useState } from "react";
import DawnPrayer from "../assets/svg/dawnPrayer.svg";
import NoonPrayer from "../assets/svg/noonPrayer.svg";
import AsrPrayer from "../assets/svg/asrPrayer.svg";
import SunsetPrayer from "../assets/svg/sunsetPrayer.svg";
import NightPrayer from "../assets/svg/nightPrayer.svg";
import Sunrise from "../assets/svg/sunrise.svg";
import useDataGet from "../hooks/useDataGet";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {


    const [city, setCity] = useState("Toshkent")

    const [selectedDate, setSelectedDate] = useState("Bugungi");

    const { data, isLoading } = useDataGet(city, selectedDate)

    const timings = Object.entries(data?.data?.timings || {});
    const selectedTimings = timings.filter(([key]) =>
        ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha", "Sunrise"].includes(key)
    );

    const images = {
        Fajr: DawnPrayer,
        Dhuhr: NoonPrayer,
        Asr: AsrPrayer,
        Maghrib: SunsetPrayer,
        Isha: NightPrayer,
        Sunrise: Sunrise
    };

    const prayersUz = {
        Fajr: "Bomdod",
        Dhuhr: "Peshin",
        Asr: "Asr",
        Maghrib: "Shom",
        Isha: "Xufton",
        Sunrise: "Quyosh"
    }

    return (
        <CityContext.Provider value={{ city, setCity, images, prayersUz, selectedTimings, isLoading, selectedDate, setSelectedDate }}>
            {children}
        </CityContext.Provider>
    )
}
