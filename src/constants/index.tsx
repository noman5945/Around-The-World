import loginPic from "/public/login_pic.jpg";
import carouselPic1 from "/public/carousel1.jpg";
import carouselPic2 from "/public/carousel2.jpg";
import carouselPic3 from "/public/carousel3.jpg";
import midPic1 from "/public/MidSecPic1.jpg";
import midPic2 from "/public/MidSecPic2.jpg";
import midPic3 from "/public/MidSecPic3.jpg";

export const navBarItems = [
  {
    name: "Places",
    route: "/places",
  },
  {
    name: "Community",
    route: "/community",
  },
  {
    name: "About",
    route: "/about",
  },
];

export const login_img =
  "https://khalkoholiday.com/wp-content/uploads/2024/02/andaman-and-nicobar-islands-trip-scaled.jpg";
export const local_login_page = loginPic;

export const carouselItems = [
  {
    id: 1,
    imgSrc: carouselPic1,
    title: "Explore the World",
    description: "Join us for an unforgettable adventure across the globe.",
  },
  {
    id: 2,
    imgSrc: carouselPic2,
    title: "Capture Memories",
    description: "Don't just travel, create lasting memories.",
  },
  {
    id: 3,
    imgSrc: carouselPic3,
    title: "Discover New Horizons",
    description: "Embrace new cultures and unique experiences.",
  },
];

export const midSectionCardContents = [
  {
    id: 1,
    title: "Explore",
    description: "Explore places, dive into the unknown.",
    imgsrc: midPic1,
  },
  {
    id: 2,
    title: "Share Experience",
    description: "Share your journey,let the wonderers know what lies ahead.",
    imgsrc: midPic2,
  },
  {
    id: 3,
    title: "Get Suggestions",
    description: "Lost? Get advice from fellow travellers",
    imgsrc: midPic3,
  },
];
