import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-4 bg-[#f5f7f8]">
      <div className="flex mb-4 justify-center bg-[#f5f7f8]">
        <Link href="/">
          <h2 className="text-2xl font-bold text-themeDark hover:text-themeMedium cursor-pointer">
            ClimateSmart
          </h2>
        </Link>
      </div>
      <div className="flex justify-center bg-[#f5f7f8]">
        <ul className="flex mb-2 text-sm text-themeDark">
          <li className="mx-2 hover:underline md:mx-3 hover:text-themeMedium">
            <Link href="/videos">
              Videos
            </Link>
          </li>
          <li className="mx-2 hover:underline md:mx-3 hover:text-themeMedium">
            <Link href="/tools">
              Tools
            </Link>
          </li>
          <li className="mx-2 hover:underline md:mx-3 hover:text-themeMedium">
            <Link href="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-themeDark my-4"></hr>
      <div className="block text-sm text-themeDark text-center">
        © 2022{" "}
        <Link href="/">
          <span className="hover:underline cursor-pointer">ClimateSmart</span>
        </Link>
        . All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;