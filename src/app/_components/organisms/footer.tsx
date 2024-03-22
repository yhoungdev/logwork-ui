"use client";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Brandmark from "../atom/brandmark";
import Button from "../atom/button";
import Container from "../template/container";

const Footer = () => {
  const footerSections = {
    Homeowners: [
      { href: "/post-job", text: "Post a Job" },
      { href: "/how-it-works", text: "How it works" },
      { href: "/contact-us", text: "Contact Us" },
      { href: "/help-faqs", text: "Help & FAQ's" },
      { href: "/user-agreement", text: "User Agreement" },
    ],
    Professionals: [
      { href: "/sign-up", text: "Sign Up" },
      { href: "/blog", text: "Blog" },
      { href: "/contact-us", text: "Contact Us" },
      { href: "/help-faqs", text: "Help & FAQ's" },
      { href: "/user-agreement", text: "User Agreement" },
    ],
    Loggworks: [
      { href: "/about-us", text: "About us" },
      { href: "/careers", text: "Careers" },
      { href: "/partners", text: "Partners" },
      { href: "/affiliate", text: "Affiliate" },
    ],
  };

  const socialMediaLinks = [
    { href: "https://facebook.com", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-gray-300 md:py-[4em]">
      <Container>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 ">
          <div className="flex justify-between md:flex-row flex-wrap">
            <div className="flex flex-col gap-[3em] md:flex-row md:justify-between w-full">
              <div className="mb-8 hidden md:block">
                <Brandmark />
                <div className="mt-8 flex  flex-col w-[250px]">
                  <Button className="mb-4 w-full">Become a Professional</Button>
                  <Button className="border border-red-white bg-black text-white">
                    Post a job
                  </Button>
                </div>
              </div>
              <div className="md:w-[90%] w-full flex-col  md:flex md:justify-end">
                <div className=" flex justify-between flex-wrap gap-[2.5em] flex-col md:flex-row">
                  {Object.entries(footerSections).map(
                    ([sectionName, links]) => (
                      <div key={sectionName} className="">
                        <h5 className="text-white font-bold mb-5">
                          {sectionName}
                        </h5>
                        <ul className="text-sm space-y-2">
                          {links.map((link) => (
                            <li key={link.href}>
                              <a href={link.href} className="hover:underline">
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                  <div className="col-span-1">
                    <h5 className="text-white font-bold mb-3">Follow us</h5>
                    <ul className="flex  gap-3 flex-col ml-0">
                      {socialMediaLinks.map((social) => (
                        <li key={social.label} className="ml-0">
                          <a
                            href={social.href}
                            className="hover:text-gray-500  gap-1"
                            aria-label={social.label}
                          >
                            <div className="flex gap-1">
                              <div>{social.icon}</div>
                              <small>{social.label}</small>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className=" my-[3em] w-full block md:hidden">
              <div className="flex  flex-col">
                <Button className="mb-4">Become a Professional</Button>
                <Button className="border border-red-white bg-black text-[#FAFAFA">
                  Post a job
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t text-center md:text-left mt-[2em] md:mt-[8em] border-gray-700 py-8  flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>
              Copyright © 2005 - {new Date().getFullYear()} {""}loggworks Ltd.
              All Rights Reserved
            </p>
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
              <a
                href="/cookies"
                className="hover:opacity-70 transition-opacity"
              >
                Cookies
              </a>
              <div className="h-6  border-l border-gray-600" />
              <a
                href="/sitemap"
                className="hover:opacity-70 transition-opacity"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
