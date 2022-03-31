import { Routes, Route } from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="hero" element={<HeroScreen />} />

            <Route path="search" element={<SearchScreen />} />
            
            <Route path="/" element={<MarvelScreen />} />
        </Routes>
    </>
  )
}
