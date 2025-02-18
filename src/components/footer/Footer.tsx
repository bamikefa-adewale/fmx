import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import FooterList from "./FooterList";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="bg-[#05376A] text-white py-10">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href={"/"}>
              <Image
                src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1739277448/Group_1961_vlalhk.png"
                alt="logo"
                width={50}
                height={80}
                className="h-[36px] w-[81.28px] cursor-pointer"
              />
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Fresh Market Exchange (FMX) Online Ordering Platform is your
              premier destination for wholesale fresh produce in Japan. We’re
              committed to your wholesale trading success and providing the best
              online shopping experience.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Company</h3>
            <FooterList>
              <Link href="/">About</Link>
              <Link href="/">Partnership</Link>
              <Link href="/">Contact us</Link>
            </FooterList>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Help & Support
            </h3>
            <FooterList>
              <Link href="/">FAQs</Link>
              <Link href="/">Talk to Support</Link>
              <Link href="/">Live Chat</Link>
              <Link href="/">Language</Link>
            </FooterList>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Account</h3>
            <FooterList>
              <Link href="/">Profile</Link>
              <Link href="/">Order</Link>
              <Link href="/">Cart</Link>
              <Link href="/">Log Out</Link>
            </FooterList>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 space-y-6 md:space-y-0">
          {/* Social Media Links */}
          <div>
            <p className="mb-2">Follow us on social media</p>
            <div className="flex space-x-5">
              <Link href="/" className="flex items-center gap-2">
                <ImFacebook2 className="w-5 h-5 text-white" />
                <span>Facebook</span>
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <BsInstagram className="w-5 h-5 text-white" />
                <span>Instagram</span>
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <PiLinkedinLogoLight className="w-5 h-5 text-white" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Feedback Button */}
          <div className="text-center md:text-right">
            <p className="mb-3 font-medium">
              What feature would you love to have?
            </p>
            <button className="rounded-lg px-5 py-2 border border-white text-white hover:bg-white hover:text-[#05376A] transition">
              Kindly drop your suggestions
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
