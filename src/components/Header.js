import Search from "./Search.js";
import Moon from "./icons/Moon.js";
import Sun from "./icons/Sun.js";
import Profile from "./icons/Profile.js";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 md:w-[900px] xl:w-[1120px] mx-auto">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <a href="#top">Home</a>
        <a href="#about">Collection</a>
        <a href="#experience">Card List</a>
        <Search />
        <Moon className="size-7" />
        <Sun className="size-7" />
        <Profile className="size-7" />
      </nav>
    </header>
  );
};

export default Header;
