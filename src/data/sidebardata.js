import { MdOutlineDashboard } from "react-icons/md";
import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutSidebarReverse,
} from "react-icons/bs";
export const Menus = [
  { title: "Dashboard", icon: <MdOutlineDashboard /> },
  {
    title: "Pages", icon: <AiOutlineFileText />,
    submenu: true,
    submenuItems: [{ title: "sub1" }, { title: "sub2" }, { title: "sub3" }, { title: "sub4" }, { title: "sub5" }, { title: "sub6" }, { title: "sub7" }],
  },
  { title: "Media", icon: <BsFillImageFill />, spacing: true },
  {
    title: "Project",
    icon: <BsReverseLayoutSidebarReverse />,
    submenu: true,
    submenuItems: [{ title: "sub1" }, { title: "sub2" }, { title: "sub3" }, { title: "sub4" }, { title: "sub5" }],
  },
  { title: "Analytics", icon: <AiOutlineBarChart /> },
  { title: "Inbox", icon: <AiOutlineMail /> },
  { title: "Profile", icon: <BsPerson />, spacing: true },
  { title: "Settings", icon: <AiOutlineSetting /> },
  { title: "Logout", icon: <AiOutlineLogout /> },
];
