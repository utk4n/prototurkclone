import { LinksType } from "../types/LinksType";
import {
  AiFillHtml5,
  DiLaravel,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
  FaPython,
  GrMysql,
  IoLogoJavascript,
} from "../assets";
export const mainLinks: LinksType[] = [
  {
    title: "Anasayfa",
    url_link: "anasayfa",
  },
  {
    title: "Akış",
    url_link: "akis",
  },
  {
    title: "Keşfet",
    url_link: "kesfet",
  },
  {
    title: "Makaleler",
    url_link: "makaleler",
  },
  {
    title: "Soru & Cevap",
    url_link: "soru-cevap",
  },
  {
    title: "Ders İstekleri",
    url_link: "ders-istekleri",
  },
];

export const lessonsLinks: LinksType[] = [
  {
    title: "HTML",
    url_link: "html",
    img: <AiFillHtml5 size={50} color="#e54d27" />,
    bgColor : "#e54d27",
  },
  {
    title: "CSS",
    url_link: "css",
    img: <FaCss3Alt size={50} color="#e54d27" />,
    bgColor : "#e54d27",
  },
  {
    title: "Javascript",
    url_link: "javascript",
    img: <IoLogoJavascript size={50} color="rgb(247, 223, 30)" />,
    bgColor : "rgb(247, 223, 30)",
  },
  {
    title: "PHP",
    url_link: "php",
    img: <FaPhp size={50} color="rgb(79, 91, 147)" />,
    bgColor : "rgb(79, 91, 147)",

  },
  {
    title: "MySQL",
    url_link: "mysql",
    img: <GrMysql size={50} color="rgb(0, 117, 143)" />,
    bgColor : "rgb(0, 117, 143)",

  },
  {
    title: "Laravel",
    url_link: "laravel",
    img: <DiLaravel size={50} color="#ff2d20" />,
    bgColor : "#ff2d20",

  },
  {
    title: "Python",
    url_link: "python",
    img: <FaPython size={50} color="#3372a5" />,
    bgColor : "#3372a5",

  },
  {
    title: "Git",
    url_link: "git",
    img: <FaGitAlt size={50} color="#f74e28" />,
    bgColor : "#f74e28",

  },
];
