import { useQuery } from "@tanstack/react-query";
import api from "../service/api";

const useDataGet = (city, dateString) => {
    return useQuery({
        queryKey: ["timings", city, dateString || "today"],
        queryFn: async () => {
            if (dateString && dateString !== "today") {
                const res = await api.get(
                    `/timingsByCity/${dateString}?city=${city}&country=Uzbekistan&method=2`
                );
                return res.data;
            } else {
                const res = await api.get(
                    `/timingsByCity?city=${city}&country=Uzbekistan&method=2`
                );
                return res.data;
            }
        },
        onError: (error) => {
            console.error("Error fetching prayer times:", error);
        },
    });
};

export default useDataGet;