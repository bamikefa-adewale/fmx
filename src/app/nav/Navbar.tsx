import Container from "@/components/ui/Container";
import NavigationMenu from "./NavigationMenu";
import Image from "next/image";
import Link from "next/link";
import { SearchComponent } from "./SearchComponent";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <section className="fixed  left-0 w-full bg-gray-100 dark:bg-black z-50  h-[76px]">
      <Container>
        <div className="flex items-center justify-between py-5 ">
          <Link href={"/"}>
            <Image
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1739272263/logo2_2_o9stt8.png"
              alt={"logo"}
              width={50}
              height={80}
              className="h-[36px] cursor-pointer w-[81.28px]"
            />
          </Link>
          <SearchComponent />
          <NavigationMenu />
          <ModeToggle />
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
