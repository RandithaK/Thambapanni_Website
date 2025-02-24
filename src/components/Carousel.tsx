import React from "react";

interface CarouselItem {
  id: string;
  imageUrl: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: "item1",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  },
  {
    id: "item2",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
  {
    id: "item3",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  },
  {
    id: "item4",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];

const Carousel: React.FC = () => {
  return (
    <div>
      <div className="carousel w-full">
        {carouselItems.map((item) => (
          <div key={item.id} id={item.id} className="carousel-item w-full">
            <img src={item.imageUrl} className="w-full" alt="carousel item" />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {carouselItems.map((item, index) => (
          <a key={item.id} href={`#${item.id}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
