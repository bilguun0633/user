import React, { useState } from "react";
import Tempmodal from "../components/Tempmodal";

export default function templates() {
  const [NewTemplates, setNewTemplates] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    setNewTemplates(true);
  };

  const temp = [
    {
      id: 1,
      thumbImage:
        "https://res.cloudinary.com/dnedspqvv/image/upload/v1676197565/online-shop-images/xonojngp4xakoblopnhs.png",
      sales: "15$",
      price: "20$",
      discount: "12",
      isliked: "23",
      description: "easy web figma",
      posteddate: "",
      updatedate: "",
      categoryId: 2,
      tempName: "free figma",
      categoryName: "",
    },
  ];

  return (
    <div>
      <div className="flex flex-row px-3">
        <div className="w-3/4 px- h-screen">
          <div className="flex flex-row">
            <h1 className="w-2/3 text-white my-2">templates page</h1>
            <div className="w-1/3">
              <button
                className="rounded-full bg-yellow-300 px-3 hover:bg-yellow-500"
                onClick={handleClick}
              >
                +Add
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row ">
              <div className=" w-full ">
                {temp.slice(0, 10).map((e, index) => (
                  <div className="" key={index}>
                    <img
                      src={e.thumbImage}
                      alt=""
                      style={{ height: "360px", width: "394px" }}
                    />
                    <p
                      className="fw-bold mt-4 mb-2"
                      style={{ color: "#AFADB5" }}
                    >
                      {categories?.map(({ id, categoryName }) => {
                        if (id === e.categoryId) {
                          return <span>{categoryName}</span>;
                        }
                      })}
                    </p>
                    <a
                      href={`/product/card/${e.id}`}
                      className="productDetail-a"
                    >
                      {e.tempName}
                    </a>
                    <p style={{ color: "#AFADB5" }} className="mt-2">
                      {e.description}
                    </p>
                    <p style={{ color: "#AFADB5" }} className="mt-2">
                      {e.sales}sales
                    </p>
                    {/* <p className="fw-bold">${e.price}</p> */}

                    <p className="fw-bold">${e.price}</p>

                    <button className="rounded-full bg-blue-300 px-3 hover:bg-blue-500 mx-2 my-2">
                      Edit
                    </button>
                    <button className="rounded-full bg-red-500 px-3 hover:bg-red-800 mx-2 my-2">
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Tempmodal
            NewTemplates={NewTemplates}
            setNewTemplates={setNewTemplates}
          />
        </div>
      </div>
    </div>
  );
}
