"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="md:shadow-input relative mx-auto mt-3 flex max-w-4xl justify-between bg-white py-2 md:rounded-3xl">
      <Link href={"/"} className="flex items-center px-7 py-1">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </Link>

      <div className="mr-10 hidden items-center gap-4 text-black md:flex">
        {links.map((link) => (
          <Link href={link.href} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className="mr-4 md:hidden">
        <IconMenu2 className="size-8" />
      </button>

      {open && (
        <div className="md:hidden absolute top-14  mx-auto  w-full   gap-4 bg-white text-black">
          <div className="flex flex-col items-center gap-4 ">
            {links.map((link) => (
              <Link className="text-center pt-3 pb-4" href={link.href} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
