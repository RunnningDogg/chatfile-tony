import { Avatar, Button, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const { useToken } = theme;

function NavBar() {
  return (
    <div className=" flex w-full px-6 py-2 justify-between border-b  ">
      <div className="logo-linjk flex gap-2 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <p className="ml-3 text-xl font-bold">ChatFiles</p>
        </Link>
        <div className="ml-10 links flex gap-2">
          <Link href="/login" className="hover:text-geek-400">
            Login
          </Link>
        </div>
      </div>

      <div className="profile flex gap-3 items-center">
        <Avatar size="large">Tony</Avatar>
      </div>
    </div>
  );
}

export default NavBar;
