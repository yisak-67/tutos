import React, { useEffect, useState } from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import Container from "./Container";
import { FaChevronDown } from "react-icons/fa";
import { config } from "../config";
import { getData } from "../lib";
import { logo } from "../assets";


const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];
function Header() {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-whiteText md:sticky md:top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <Link to={"/"} className="flex justify-between ">
        <img
                        src={logo}
                        alt="categoryImage"
                        className="w-9 h-6 rounded-md"
                      />
          
          <p>FYZ</p>
   
        </Link>
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search products..."
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        <div className="flex items-center gap-x-6  text-2x1 ">
          <FiUser className="text-2xl" />
          <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
        </div>
      </div>
      <div className="w-full bg-darkText text-gradient-to-r from-blueText to-skyText/90">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu>
          <MenuButton className="inline-flex items-center gap-2 
            rounded-md border border-gray-400 hover:border-white py-1.5
             px-3 font-semibold text-gray-300 hover:text-whiteText">
              Select Category <FaChevronDown className="text-base mt-1" />
            </MenuButton>
            <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
            {categories.map((item) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
          </Menu>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Header;
