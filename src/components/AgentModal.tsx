import { IAgent } from "@/pages/agent";
import Image from "next/image";

interface AgentModelProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  productItem: IAgent;
  setProductItem: React.Dispatch<React.SetStateAction<IAgent>>;
}

export default function AgentModal({
  showModal,
  setShowModal,
  productItem,
  setProductItem,
}: AgentModelProps): JSX.Element {
  const handleCloseModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto w-3/4">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="flex flex-row">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Agent
                    </h3>
                  </div>

                  <div>
                    <div>
                      <label className="form-label">Username</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.Username}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            Username: item.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="m-3">
                      <label className="form-label">Firstname</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.firstName}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            firstName: item.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label">Lastname</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.lastname}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            lastname: item.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label">PhoneNumber</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.phonenumber}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            phonenumber: item.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label">Banckaccount</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.banckaccount}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            banckaccount: item.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="form-label">Birthday</label>
                      <input
                        className="form-control"
                        type="text"
                        value={productItem.birthday}
                        onChange={(item) =>
                          setProductItem((prevState) => ({
                            ...prevState,
                            birthday: item.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="rounded-full bg-blue-300 px-4 my-1 mx-4 hover:bg-blue-500"
                    onClick={() => {
                      const ress = confirm(
                        "are you sure to save this information?"
                      );
                      if (ress) {
                        setShowModal(false);
                      }
                    }}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import { IAgent } from "@/pages/agent";
// import Image from "next/image";

// interface AgentModelProps {
//   showModal: boolean;
//   setShowModal: any;
//   productItem: IAgent;
//   setProductItem: string;
// }

// export default function AgentModal({
//   showModal,
//   setShowModal,
//   productItem,
//   setProductItem,
// }: AgentModelProps) {
//   const handleCloseModal = () => {
//     setShowModal(!showModal);
//   };
//   const handleClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <div>
//         {/* {showModal && ( */}
//         <div className="fixed z-10 inset-0 overflow-y-auto w-3/4">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
//             <div
//               className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="modal-headline"
//             >
//               <div>
//                 <div className="mt-3 text-center sm:mt-5">
//                   <div className="flex flex-row">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">
//                       Agent
//                     </h3>
//                   </div>

//                   <div>
//                     {/* {dataTest.map((item, index) => ( */}

//                     <div className="m-3">
//                       <label className="form-label">Firstname</label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         value={productItem.firstName}
//                       />
//                     </div>
//                     <div>
//                       <label className="form-label">Lastname</label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         value={productItem.lastname}
//                         onChange={(item) =>
//                           setProductItem({
//                             ...productItem,
//                             lastname: item.target.value,
//                           })
//                         }
//                       ></input>
//                     </div>
//                     <div>
//                       <label className="form-label">PhoneNumber</label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         value={productItem.phonenumber}
//                         onChange={(item) =>
//                           setProductItem({
//                             ...productItem,
//                             phonenumber: item.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label className="form-label">Birthday</label>
//                       <input
//                         className="form-control"
//                         type="date"
//                         value={productItem.birthday}
//                       />
//                     </div>
//                     {/* ))} */}
//                   </div>
//                 </div>
//                 <div className="mt-5 sm:mt-6">
//                   <button
//                     type="button"
//                     className="rounded-full bg-blue-300 px-4 my-1 mx-4 hover:bg-blue-500"
//                     onClick={() => {
//                       const ress = confirm(
//                         "are you sure to save this information?"
//                       );
//                       if (ress) {
//                         setShowModal(false);
//                       }
//                     }}
//                   >
//                     save
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* )} */}
//       </div>
//     </div>
//   );
// }
