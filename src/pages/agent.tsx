import React, { useState } from "react";
import AgentModal from "../components/AgentModal";
import AddAgent from "../components/AddAgent";
export interface IAgent {
  id: number;
  firstName: string;
  lastname: string;
  Username: string;
  phonenumber: string;
  registernumber: string;
  banckaccount: string;
  birthday: string;
}
const dataTest: IAgent[] = [
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

export default function Agent() {
  const [addModal, setAddModal] = useState(false);
  const [Added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productItem, setProductItem] = useState<IAgent>();
  // const [tableData, setTableData] = useState([])
  const [isEdited, setIsEdited] = useState(false);
  const [editId, setEditId] = useState("");

  const handleAddAgent = ({
    id,
    firstName,
    lastname,
    Username,
    phonenumber,
    registernumber,
    banckaccount,
    birthday,
  }: IAgent) => {
    setAddModal(true);
    setAdded(true);
  };

  const handleEditAgent = ({
    id,
    firstName,
    lastname,
    Username,
    phonenumber,
    registernumber,
    banckaccount,
    birthday,
  }: IAgent) => {
    setShowModal(true);
    setIsEdited(true);
    setProductItem({
      id,
      firstName,
      lastname,
      Username,
      phonenumber,
      registernumber,
      banckaccount,
      birthday,
    });
    setEditId(id);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className="flex flex-row px-3">
      <div className="w-3/4 px- h-screen">
        <div className="flex flex-row">
          <h1 className="w-2/3 text-white my-2">Agent page</h1>
          <div className="w-1/3">
            <button
              className="rounded-full bg-yellow-300 px-3 hover:bg-yellow-500"
              onClick={() => setAddModal(!addModal)}
            >
              +Add
            </button>
            <AddAgent
              handleAddAgent={handleAddAgent}
              showModal={addModal}
              setShowModal={setAddModal}
            />

            <AgentModal
              showModal={showModal}
              setShowModal={setShowModal}
              productItem={productItem}
              setProductItem={setProductItem}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-row ">
            <div className=" w-full ">
              <table className="w-full">
                <thead className="border-b-2">
                  <tr className=" mx-4">
                    <th className="p-2">#</th>
                    <th className="px-4 py-2">Fullname</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Phone number</th>
                    <th className="px-4 py-2">Register ID</th>
                    <th className="px-4 py-2">Bank Acc</th>
                    <th className="px-6 py-2">Birthday</th>
                  </tr>
                </thead>
                <tbody className=" mx-3">
                  {dataTest.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td className="px-4">
                        {item.firstName}
                        {item.lastname}
                      </td>
                      <td className="px-2 py-2">{item.Username}</td>
                      <td className="px-4 py-2">{item.phonenumber}</td>
                      <td className="px-4 py-2">{item.registernumber}</td>
                      <td className="px-4 py-2">{item.banckaccount}</td>
                      <td className="px-6 py-2">{item.birthday}</td>

                      <td className="flex fle-row">
                        <button
                          className="rounded-full bg-blue-300 px-3 hover:bg-blue-500 mx-2 my-2"
                          onClick={() => handleEditAgent(item)}
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
        {/* <AgentModal showModal={showModal} setShowModal={setShowModal} /> */}
      </div>
    </div>
  );
}
