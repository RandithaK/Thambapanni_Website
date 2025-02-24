import Card from './Card'

const Guide = () => {
  return (
    <div>
        <div
          className="card bg-base-300 rounded-box grid place-items-center"
          id="guides"
        >
          <div className="flex flex-col lg:flex-row gap-4 p-4">
            <Card
              title="Guide"
              text="Become a guide"
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              link="https://www.example.com"
            />
            <Card
              title="Guide"
              text="Become a guide"
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              link="https://www.example.com"
            />
          </div>
        </div>
    </div>
  )
}

export default Guide