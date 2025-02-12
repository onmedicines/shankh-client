import { useState } from "react";
import { Link } from "react-router";
import shankhLogo from "/shankhair-transparent.png";
import { Menu, User, X } from "lucide-react";
import BookFlight from "./components/BookFlight";

function Home() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div className={`max-w-screen min-h-screen overflow-x-hidden bg-slate-100 ${isMenuVisible ? "flex flex-col max-h-screen" : ""}}`}>
      <nav className="flex justify-between items-center py-4 px-4">
        {isMenuVisible ? (
          <X
            onClick={() => {
              setMenuVisible(false);
            }}
          />
        ) : (
          <Menu
            onClick={() => {
              setMenuVisible(true);
            }}
          />
        )}
        <Link to={"/"}>
          <img src={shankhLogo} width={"100"} alt="shankh logo" />
        </Link>
        <User />
      </nav>
      {/* Nav menu */}
      <div className={`w-full h-full bg-blue-400 transition-transform duration-300 flex-grow flex flex-col justify-between p-4 ${isMenuVisible ? "transform translate-x-0" : "transform -translate-x-full"}`}>
        <ul className="flex flex-col gap-6 list-disk py-8 px-4">
          <Link to="/">
            <li className="text-2xl text-slate-200 font-bold">Home</li>
          </Link>
          <Link to="/">
            <li className="text-2xl text-slate-200 font-bold">Home</li>
          </Link>
          <Link to="/">
            <li className="text-2xl text-slate-200 font-bold">Home</li>
          </Link>
        </ul>
        <Link to={"/"} className="py-2 text-center w-full rounded-sm bg-orange-400 text-slate-200 text-xl font-bold">
          Feedback
        </Link>
      </div>
      {/* Nav menu */}
      <main>
        <BookFlight />
      </main>
    </div>
  );
}

export default Home;
