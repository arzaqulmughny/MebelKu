import Link from "next/link";

const links = [
  {
    name: "Semua Produk",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Tentang Kami",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b border-(--border-color) px-2.5 py-4 sticky top-0 bg-white z-10 w-full">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
        <h1 className="text-(--text-light) font-bold text-md">MebelKu</h1>

        <ul className="items-center gap-x-12 hidden md:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-(--text-light) text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button type="button" className="text-(--text-light)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </button>

          <button type="button" className="text-(--text-light)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5"
            >
              <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
