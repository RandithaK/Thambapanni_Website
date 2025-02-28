import Card from "./Card";

const Tourist = () => {
  return (
    <div>
      <div
        className="card rounded-box grid place-items-center"
        id="tourist"
      >
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <Card
            title="Tourist"
            text="Hello Visitor"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            link="https://www.example.com"
          />
          <Card
            title="Tourist"
            text="Hello Visitor"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            link="https://www.example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Tourist;
