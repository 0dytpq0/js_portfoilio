import { IUser } from "@/constants/data/user";
import Link from "next/link";

interface UserInfoProps {
  user: IUser;
}

const UserInfo = ({ user }: UserInfoProps) => {
  const { phone, blog, email, gitHub, name } = user;
  return (
    <>
      <h1 className="font-bold text-7xl text-[#5c4033]">
        {name.last} <br />
        {name.first}
      </h1>
      <p className="font-bold text-lg text-[#7c584a]">
        Phone : {phone} <br />
        Email : {email} <br />
        GitHub :
        <Link
          href={gitHub || ""}
          className="text-[#a16848] underline hover:text-[#7c584a]"
        >
          {gitHub}
        </Link>
        <br />
        Blog :
        <Link
          href={blog || ""}
          className="text-[#a16848] underline hover:text-[#7c584a]"
        >
          {blog}
        </Link>
        <br />
      </p>
    </>
  );
};

export default UserInfo;
