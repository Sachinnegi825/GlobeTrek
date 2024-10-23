"use client"

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Links for larger screens */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login Button for larger screens */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Menu Icon for smaller screens */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-80 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Links for mobile */}
        <ul className="flex flex-col items-center justify-center gap-8 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white text-center cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={toggleMenu} // Optional: Close menu on link click
            >
              {link.label}
            </Link>
            
          ))}
    
    <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
        </ul>

    
      
      </div>
    </nav>
  );
};

export default Navbar;
