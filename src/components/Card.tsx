import React from "react";

interface CardProps {
  title: string;
  text: string;
  image: string;
  link?: string; // optional hyperlink
}

const Card: React.FC<CardProps> = ({ title, text, image, link }) => {
  return (
    <div>
      <div className="card bg-base-100 image-full w-full shadow-sm">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-lg">{text}</p>
          <div className="card-actions justify-end">
            {link && (
              <a href={link}>
                <button className="btn btn-primary">Learn More</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
