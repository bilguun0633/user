import React, { useState } from "react";
import LancerModal from "@/components/LancerModal";

export interface ILancer {
  id: number;
  firstName: string;
  lastname: string;
  Username: string;
  phonenumber: string;
  registernumber: string;
  banckaccount: string;
  birthday: string;
}

const dataLancer: ILancer[] = [
  {
    id: 1,
    firstName: "bat",
    lastname: "bold",
    Username: "bat1234",
    phonenumber: "99119911",
    registernumber: "mx12345678",
    banckaccount: "12345678910",
    birthday: "2023-4-24",
  },
  {
    id: 2,
    firstName: "dorj",
    lastname: "tulga",
    Username: "dorj12",
    phonenumber: "88118811",
    registernumber: "bg12345678",
    banckaccount: "23456789101",
    birthday: "2023-4-23",
  },
  {
    id: 3,
    firstName: "calvin",
    lastname: "jhon",
    Username: "calvin",
    phonenumber: "88998899",
    registernumber: "cl12345678",
    banckaccount: "34567891012",
    birthday: "2023-4-22",
  },
];

export default function freelancer() {
  const [LancerModala, setLancerModala] = useState(false);
  const [Productindex, setProductindex] = useState<ILancer>();
  const [ShowItem, setShowItem] = useState(false);
  const [HeroItem, setHeroItem] = useState(false);

  const handleEditLancer = ({
    id,
    firstName,
    lastname,
    Username,
    phonenumber,
    registernumber,
    banckaccount,
    birthday,
  }: ILancer) => {
    setHeroItem(true);
    setShowItem(true);
    setProductindex({
      id,
      firstName,
      lastname,
      Username,
      phonenumber,
      registernumber,
      banckaccount,
      birthday,
    });
  };

  return (
    <div className="flex flex-row">
      <div className="w-3/4 px-2 h-screen">
        <div className="flex flex-row">
          <h1 className="w-2/3 text-white my-2">Freelancer page</h1>
          <div className="w-1/3">
            <button
              className="rounded-full bg-yellow-300 px-4 my-1 mx-4 hover:bg-yellow-500"
              onClick={handleClick}
            >
              +Add
            </button>
            <LancerModal
              LancerModala={setLancerModala}
              ProductIndex={setProductindex}
              ShowItem={setShowItem}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="w-full">
              <table className="w-full">
                <thead className="border-b-2">
                  <tr className="mx-4">
                    <th className="p-2">#</th>
                    <th className="px-4 py-2">Fullname</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Phone number</th>
                    <th className="px-4 py-2">Register ID</th>
                    <th className="px-4 py-2">Bank Acc</th>
                    <th className="px-4 py-2">Birthday</th>
                  </tr>
                </thead>
                <tbody className="mx-3">
                  {dataLancer.map((e, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td className="px-4">
                        {e.firstName}
                        {e.lastname}
                      </td>
                      <td className="px-2 py-2">{e.Username}</td>
                      <td className="px-4 py-2">{e.phonenumber}</td>
                      <td className="px-4 py-2">{e.registernumber}</td>
                      <td className="px-4 py-2">{e.banckaccount}</td>
                      <td className="px-6 py-2">{e.birthday}</td>

                      <td className="flex flex-row">
                        <button
                          className="rounded-full bg-blue-300 px-3 hover:bg-blue-500 mx-2 my-2"
                          onClick={() => handleEditLancer(e)}
                        >
                          Edit
                        </button>
                        <button className="rounded-full bg-red-500 px-3 hover:bg-red-800 mx-2 my-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <LancerModal
          LancerModala={LancerModala}
          setLancerModala={setLancerModala}
        />
      </div>
    </div>
  );
}
