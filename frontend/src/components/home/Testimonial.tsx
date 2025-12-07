export type TestimonialItemProps = {
  name: string;
  role: string;
  message: string;
  profilePicture: string;
  image: string;
};

const TestimonialItem = (props: TestimonialItemProps) => (
  <li className="bg-white border rounded-xl border(--border-light) p-4 flex flex-col gap-y-4 max-w-[400px] min-w-[300px]">
    <div className="flex items-center gap-x-5">
      <div className="w-12 aspect-square overflow-hidden rounded-full">
        <img
          src={props.profilePicture}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-(--text-light) text-sm font-bold">{props.name}</h1>
        <span className="text-sm text-(--primary)">{props.role}</span>
      </div>
    </div>

    <p className="text-sm text-(--text-light)">
      &quot;{props.message}&quot;
    </p>

    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <img src={props.image} alt="" />
    </div>
  </li>
);

export default function Testimonial() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Kafe",
      message: "MebelKu sangat membantu dalam menciptakan mebel yang unik dan memuaskan. Mereka memiliki berbagai pilihan mebel yang dapat disesuaikan dengan kebutuhan dan anggaran. Saya sangat merekomendasikan mereka!",
      profilePicture: "/assets/images/profile-1.jpg",
      image: "/assets/images/banner-1.jpg",
    },
    {
      name: "Budi Santoso",
      role: "Pemilik Kafe",
      message: "MebelKu sangat membantu dalam menciptakan mebel yang unik dan memuaskan. Mereka memiliki berbagai pilihan mebel yang dapat disesuaikan dengan kebutuhan dan anggaran. Saya sangat merekomendasikan mereka!",
      profilePicture: "/assets/images/profile-1.jpg",
      image: "/assets/images/banner-1.jpg",
    },
    {
      name: "Budi Santoso",
      role: "Pemilik Kafe",
      message: "MebelKu sangat membantu dalam menciptakan mebel yang unik dan memuaskan. Mereka memiliki berbagai pilihan mebel yang dapat disesuaikan dengan kebutuhan dan anggaran. Saya sangat merekomendasikan mereka!",
      profilePicture: "/assets/images/profile-1.jpg",
      image: "/assets/images/banner-1.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h1 className="text-xl font-bold text-(--text-light)">
        Apa Kata Pelanggan Kami?
      </h1>

      <ul className="flex gap-x-4 overflow-auto scroll-smooth scrollbar-none">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            message={testimonial.message}
            profilePicture={testimonial.profilePicture}
            image={testimonial.image}
          />
        ))}
      </ul>
    </div>
  );
}
