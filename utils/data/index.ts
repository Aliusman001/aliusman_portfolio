import { NavItem } from "../types";

export const navbarItems = [[
    { title: "Home", path: "/" },
    { title: "Services", path: "/#services" },
    { title: "About", path: "/#about" },
], [
    { title: "Project", path: "/#project" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact-us" },
]]

export const footerLinks = [
    [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/#about" },
        { title: "Services", path: "/#services" },
        { title: "Blogs", path: "/blogs" },
        { title: "Project", path: "/#project" },
        { title: "Contact", path: "/contact-us" }
    ],
    [
        { title: "+92302 4780522", path: "tel:03024780522" },
        { title: "au08854@gmail.com", path: "mailto:au08854@gmail.com" }
    ]
] as NavItem[][]


