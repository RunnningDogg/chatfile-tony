"use client";
import { Avatar, Button, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
const { useToken } = theme;

function NavBar() {
  const links = [
    { name: "文档集市", href: "/docs" },
    { name: "上传文档", href: "/upload" },
    { name: "文档对话", href: "/chat" },
  ];
  const pathname = usePathname();

  // session
  const { data } = useSession();

  // console.log(data);

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
        <div className="links ml-10 flex gap-4">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={
                  `hover:text-geek-400  ` + `${isActive ? "text-geek-400" : ""}`
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="profile flex items-center gap-3">
        {/* <Avatar size="large">Tony</Avatar> */}
        {!data?.user ? (
          <Button type="primary" href="/api/auth/signin">
            Sign In
          </Button>
        ) : (
          <>
            Hi {data.user.name}
            <Button href="/api/auth/signout">Sign Out</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
