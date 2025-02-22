import React from "react";

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
      { label: "FrontEnd", href: "" },
      { label: "BackEnd", href: "" },
      { label: "WebPage", href: "" },
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
            <ul className="p-2">
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
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            />
          </div>
          <a className="btn btn-ghost text-2xl">Thambapanni</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks
            items={navItems}
            className="menu menu-horizontal px-1 text-lg"
          />
        </div>
        <div className="navbar-end">
          <a className="btn btn-info">Download Now</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
