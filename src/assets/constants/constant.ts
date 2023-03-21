import blogOne from "../../assets/images/blogOne.png";
import blogTwo from "../../assets/images/blogTwo.png";
import blogThree from "../../assets/images/blogThree.png";
import blogFour from "../../assets/images/blogFour.png";

import business from "../../assets/images/business.svg";
import startUp from "../../assets/images/startup.svg";
import economy from "../../assets/images/economy.svg";
import technology from "../../assets/images/technology.svg";

import authorOne from "../../assets/images/authorOne.png";
import authorTwo from "../../assets/images/authorTwo.png";
import authorThree from "../../assets/images/authorThree.png";
import authorFour from "../../assets/images/authorFour.png";

export const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const blogsPrimary = [
  {
    id: 1,
    image: blogOne,
    heading: "8 Figma design systems that you can download for free today.",
    name: "Jhon Doe",
    date: "May 29, 2022",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 2,
    image: blogTwo,
    heading: "5 Figma design systems that you can download for free today.",
    name: "Jhon Doe",
    date: "May 29, 2022",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 4,
    image: blogThree,
    heading: "7 Figma design systems that you can download for free today.",
    name: "Jhon Alpha",
    date: "April 22, 2022",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    image: blogFour,
    heading: "2 Figma design systems that you can download for free today.",
    name: "Jhon Doe",
    date: "Dec 19, 2021",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export const businessCard = [
  {
    id: 1,
    image: business,
    title: "Business",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    image: startUp,
    title: "Start Up",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 3,
    image: economy,
    title: "Economy",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 4,
    image: technology,
    title: "Technology",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

export const authors = [
  {
    id: 1,
    image: authorOne,
    name: "Floyed Miles",
    post: "Grapic Designer",
    company: "Microsoft",
  },
  {
    id: 2,
    image: authorTwo,
    name: "Dianee Russell",
    post: "Content Writer",
    company: "Theme Forest",
  },
  {
    id: 3,
    image: authorThree,
    name: "Jennie Willson",
    post: "UI Designer",
    company: "Google",
  },
  {
    id: 4,
    image: authorFour,
    name: "Leslie Alexender",
    post: "Content Writer",
    company: "Microsoft",
  },
];

export const blogPosts = [
  {
    id: 1,
    user: authorOne,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Floyed Miles",
    zone: "Newyork, USA",
  },
  {
    id: 2,
    user: authorTwo,
    title:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Dianee Russell",
    zone: "California, USA",
  },
  {
    id: 3,
    user: authorThree,
    title:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jennie Willson",
    zone: "Melborne, Australia",
  },
  {
    id: 4,
    user: authorFour,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Emily Orange",
    zone: "Mishigan, USA",
  },
];
