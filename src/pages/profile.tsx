import React, { useState } from "react";
import axios from "axios";

export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: Date;
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    zip: number;
  };
  password: string;
  registerNumber: string;
  bankAcc: number;
  image: string;
  role: string;
  rating: number;
  phoneNumber: number;
  introduction: string;
  favoriteProduct: string[];
  totalSpent: number;
}

export default function Profile() {
  const [tabData, setTabData] = useState<Array<IProfile>>([]);

  const profileInit: IProfile = {
    firstName: "",
    lastname: "",
    email: "",
    gender: "",
    birthday: 1,
    address: {
      country: "",
      city: "",
      state: "",
      street: "",
      zip: 1,
    },
    password: "",
    registerNumber: "",
    bankAcc: 1,
    image: "",
    role: "",
    rating: 1,
    phoneNumber: 1,
    introduction: "",
    favoriteProduct: [""],
    totalSpent: 1,
  };

  const getData = () => {
    axios
      .get("http://localhost:9000/api/agent/6449813692331cc95dc22ccc")
      .then((res) => {
        console.log(res.data.result);
        setTabData(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  const [showmodal, setShowmodal] = useState<boolean>(false);
  return (
    <div>
      {tabData.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between my-6 items-center">
              <img
                src="https://cdn.pixabay.com/photo/2021/01/24/18/27/woman-5946053_960_720.jpg"
                alt=""
              />
              {/* firstName: "",
              lastname: "",
              email: "",
              gender: "",
              birthday: "",
              address: {
                country: "",
                city: "",
                state: "",
                street: "",
                zip: "",
              },
              password: "",
              registerNumber: "",
              bankAcc: 1,
              image: "",
              role: "",
              rating: 1,
              phoneNumber: 1,
              introduction: "",
              favoriteProduct: [""],
              totalSpent: 1, */}
              <div className="flex basis-5/6">
                <div className="basis-1/4">
                  <p className="italic font-bold">
                    firstname
                    <span className="non-italic font-normal">
                      {item.firstName}
                    </span>
                  </p>
                  <p className="italic font-bold">
                    lastname
                    <span className="non-italic font-normal">
                      {item.lastName}
                    </span>
                  </p>
                  <p className="italic font-bold">
                    email
                    <span className="non-italic font-normal">{item.email}</span>
                  </p>
                  <p className="italic font-bold">
                    gender
                    <span className="non-italic font-normal">
                      {item.gender}
                    </span>
                  </p>
                  <p className="italic font-bold">
                    Birthday
                    <span className="non-italic font-normal">
                      {item.birthday}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-2 my-2 "
                  onclick={() => {
                    setShowmodal(!showmodal);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
