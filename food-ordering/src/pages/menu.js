import React, { useState, useEffect } from "react"
import { Navbar, FoodCard, Footer } from "../components"
import { foodMenu } from "../constants"

const Menu = () => {
  const [nextItems, setNextItems] = useState(6)
  const [menu, setMenu] = useState(foodMenu)
  const [selectTab, setSelectTab] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3)
  }

  const showModalHandler = (id) => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === "all") {
      setMenu(foodMenu)
    }

    if (selectTab === "foods") {
      const filteredFoods = foodMenu.filter(
        (item) => item.category === "foods"
      )
      setMenu(filteredFoods)
    }

    if (selectTab === "beverages") {
      const filteredFoods = foodMenu.filter(
        (item) => item.category === "beverages"
      )
      setMenu(filteredFoods)
    }
  }, [selectTab])

  return (
    <section className="bg-blackish w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="w-full h-full bg-blackish px-[100px] m-auto pt-[50px]">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="font-raleway text-secondary font-bold text-[52px] mb-6 md:mb-12">
              Our Delicious Foods
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-whiteish border border-solid border-secondary py-2 px-4 rounded-md feedback-card font-raleway"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("foods")}
              className="text-whiteish border border-solid border-secondary py-2 px-4 rounded-md feedback-card font-raleway"
            >
              Foods
            </button>
            <button
              onClick={() => setSelectTab("beverages")}
              className="text-whiteish border border-solid border-secondary py-2 px-4 rounded-md feedback-card font-raleway"
            >
              Beverages
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {menu.slice(0, nextItems).map((food, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img src={food.img} alt="" className="rounded-2xl" />
              </figure>

              <div className="w-full h-full bg-darkish bg-opacity-70 absolute top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(food.id)}
                    className="font-raleway uppercase sm:flex hidden bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 flex justify-center items-center">
          {nextItems < menu.length && foodMenu.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="font-raleway uppercase sm:flex hidden bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <FoodCard setShowModal={setShowModal} activeID={activeID} />
      )}

      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default Menu;
