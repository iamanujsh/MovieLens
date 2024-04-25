// @ts-nocheck
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import Genres from "./Genres/Genres";
import { Link } from "react-router-dom";
import Adult from "./Adult";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-fit">
        <div className="flex flex-col pr-10 py-5 gap-y-4">
          <Genres />
          <Link to={`/movies`}>
            <div>Movies</div>
          </Link>
          <Link to={`/tvshows`}>
            <div>TvShows</div>
          </Link>
          {/* <Adult /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
