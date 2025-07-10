import shopCo from "../assets/shopCo.webp";
import asl from "../assets/asl.webp";
import kdc from "../assets/kdc.webp";
import amazite from "../assets/amazite.webp";

const projectsData = [
  {
    title: "Shop Co",
    slug: "shop-co",
    url: "https://shop.fluxdevs.com/",
    category: "Web Dev",
    tags: ["E-commerce"],
    color: "bg-[#aab2d1]",
    image: shopCo,
    ongoing: false,
    description:
      "A modern e-commerce platform built with React and Tailwind CSS. Features secure JWT and Google OAuth authentication, dynamic product listings, shopping cart, wishlist, and online payment through Flutterwave and Paystack. REST API integration and responsive UI provide a seamless user experience.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "ASL Originals",
    slug: "asl-originals",
    url: "https://asluxuryoriginals.com/",
    category: "Web Dev",
    tags: ["E-commerce"],
    color: "bg-pink-300",
    image: asl,
    ongoing: false,
    description:
      "A fully responsive e-commerce application engineered with React and Tailwind CSS, featuring secure JWT-based authentication, dynamic product data consumption from a RESTful API, and robust state management for cart and wishlist functionalities. Implements efficient API communication, protected routes, and modular component architecture to ensure scalability and maintainability across different devices.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Amazite Academy",
    slug: "amazite-academy",
    url: "https://amaziteacademy.com/",
    category: "Web Dev",
    tags: ["Education"],
    color: "bg-blue-400",
    image: amazite,
    ongoing: true,
    description: "An education agency's website for students interested in learning.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Kids Design Company",
    slug: "kids-design-company",
    url: "https://kidsdesigncompany.com/",
    category: "Web Dev",
    tags: ["E-commerce"],
    color: "bg-purple-400",
    image: kdc,
    ongoing: false,
    description: "Creative and educational toys for kids.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default projectsData;
