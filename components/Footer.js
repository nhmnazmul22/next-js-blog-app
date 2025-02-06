import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-white text-sm">
        All right reserved. Copyright @blogger
      </p>
      <div className="flex">
        <Image
          className="cursor-pointer hover:opacity-90 duration-200"
          src={assets.facebook_icon}
          alt=""
          width={40}
        />
        <Image
          className="cursor-pointer hover:opacity-90 duration-200"
          src={assets.twitter_icon}
          alt=""
          width={40}
        />
        <Image
          className="cursor-pointer hover:opacity-90 duration-200"
          src={assets.googleplus_icon}
          alt=""
          width={40}
        />
      </div>
    </div>
  );
};

export default Footer;
