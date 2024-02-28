
import { NavLink, useLocation } from "react-router-dom"
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"
import MonthlyExpenses from "../components/containers/dashboard/user/metrics/MonthlyExpenses"
import InfoUserCard from "../components/InfoUserCard"
import { useEffect } from "react"
import IndexDashboardLayout from "../components/containers/dashboard/user/IndexDashboardLayout"

const rutesDashboard = {
    index: "/user/tablero",
    analitics:"user/tablero/analiticas",
    settings:"user/tablero/ajustes"
}

function Dashboard() {
    const location = useLocation()

    const styledActiveLinkDashboard = ({ isActive }) => {
        let stylesNavlinkBase = " hover:bg-slate-200 hover:bg-slate-300"
        return isActive ? "bg-slate-200 " + stylesNavlinkBase : stylesNavlinkBase
    }
    
    
    return (
        <section className="border p-1   grid grid-cols-12 rounded-lg h-screen" >
            <SideBar className="flex flex-col bg-purple-400 relative border rounded-tl rounded-bl col-span-2" >
                <div className=" ">
                    <span className="text-sm font-bold">Daniel Esneider Gualtero Gonzalez</span>

                </div>
                <NavLink exact="true" className={styledActiveLinkDashboard} to={"/user/tablero"}>Tablero</NavLink>
                <NavLink className={styledActiveLinkDashboard} to={"analiticas"}>Analiticas</NavLink>
                <NavLink className={styledActiveLinkDashboard} to={"ajustes"}>Ajustes</NavLink>
            </SideBar>

            {rutesDashboard.index === location.pathname && <IndexDashboardLayout />}
            <Outlet />
        </section>
    )
}

export default Dashboard