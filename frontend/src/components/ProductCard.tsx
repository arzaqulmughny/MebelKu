export const Star = ({ fillPercent = 0 }) => {
  return (
    <span
      className="w-4 aspect-square inline-block"
      style={{
        background: `linear-gradient(to right, #facc15 ${fillPercent}%, #d1d5db ${fillPercent}%)`,
        WebkitMaskImage: "url(/assets/icons/star-s-fill.svg)",
        maskImage: "url(/assets/icons/star-s-fill.svg)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
};

interface RatingProps {
  value: number;
  total?: number;
}

export function Rating({ value, total = 5 }: RatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: total }).map((_, i) => {
        const starValue = i + 1;
        const diff = value - i;

        // penuh
        if (diff >= 1) return <Star key={i} fillPercent={100} />;

        // sebagian
        if (diff > 0 && diff < 1)
          return <Star key={i} fillPercent={diff * 100} />;

        // kosong
        return <Star key={i} fillPercent={0} />;
      })}
    </div>
  );
}

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  originalPrice?: string;
  discount?: number;
  discountExpired?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  originalPrice,
  discount,
  discountExpired,
}: ProductCardProps) {
  return (
    <>
      <div className="bg-white border border(--border-light) rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="w-full h-40 overflow-hidden">
          {discount && (
            <div className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded m-2">
              -{discount}%
            </div>
          )}

          <img
            className="w-full h-full object-contain"
            src={image}
            alt={name}
          />
        </div>

        <div className="px-4 py-2 flex flex-col gap-y-1">
          <h1 className="text-sm text-(--text-light) h-11">{name}</h1>

          {discount && discount > 0 && (
            <p className="text-xs font-bold text-(--text-light)/40 line-through">
              {originalPrice}
            </p>
          )}

          <p className="text-sm font-bold text-(--text-light)">{price}</p>

          {discountExpired && discountExpired !== "" && (
            <div className="text-xs text-red-500 flex items-center gap-x-2">
              <div className="w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681ZM11 8V14H13V8H11ZM8 1H16V3H8V1Z"></path>
                </svg>
              </div>
              Berakhir dalam 12:34:10
            </div>
          )}

          <div className="flex items-center gap-x-1">
            <Rating value={rating} />
            <span className="text-xs font-bold text-(--text-light)">
              {rating}
            </span>
          </div>

          <span className="text-xs text-(--text-light)">12x terjual</span>
        </div>
      </div>
    </>
  );
}
