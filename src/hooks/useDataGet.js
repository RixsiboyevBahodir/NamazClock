import { useQuery } from "@tanstack/react-query";
import api from "../service/api";

const useDataGet = (city, dateString) => {
    return useQuery({
        queryKey: ["timings", city, dateString || "today"],

        queryFn: async () => {
            if (dateString && dateString !== "today") {
                // ✅ Sana tanlangan bo‘lsa
                const res = await api.get(
                    `/timingsByCity/${dateString}?city=${city}&country=Uzbekistan&method=2`
                );
                return res.data;
            } else {
                // ✅ Sana tanlanmagan bo‘lsa (bugungi kun)
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