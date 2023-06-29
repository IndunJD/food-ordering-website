import { dishes } from "../constants";

const Popular = () => {

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2"
        >
          {/* Replace with your left arrow icon */}
          &lt;
        </button>
        <div
          className="bg-cover bg-center rounded-lg overflow-hidden max-h-[200px]"
        >
          <div className="p-4">
            <h3 className="text-white text-lg font-bold mb-2">
              Food Name
            </h3>
            <p className="text-white">Food Price</p>
          </div>
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2"
        >
          {/* Replace with your right arrow icon */}
          &gt;
        </button>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  )
}

export default Popular