import Image from "next/image";
import bannerImg from "@/app/assets/img/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col  items-center justify-center  gap-4 pt-8  rounded-lg text-center bg-gray-100">
      <h2 className="font-bold text-4xl">
        We Build
        <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
          Production
        </span>
        Apps
      </h2>
      <p className="max-w-187.5 mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center items-center gap-2">
        <button className="btn btn-success">Google Play</button>
        <button className="btn btn-primary">App Store</button>
      </div>

      <Image src={bannerImg} className="w-187.5 h-auto" alt="banner logo" />
    </div>
  );
};

export default Banner;
