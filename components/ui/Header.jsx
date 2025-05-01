import Link from "next/link";
import {
  Home,
  UserRound,
  Lightbulb,
  MessagesSquare,
  Flame,
  Globe,
} from "lucide-react";
import { useRouter } from "next/router";
import { navLinks } from "@/constants";

const DARK_BLUE_HEADER = "#0082FF";

export const Header = () => {
  const { pathname } = useRouter();

  {/* TODO: Enable Dark Mode Features */ }
  // const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <header className="fixed z-50 top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-2xl px-5 py-2 border-2 border-orange-400 md:px-5 md:py-2 sm:px-5 sm:py-1">
      <nav className="h-full w-full text-center">
        <ul className="flex gap-2 justify-center items-center">

          {/* TODO: Enable Dark Mode Features */}
          {/* <li onClick={toggleDarkMode}>
            {isDarkMode ? <Sun /> : <Moon />}
          </li> */}

          {navLinks?.map((name) => {
            const isActive =
              (pathname === "/" && name === "Home") ||
              pathname === `/${name.toLowerCase()}`;

            return (
              <li
                key={name}
                className={`flex flex-col items-center ${isActive ? "nav_link_active" : ""
                  }`}
              >
                <Link
                  className="nav_link flex flex-col items-center sm:text-xs"
                  href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                >
                  {name === "Home" ? (
                    <Home color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  ) : name === "About" ? (
                    <UserRound color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  ) : name === "Skills" ? (
                    <Lightbulb color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  ) : name === "Projects" ? (
                    <Flame color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  ) : name === "Blogs" ? (
                    <Globe color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  ) : (
                    <MessagesSquare color={isActive ? DARK_BLUE_HEADER : undefined} size={20} />
                  )}
                  <span className="text-sm font-light sm:text-xs">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};