import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Brandmark from "../atom/brandmark";
import Button from "../atom/button";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="hidden md:flex flex-col item w-auto mr-auto">
              <Brandmark />
              <div className="flex flex-col gap-[16px] mt-[33px] w-auto mr-auto">
                <button className="border-2 rounded border-gray-300 text-gray-300 py-[7px] px-[8px]">
                  Become a Professional
                </button>
                <button className="border-2 rounded border-gray-300 text-gray-300 py-[7px] px-[8px]">
                  Post a job
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-5">Homeowners</h5>
            <ul className="text-sm [&_li]:mb-3">
              <li>
                <a href="/post-job">Post a Job</a>
              </li>
              <li>
                <a href="/how-it-works">How it works</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/help-faqs">Help & FAQ&quot;s</a>
              </li>
              <li>
                <a href="/user-agreement">User Agreement</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white font-bold mb-5">Professionals</h5>
            <ul className="text-sm [&_li]:mb-3">
              <li>
                <a href="/sign-up">Sign Up</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/help-faqs">Help & FAQ&quot;s</a>
              </li>
              <li>
                <a href="/user-agreement">User Agreement</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white font-bold mb-5">Loggworks</h5>
            <ul className="text-sm [&_li]:mb-3">
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
              <li>
                <a href="/affiliate">Affiliate</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-white font-bold mb-3">Follow us</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:hidden  flex-col item w-full ">
          <div className="flex flex-col w-full gap-[16px] mt-[33px] mr-auto">
            <Button className="w-full">
              Become a Professional
            </Button>
            <button className="border-2 rounded border-gray-300 text-gray-300 py-[7px] px-[8px]">
              Post a job
            </button>
          </div>
        </div>
       

        <div className="border-t border-gray-700 py-8 mt-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p>©Copyright 2024 loggworks Ltd. All Rights Reserved</p>
          <div className="flex items-center justify-between gap-3 mt-4 md:mt-0 text-center">
            <a
              href="/terms-of-use"
              className="hover:opacity-70 transition-opacity"
            >
              Terms of Use
            </a>
            <div className="h-6   border-l border-gray-600" />
            <a
              href="/privacy-policy"
              className="hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
            <div className="h-6  border-l border-gray-600" />
            <a href="/cookies" className="hover:opacity-70 transition-opacity">
              Cookies
            </a>
            <div className="h-6  border-l border-gray-600" />
            <a href="/sitemap" className="hover:opacity-70 transition-opacity">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
