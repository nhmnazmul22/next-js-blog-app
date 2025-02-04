import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full px-12 py-3 min-h-[60px] border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              className="cursor-pointer"
              src={assets.profile_icon}
              alt=""
              width={40}
            />
          </div>
          {children}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default Layout;
