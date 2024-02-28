import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";

import Searchbar from "../components/Searchbar";
import { MdOutlineDashboard } from "react-icons/md";
import { Menus } from "../data/sidebardata";

const SideBar = ({ activeSidebar, toggleSidebar }) => {
    const [activeSideMenu, setActiveSideMenu] = useState(false);
    const [submenuHead, setSubmenuHeader] = useState("")

    const toggleSidebarMenu = (title, submenu) => {
        if (submenu) {
            setActiveSideMenu(!activeSideMenu);
        }
        setSubmenuHeader(() => title)
        console.log(submenuHead)
    }
    return (
        // <div className='fixed top-0 left-0 h-screen m-0 flex flex-col bg-primary  text-white shadow-lg'>
        <>
            <div className="inline-flex">
                {/* <SideBarIcons icon={<MdOutlineDashboard size={30} />} /> */}
                <MdOutlineDashboard className=" text-4xl rounded text-white cursor-pointer block float-left mr-2" />
                <h1
                    className={`text-white origin-left font-medium text-2xl duration-300 ${!activeSidebar && "scale-0"
                        }`}
                >
                    Tailwind
                </h1>
            </div>
            <div
                className={`flex items-center rounded-md bg-sky-300 mt-3 ${activeSidebar ? "px-4" : "px-2.5"
                    } py-2`}
            >
                <BsSearch
                    className={`text-white text-lg block float-left cursor-pointer ${activeSidebar && "mr-2"
                        }`}
                    onClick={() => {
                        toggleSidebar();
                    }}
                />
                <Searchbar activeSidebar={activeSidebar} />
            </div>
            <ul className="pt-2">
                {Menus.map((menu, index) => (
                    <>
                        <li
                            key={index}
                            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-sky-300 duration-200 rounded-md ${menu.spacing ? "mt-9" : "mt-2"
                                }`}
                            onClick={() => {
                                toggleSidebarMenu(menu.title, menu.submenu)
                            }}
                        >
                            <span className="text-xl block">
                                {menu.icon ? menu.icon : <BsChevronDown />}
                            </span>
                            <span
                                className={`text-base font-medium flex-1 ${!activeSidebar && "hidden"
                                    }`}
                            >
                                {menu.title}
                            </span>
                            {menu.submenu && activeSidebar && (
                                <BsChevronDown
                                    className={`${activeSideMenu && "rotate-180"} duration-300`}
                                    onClick={() => {
                                        setActiveSideMenu(!activeSideMenu);
                                    }}
                                />
                            )}
                        </li>
                        {menu.submenu && activeSideMenu && activeSidebar && (
                            <ul>
                                {menu.submenuItems.map((submenuitem, index) => (
                                    <>
                                        <li
                                            key={index}
                                            className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-sky-300 duration-200 rounded-md"
                                        >
                                            {submenuitem.title}
                                        </li>
                                    </>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </>
    );
};

export default SideBar;
