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
    description: "A responsive web application for students seeking educational programs and guidance. Developed with React.js and styled with Tailwind CSS, the platform features dynamic course listings, an intuitive navigation flow, and mobile-friendly design to improve user engagement.",
    tools: ["React", "Tailwind CSS"],
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
    description: `This project is a responsive e-commerce web application for children's furniture and kids' essentials. It features secure authentication using JWT and Google OAuth, dynamic product listings from a RESTful API, and full e-commerce functionality including a shopping cart and wishlist. Online payments are processed through Flutterwave and Paystack, offering secure and flexible checkout options. 
    An admin dashboard allows authorized users to add, update, and delete products, managing the store's inventory directly from the platform. The complete application, including the admin panel, is available for demonstration upon request.`,
    tools: ["React", "Tailwind CSS", "TypeScript"],
  },
];

export default projectsData;
