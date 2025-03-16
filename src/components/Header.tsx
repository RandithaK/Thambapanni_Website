import React from "react";
import { repositories } from "../siteConfig";
import thambapanniLogo from "../assets/Thambapanni.png";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Features", href: "#" },
  { label: "Tourists", href: "#tourist" },
  { label: "Guides", href: "#guides" },
  {
    label: "Our Codebases",
    children: [
      { label: "FrontEnd", href: repositories.frontend },
      { label: "BackEnd", href: repositories.backend },
      { label: "WebPage", href: repositories.website },
    ],
  },
];

const NavLinks: React.FC<{ items: NavItem[]; className?: string }> = ({
  items,
  className,
}) => (
  <ul className={className}>
    {items.map((item, index) => (
      <li key={index}>
        {item.children ? (
          <details>
            <summary>{item.label}</summary>
            <ul className="p-2 glass rounded-box">
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>
                  <a href={child.href}>{child.label}</a>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <a href={item.href}>{item.label}</a>
        )}
      </li>
    ))}
  </ul>
);

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar glass shadow-sm ">
        <div className="navbar-start">
          
            <a className="btn btn-ghost bg-transparent text-2xl flex items-center gap-2">
            <img
              src={thambapanniLogo}
              alt="Thambapanni Logo"
              className="w-10 h-10"
            />
            Thambapanni
            </a>

          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <NavLinks
              items={navItems}
              className="menu menu-sm dropdown-content glass rounded-box z-1 mt-3 w-52 p-2 shadow"
            />
          </div>
        </div> 
        <div className="navbar-end hidden lg:flex mr-4">
      <NavLinks
        items={navItems}
        className="menu menu-horizontal  px-1 text-lg"
      />
      </div>
      </div>
    </div>
  );
};

export default Header;
