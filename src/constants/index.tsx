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

export const countries = [
  {
    id: 1,
    countryname: "JAPAN",
    imgSrc:
      "https://img.freepik.com/free-vector/illustration-japan-flag_53876-27128.jpg?t=st=1729606529~exp=1729610129~hmac=b195fffc845f91a31c30e433fa6213296b82be4521b07a019a0c1b875c083de3&w=1380",
    bgImg: null,
  },
  {
    id: 2,
    countryname: "SPAIN",
    imgSrc:
      "https://img.freepik.com/free-vector/illustration-spain-flag_53876-18168.jpg?t=st=1729610732~exp=1729614332~hmac=08d10b117193d19667d6f610f7946d68d8abef1962f3f291230ed727aa2d9a9f&w=1380",
    bgImg:
      "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwYWlufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    countryname: "SWEDEN",
    imgSrc:
      "https://img.freepik.com/free-vector/illustration-sweden-flag_53876-27102.jpg?t=st=1729610807~exp=1729614407~hmac=c5610517d82774b649dd20d866be428424b618af9d9fe4350bb6c371d50eda04&w=1380",
    bgImg:
      "https://store-images.s-microsoft.com/image/apps.65017.13920401164131377.c3258e08-bc28-4ee5-a7f5-6892b619757b.447ec9f4-b114-40aa-9294-ddacbe2ecb7d",
  },
  {
    id: 4,
    countryname: "DENMARK",
    imgSrc:
      "https://img.freepik.com/free-vector/illustration-denmark-flag_53876-27104.jpg?t=st=1729610947~exp=1729614547~hmac=7aeb590704b62d86eec68a71337c452b4910f507f2963996d4dc3c864a378009&w=1380",
    bgImg:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVubWFya3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
