import { useContext, useState } from "react"
import { CityContext } from "../../context/CityContext"
import { DatePicker } from "antd"
import dayjs from "dayjs";

export default function DateSelected() {

    const { selectedDate, setSelectedDate } = useContext(CityContext)

    const onChange = (date, dateString) => {
        if (dateString) {
            setSelectedDate(date.format("DD-MM-YYYY"))
        }
    };

    const dateValue = selectedDate && dayjs(selectedDate, "DD-MM-YYYY").isValid()
        ? dayjs(selectedDate, "DD-MM-YYYY")
        : undefined;

    return (
        <div>
            <DatePicker
                onChange={onChange}
                className="my-datepicker"
                defaultValue={dayjs()}
                format="DD-MM-YYYY"
                allowClear={false}
                value={dateValue}
            />
        </div>
    )
}
