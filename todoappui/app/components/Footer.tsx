import Image from "next/image";
import Link from "next/link";
import Twitter from "@/public/11244080_x_twitter_elon musk_twitter new logo_icon.svg";
import GitHub from "@/public/4747499_github_icon.svg";
import Instagram from "@/public/5282544_camera_instagram_social media_social network_instagram logo_icon.svg";
import Whatsapp from "@/public/5282549_call_chat_mobile_whatsapp_whatsapp logo_icon.svg";
export default function Footer() {
  return (
    <>
      <section>
        <div className="py-8 bg-slate-400 flex flex-col justify-center items-center">
          <p className="text-white font-semibold text-2xl">Foolish Developer</p>
          <div className="flex flex-col justify-center items-center mt-3">
            <p className="text-white mx-6 w-3/4 text-center">
              Foolish developer is a blog website where you will find great
              tutorialson web Design and development. Here each tutoriual is
              beautifully described step by step with the required source code.
            </p>
            <div className=" flex flex-row justify-center items-center gap-x-4 mt-6 md:gap-x-10">
              <Image src={Twitter} alt="" width={25} height={25}></Image>
              <Image src={GitHub} alt="" width={25} height={25}></Image>
              <Image src={Instagram} alt="" width={25} height={25}></Image>
              <Image src={Whatsapp} alt="" width={25} height={25}></Image>
            </div>
          </div>
        </div>
        <div className="py-5 bg-black">
          <div className="mx-6 flex justify-between">
            <p className="text-white text-[14px]">Copyright 2024</p>
            <div className="flex flex-row justify-center items-center gap-x-5">
              <Link
                href="#"
                className="text-white font-normal hover:text-slate-300"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white font-normal hover:text-slate-300"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-white font-normal hover:text-slate-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
