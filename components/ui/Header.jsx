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
    <header className="fixed z-50 top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-2xl px-8 py-2 border-2 border-orange-400 dark:bg-[#161d27] dark:border-offwhite/40">
      <nav className="h-full w-full text-center">
        <ul className="flex gap-3 justify-center items-center">

          {/* TODO: Enable Dark Mode Features */}
          {/* <li onClick={toggleDarkMode} className="dark:text-offwhite">
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
                  className="nav_link flex flex-col items-center"
                  href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                >
                  {name === "Home" ? (
                    <Home color={isActive ? DARK_BLUE_HEADER : undefined} />
                  ) : name === "About" ? (
                    <UserRound color={isActive ? DARK_BLUE_HEADER : undefined} />
                  ) : name === "Skills" ? (
                    <Lightbulb color={isActive ? DARK_BLUE_HEADER : undefined} />
                  ) : name === "Projects" ? (
                    <Flame color={isActive ? DARK_BLUE_HEADER : undefined} />
                  ) : name === "Blogs" ? (
                    <Globe color={isActive ? DARK_BLUE_HEADER : undefined} />
                  ) : (
                    <MessagesSquare color={isActive ? DARK_BLUE_HEADER : undefined} />
                  )}
                  <span className="text-sm font-light">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
