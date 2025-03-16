import { developers, repositories, appLinks } from "../siteConfig";
import applogo from "../assets/Thambapanni.png";

// Reusable footer link component with hover effect
const FooterLink = ({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) => (
  <div className="relative group overflow-hidden rounded">
    <a
      href={href}
      className="link link-hover relative z-10 px-3 py-1 block"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent to-transparent group-hover:animate-shine"></div>
    </div>
  </div>
);

// Reusable footer section component
const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ name: string; url?: string }>;
}) => (
  <nav>
    <h6 className="footer-title">{title}</h6>
    <div className="flex flex-col space-y-2">
      {links.map((link, index) => (
        <FooterLink
          key={index}
          href={link.url || "#"}
          label={link.name}
          external={!!link.url}
        />
      ))}
    </div>
  </nav>
);

const Footer = () => {
  // Organize all footer sections data
  const sections = [
    {
      title: "About Us - Let's connect",
      links: developers.map((dev) => ({ name: dev.name, url: dev.linkedIn })),
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"].map(
        (item) => ({ name: item }),
      ),
    },
    {
      title: "Repositories",
      links: [
        { name: "App", url: repositories.frontend },
        { name: "Server", url: repositories.backend },
        { name: "Web", url: repositories.website },
      ],
    },
    {
      title: "Explore",
      links: ["Features", "Enterprise", "Security", "Pricing"].map((item) => ({
        name: item,
      })),
    },
    {
      title: "Apps",
      links: [
        { name: "Android", url: appLinks.android },
        { name: "iPhone", url: appLinks.ios },
      ],
    },
  ];

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
      <nav>
        <aside>
         <img src={applogo} alt="Thambapanni Logo" className="h-16 md:h-20 mx-auto md:mx-0" />
          <h6 className="footer-title">Thambapanni</h6>
        
          <p className="text-sm font-bold text-gray-400">
            The 21st century app for tourists and guides
          </p>
        </aside>
      </nav>

      {sections.map((section, index) => (
        <FooterSection
          key={index}
          title={section.title}
          links={section.links}
        />
      ))}
    </footer>
  );
};

export default Footer;
