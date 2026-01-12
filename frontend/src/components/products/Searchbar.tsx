export default function Searchbar() {
  return (
    <label className="border border-(--border-light) bg-gray-50 min-w-[200px] w-full rounded-2xl flex items-center pl-5 gap-x-2">
      <svg
        className="text-(--text-light)/50"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>

      <input
        type="text"
        placeholder="Cari perabotan minimalis"
        className="pr-5 p-2 placeholder:text-(--text-light)/50 placeholder:text-sm text-sm text-(--text-light)/80 w-full focus:placeholder:text-transparent focus:outline-0"
      />
    </label>
  );
}
