import Headtitle from "./components/Headtitle";
import dining_img from "./imgs/dining-img.png";
import living_img from "./imgs/living-img.png";
import bedroom_img from "./imgs/bedroom-img.png";
function Range() {
  const category = [
    { img: dining_img, title: "Dining" },
    { img: living_img, title: "Living" },
    { img: bedroom_img, title: "Bedroom" },
  ];
  return (
    <div className="container ">
      <Headtitle />
      <div className="flex md:flex-row flex-col sm:justify-around justify-center items-center flex-wrap  my-10">
        {category.map((e) => {
          return (
            <div className="text-center">
              <img
                className="object-fill max-w-full"
                src={e.img}
                alt={e.title}
              />
              <p className="mt-4 font-bold">{e.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Range;
