import image1 from "../assets/doorA.jpg";

export default function ImageCard({ img, id }) {
  return (
    <div className="w-48 h-68 hover:scale-105 transition-transform duration-100 ease-out cursor-pointer">
      <img src={img} alt="filtered images" className="rounded-xl" />
    </div>
  );
}
