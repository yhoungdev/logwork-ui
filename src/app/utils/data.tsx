import PaymentIcon from "../_components/atom/about/paymentIcon";
import PrivacyIcon from "../_components/atom/about/privacyIcon";
import TrustedIcon from "../_components/atom/about/trustedIcon";

export const ServiceCategories = {
  tradesMen: [
    {
      imgSrc: "construction.svg",
      title: "Construction",
    },
    {
      imgSrc: "gardening.svg",
      title: "Gardening & landscaping",
    },
    {
      imgSrc: "painters.svg",
      title: "Painters",
    },
    {
      imgSrc: "electricians.svg",
      title: "Electricians",
    },
  ],
  cleaning: [
    {
      imgSrc: "domestic.svg",
      title: "Domestic Cleaners",
    },
    {
      imgSrc: "window.svg",
      title: "Window Cleaners",
    },
    {
      imgSrc: "prperty.svg",
      title: "Property Maintenance",
    },
    {
      imgSrc: "drain.svg",
      title: "Drain and Pipe Cleaning",
    },
  ],
};

export const BlogPosts = [
  {
    imgSrc: "/assets/blogPosts/post-1.svg",
    title: "5 Tips for Finding the Right Home Service Professionals.",
  },
  {
    imgSrc: "/assets/blogPosts/post-2.svg",
    title: "7 tips for running a successful cleaning service company.",
  },
  {
    imgSrc: "/assets/blogPosts/post-3.svg",
    title: "How to know the best child care worker for your kids.",
  },
];

export const Cities = [
  "London",
  "Manchester",
  "Birmingham",
  "Glasgow",
  "Newcastle",
  "Liverpool",
  "Bristol",
  "Sheffield",
  "Belfast",
  "Edinburgh",
  "Nottingham",
  "Cardiff",
  "Leicester",
  "Aberdeen",
  "Coventry",
  "Southampton",
  "Norwich",
  "Swansea",
  "Northampton",
  "Peterborough",
  "Reading",
  "Doncaster",
  "Hull",
  "Bradford, West Yorkshire",
  "York",
  "Bolton, Lancashire",
  "Derby",
  "Oxford",
  "Exeter",
  "Leeds, West Yorkshire",
];

export const PopularServicesData = [
  { imgSrc: "electrician.svg", title: "Electrician" },
  { imgSrc: "plumber.svg", title: "Plumber" },
  { imgSrc: "plasterers.svg", title: "Plasters" },
  { imgSrc: "cleaner.svg", title: "Cleaners" },
  { imgSrc: "handyman.svg", title: "Handyman" },
  { imgSrc: "tiler.svg", title: "Tiler" },
];

export const aboutData = [
  {
    title: "Privacy Protection",
    description:
      "You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.",
    icon: <PrivacyIcon />,
  },
  {
    title: "Payment Protection",
    description:
      "All your payments are protected by a highly secure Escrow account. Pay in advance or on completion with just a few clicks of a button, whenever you want.",
    icon: <PaymentIcon />,
  },
  {
    title: "Trusted Professionals",
    description:
      "We use the Self-Employed Quality Control Scheme (SEQCS) to comprehensively screen all home service professionals on Loggworks — for your peace of mind.",
    icon: <TrustedIcon />,
  },
];
