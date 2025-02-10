import { user } from "@/constants/data/user";
import React from "react";
import UserInfo from "../molecules/UserInfo";
import Image from "next/image";

function UserSection() {
  return (
    <>
      <UserInfo user={user} />
      <span
        className="font-bold text-6xl mt-24

       text-[#5c4033]"
      >
        Frontend <br /> Developer
      </span>
      <div className="bg-[#a16848] w-full flex-grow rounded-lg shadow-md text-white flex items-center justify-center relative aspect-video">
        <Image
          src={"/joseph.webp"}
          alt="joseph"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </>
  );
}

export default UserSection;
