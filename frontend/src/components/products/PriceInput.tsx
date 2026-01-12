export default function PriceInput() {
  return (
    <>
      <label className="border border-gray-300 rounded-md flex items-center gap-x-2 px-2">
        <p className="text-gray-500 text-sm">Rp. </p>
        <input
          className="focus:outline-0 text-(--text-light) py-2 inline-block w-fit placeholder:text-xs text-sm"
          placeholder="Min"
          size={10}
        />
      </label>
    </>
  );
}
