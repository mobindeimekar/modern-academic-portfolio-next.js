'use client'

import { useDispatch } from "react-redux";

import { sidebarActions } from "../../redux/sidebarSlice";
import Icon from "@/components/ui/Icon";



export default function SidebarButton() {

    const dispatch = useDispatch()

    function toggleSidebar() {
        dispatch(sidebarActions.toggleSidebar())
    }

    return (
        <button className="flex items-center gap-x-2 lg:hidden " onClick={toggleSidebar}>
            <Icon name="hamburger" className="w-8 h-8 text-primary" />
        </button>
    )
}
