"use client";
import Link from "next/link";
import React, { useState } from "react";
import router from "next/router";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
  ChevronRight,
  Menu,
  Contact,
  FolderKanban,
  HousePlus,
  LayoutDashboard,
  Store,
  SunMoon,
  ChevronLeft,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItems = [
    { text: "Home", icon: <HousePlus />, path: "/home" },
    { text: "About", icon: <Store />, path: "/about" },
    { text: "Products", icon: <FolderKanban />, path: "/product" },
    { text: "Support", icon: <LayoutDashboard />, path: "/support" },
    { text: "Contact", icon: <Contact />, path: "/contact" },
  ];

  return (
    <div className="text-white sticky top-0 z-50 bg-black bg-opacity-30 h-auto lg:h-36">
      {/* Mobile Menu Button */}
      <div className="lg:hidden p-4 flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Menu />
        </button>
        <div className="flex justify-center flex-grow">
          <img src="/logo.png" className="w-24 h-auto" />
        </div>
      </div>

      {/* Sidebar for Mobile Screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-gray-100 border-r border-black shadow-lg transform lg:transform-none transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6 pb-5 flex justify-between items-center bg-black text-white">
          <Image
            src="/logo.png"
            alt="logo"
            layout="responsive"
            width={96}
            height={24}
            className="w-full h-auto object-cover"
          />
        </div>
        <ul className="flex-grow">
          {sidebarItems.map((item, index) => (
            <li key={index} className={`border-t border-gray-700`}>
              <SidebarItem
                text={item.text}
                icon={item.icon}
                path={item.path}
                setIsOpen={setIsOpen}
                isCollapsed={isCollapsed}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Header for Larger Screens */}
      <div className="hidden lg:block">
        <div className="flex justify-end items-center p-4">
          <div className="flex mr-8 gap-4">
            <Link href="/home">
              <span className="cursor-pointer hover:underline">TÜRKÇE</span>
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-blue-500" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-blue-700" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="hover:text-blue-400" />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="hover:text-red-600" />
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center px-16 py-4">
          <div className="flex gap-5">
            <Link href="/home" className="text-lg hover:underline">
              HOME
            </Link>
            <Link href="/about" className="text-lg hover:underline">
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="/product"
                className="text-lg hover:underline flex items-center"
              >
                PRODUCT <ChevronDown />
              </Link>
              <div className="absolute hidden group-hover:block shadow-lg rounded-md bg-black bg-opacity-70">
                <Link
                  href="/products/hand-guns"
                  className="flex p-3 text-sm mb-2 border-b border-gray-300 pb-2"
                >
                  HAND GUNS <ChevronRight className="ml-28" />
                </Link>
                <Link
                  href="/products/heavy-machine-guns"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2"
                >
                  HEAVY MACHINE GUNS <ChevronRight className="ml-9" />
                </Link>
                <Link
                  href="/products/medium-caliber-cannons"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2"
                >
                  MEDIUM-CALIBER CANNONS <ChevronRight />
                </Link>
                <Link
                  href="/products/integration-solutions"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2"
                >
                  INTEGRATION SOLUTIONS
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/home"
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <Image
              src="/logo.png"
              alt="logo"
              layout="responsive"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </Link>

          <div className="flex gap-8">
            <Link
              href="https://academy.canik.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline text-orange-400"
            >
              ACADEMY
            </Link>
            <Link
              href="https://www.canik-store.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline text-orange-400"
            >
              STORE
            </Link>
            <div className="relative group">
              <Link href="/support" className="flex text-lg hover:underline">
                SUPPORT <ChevronDown />
              </Link>
              <div className="absolute hidden group-hover:block shadow-lg rounded-md right-10 bg-black bg-opacity-70">
                <Link
                  href="/support/manuals"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  MANUALS
                </Link>
                <Link
                  href="/support/catalogs"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  CATALOGS
                </Link>
                <Link
                  href="/support/videos"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  CANiK VIDEOS
                </Link>
                <Link
                  href="/support/news"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  CANiK NEWS
                </Link>
                <Link
                  href="/support/hr"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  HUMAN RESOURCES
                </Link>
                <Link
                  href="/support/press"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  PRESS
                </Link>
                <Link
                  href="/support/downloads"
                  className="flex p-3 text-sm whitespace-nowrap mb-2 border-b border-gray-300 pb-2 justify-end"
                >
                  DOWNLOADS
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-lg hover:underline">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  path: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  path,
  setIsOpen,
  isCollapsed,
}) => (
  <Link href={path} passHref>
    <div
      onClick={() => setIsOpen(false)}
      className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-800`}
    >
      <div className="text-lg">{icon}</div>
      {!isCollapsed && <div>{text}</div>}
    </div>
  </Link>
);

export default Header;
