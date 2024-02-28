import { useState } from "react";
import SideBar from "./components/SideBar";
import { RiMenu2Fill } from "react-icons/ri";
function App() {
    const [activeSidebar, setActiveSidebar] = useState(true);

    const toggleSidebar = () => {
        setActiveSidebar(true);
    };
    return (
        <div className="flex">
            <div
                className={`hidden md:block overflow-y-auto h-screen p-5 pt-8 ${activeSidebar ? "w-72 overflow-y-auto" : "w-20"
                    } duration-300  relative border-r bg-sky-400`}
            >

                <SideBar activeSidebar={activeSidebar} toggleSidebar={toggleSidebar} />
            </div>
            <div className="p-7 w-full">
                <div className="flex gap-2 items-center">
                    <RiMenu2Fill
                        className={`bg-white rounded-full text-2xl cursor-pointer text-sky-400  duration-300 
                            `}
                        onClick={() => {
                            setActiveSidebar(!activeSidebar);
                        }}
                    />
                    <div>
                        <h1 className="font-bold text-2xl">HomePage</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
