import { Select } from "antd";
import Clock from "../ui/Clock";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import DateSelected from "../ui/DateSelected";

export default function Header() {

    const { city, setCity, selectedDate } = useContext(CityContext)

    const handleChange = value => {
        setCity(value)
    };

    console.log("Header test")

    return (
        <div className="header">
            <h1>Namoz vaqtlari</h1>
            <p className="text">{selectedDate}dagi namoz vaqtlari</p>
            <div className="line"></div>
            <div className="select-wrapper">
                <p className="text">Hududni tanlang:</p>
                <Select
                    className="select-input"
                    defaultValue="Toshkent"
                    onChange={handleChange}
                    options={[
                        { value: 'Toshkent', label: 'Toshkent' },
                        { value: 'Xorazm', label: 'Xorazm' },
                        { value: 'Surxondaryo', label: 'Surxondaryo' },
                        { value: 'Sirdaryo', label: 'Sirdaryo' },
                        { value: 'Samarqand', label: 'Samarqand' },
                        { value: 'Qashqadaryo', label: 'Qashqadaryo' },
                        { value: 'Navoiy', label: 'Navoiy' },
                        { value: 'Namangan', label: 'Namangan' },
                        { value: 'Jizzax', label: 'Jizzax' },
                        { value: "Fargʻona", label: "Fargʻona" },
                        { value: 'Buxoro', label: 'Buxoro' },
                        { value: 'Andijon', label: 'Andijon' },
                        { value: "Qoraqalpogʻiston", label: "Qoraqalpogʻiston" },
                        { value: 'Nukus', label: 'Nukus' },
                    ]}
                />
            </div>
            <div className="time-wrapper">
                <p className="address">Mintaqa:<span className="city">{city}</span></p>
                <div className="date">
                    <img src="" alt="" />
                    <Clock />
                    <DateSelected />
                </div>
            </div>
        </div>
    )
}