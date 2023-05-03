import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
    library.add(faMagnifyingGlass, faHouse, faUser);

    const Menus = [
        { name: "Menu", icon: faHouse, dis: "translate-x-0", color: "bg-pacific-cyan", path: "/menu" },
        { name: "Search", icon: faMagnifyingGlass, dis: "translate-x-16", color: "bg-cinnabar", path: "/search" },
        { name: "Login", icon: faUser, dis: "translate-x-32", color: "bg-forest-green", path: "/login" },
    ];

    const [active, setActive] = useState(-1);

    function handleClick(index) {
        if (index === active) {
            setActive(-1);
        } else {
            setActive(index);
        }
    }

    return (
        <div className="w-full bg-white max-h-[4.4rem] px-6 rounded-t-xl flex justify-center">
            <ul className="flex relative">
                {active !== -1 && (
                    <span
                        className={`${Menus[active].color} duration-500 ${Menus[active].dis} border-4 border-raisin-black h-16 w-16 absolute
            -top-5 rounded-full`}
                    >
            <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
                )}
                {Menus.map((menu, i) => (
                    <li key={i} className="w-16">
                        <Link
                            to={i === active ? "/" : menu.path}
                            className="flex flex-col text-center pt-6"
                            onClick={() => handleClick(i)}
                        >

              <span
                  className={`text-xl z-10 cursor-pointer duration-500 ${
                      i === active && "-mt-6 text-white"
                  }`}
              >
                <FontAwesomeIcon icon={menu.icon}  />
              </span>
                            <span
                                className={`${
                                    active === i
                                        ? "font-title translate-y-4 duration-700 opacity-100"
                                        : "font-title opacity-0 translate-y-10"
                                } `}
                            >
                {menu.name}
              </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
