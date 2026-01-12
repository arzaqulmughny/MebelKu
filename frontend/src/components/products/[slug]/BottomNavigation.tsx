"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    url: "/",
    label: "Beranda",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    url: "/wishlist",
    label: "Wishlist",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
      </svg>
    ),
  },
  {
    url: "/orders",
    label: "Pesanan",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    url: "/profile",
    label: "Akun",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];

const Navigation = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex flex-col gap-y-1.5 items-center [&>svg]:w-6 ${
        isActive ? "[&>svg]:text-(--primary)" : "[&>svg]:text-gray-400"
      }`}
    >
      {icon}
      <p className={`text-xs ${isActive ? "text-(--primary) font-bold" : "text-gray-400"}`}>{label}</p>
    </div>
  );
};

export default function BottomNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-white w-full py-3 fixed bottom-0 left-0 border-t border-(--border-light) flex items-center justify-evenly lg:hidden">
      {links.map((link, index) => (
        <Link href="/" key={index}>
          <Navigation
            icon={link.icon}
            isActive={pathname.startsWith(link.url)}
            label={link.label}
          />
        </Link>
      ))}
    </div>
  );
}
