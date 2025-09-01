import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../pages/not-found/NotFound";
import PrayerPage from "../pages/prayer-page/PrayerPage";

export default function AppRoutes() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/home" element={<MainLayout />} />
                <Route path="/home/:key" element={<PrayerPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
