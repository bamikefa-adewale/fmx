import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import FooterList from "./FooterList";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="bg-[#05376A] h-[80%]">
      <Container>
        <div className="flex justify-between mt-10 ">
          {" "}
          <div className="w-[507px] gap-6 h-[232px]">
            {" "}
            <Link href={"/"}>
              <Image
                src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1739277448/Group_1961_vlalhk.png"
                alt={"logo"}
                width={50}
                height={80}
                className="h-[36px] text-white cursor-pointer w-[81.28px]"
              />
            </Link>
            <p className="text-lg my-10 font-[400] text-[#E6E8E6] poppins leading-[30px]">
              Fresh Market Exchange(FMX) Online Ordering Platform is your
              premier destination for wholesale fresh produce in Japan. We're
              committed to your wholesale trading success and also giving you
              the best online shopping experience. Cheers!
            </p>
          </div>
          <div className="">
            <div className="flex justify-between gap-60">
              <div>
                <h3 className="text-lg font-bold text-[#FCFFFC] mb-2">
                  Company
                </h3>
                <FooterList>
                  <Link href="/">About</Link>
                  <Link href="/">Partnership</Link>
                  <Link href="/">Contact us</Link>
                </FooterList>
              </div>
              <div>
                {" "}
                <h3 className="text-lg font-bold  text-[#FCFFFC] mb-2">
                  Help & Support
                </h3>
                <FooterList>
                  <Link href="/">FAQs</Link>
                  <Link href="/">Talk to Support</Link>
                  <Link href="/"> Live Chat</Link>
                  <Link href="/">Language</Link>
                </FooterList>
              </div>
              <div>
                {" "}
                <h3 className="text-lg poppins text-[#FCFFFC] font-bold mb-2">
                  Account{" "}
                </h3>
                <FooterList>
                  <Link href="/"> Profile</Link>
                  <Link href="/"> Order</Link>
                  <Link href="/"> Cart</Link>
                  <Link href="/"> LogOut</Link>
                </FooterList>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 ">
          <div className="h-[106px] mx-10 flex justify-between">
            {" "}
            <div className="">
              <p className="text-[#F2F3F2] my-5">Follow us on social media</p>
              <div className="flex gap-10">
                {" "}
                <Link
                  href="/messages"
                  className="flex items-center text-lg font-[400]  gap-2"
                >
                  <ImFacebook2 className="w-[24px] text-[#FCFFFC] h-[24px]" />{" "}
                  <span className="text-[#C0C5BF]"> Facebook</span>
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center text-lg font-[400]  gap-2"
                >
                  <BsInstagram className="w-[24px] text-[#FCFFFC] h-[24px]" />{" "}
                  <span className="text-[#C0C5BF]"> Instagram</span>
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center text-lg font-[400]  gap-2"
                >
                  <PiLinkedinLogoLight className="w-[24px] text-[#FCFFFC] h-[24px]" />{" "}
                  <span className="text-[#C0C5BF]"> Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#F2F3F2] my-5 text-lg font-[500] leading-8">
                What feature would you love to have?
              </p>
              <div>
                {" "}
                <button className="rounded-2xl py-2 w-[90%] px-4 border-2 text-base font-[500] text-[#818B80] border-[#F2F3F2]">
                  Kindly drop your suggestions
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
