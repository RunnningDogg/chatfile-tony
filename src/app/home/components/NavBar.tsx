import { Avatar, Button, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const { useToken } = theme;

function NavBar() {
  return (
    <div className=" flex w-full justify-between border-b px-6 py-2  ">
      <div className="logo-linjk flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <p className="ml-3 text-xl font-bold">ChatFiles</p>
        </Link>
        <div className="links ml-10 flex gap-2">
          <Link href="/login" className="hover:text-geek-400">
            Login
          </Link>
        </div>
      </div>

      <div className="profile flex items-center gap-3">
        <Avatar size="large">Tony</Avatar>
      </div>
    </div>
  );
}

export default NavBar;
