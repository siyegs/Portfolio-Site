import shopCo from "../assets/shopCo.webp";
import asl from "../assets/asl.webp";
import kdc from "../assets/kdc.webp";
import amazite from "../assets/amazite.webp";
import chatApp from "../assets/c0587e90-36c2-4f4b-8bf0-510558217e38.png"

const projectsData = [
  {
    title: "Kids Design Company",
    slug: "kids-design-company",
    url: "https://kidsdesigncompany.com/",
    category: "Web Dev",
    tags: ["E-commerce"],
    color: "bg-red-300",

    image: kdc,
    ongoing: false,
    description: `A responsive e-commerce web application for children's furniture and kids' essentials. It features secure authentication using JWT and Google OAuth, dynamic product listings from a RESTful API, and full e-commerce functionality including a shopping cart and wishlist. Online payments are processed through Flutterwave and Paystack, offering secure and flexible checkout options. 
    An admin dashboard allows authorized users to add, update, and delete products, managing the store's inventory directly from the platform. The complete application, including the admin panel, is available for demonstration upon request.`,
    tools: ["React", "Tailwind CSS", "TypeScript"],
    underMaintenance: false,
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
    underMaintenance: false,
  },
  {
    title: "ISK Chat",
    slug: "isk-chat-room",
    url: "https://isk-chat-room.web.app",
    category: "Web Dev",
    tags: ["Chat App"],
    color: "bg-purple-400",

    image: chatApp,
    ongoing: false,
    description: `A modern, real-time chat application built with React, Tailwind CSS, and powered by a serverless Firebase backend. Features secure, persistent user authentication, real-time messaging, and a sophisticated, permission-based chat access system with requests, accept/revoke, and grant-back capabilities. The application includes multimedia support and real-time notifications. Leveraging Firestore for live data synchronization, the fully responsive interface provides a seamless and intuitive user experience across all devices.`,
    tools: ["React", "Tailwind CSS", "Firebase"],
    underMaintenance: false,
  },
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
    underMaintenance: true,
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
    description:
    "A responsive web application for students seeking educational programs and guidance. Developed with React.js and styled with Tailwind CSS, the platform features dynamic course listings, an intuitive navigation flow, and mobile-friendly design to improve user engagement.",
    tools: ["React", "Tailwind CSS"],
    underMaintenance: false,
  },
];

export default projectsData;
