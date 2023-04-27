import Image from "next/image";
export default function LancerModal({
  LancerModala,
  setLancerModala,
}: {
  LancerModala: boolean;
  setLancerModala: any;
}) {
  const handleCloseModal = () => {
    setLancerModala(!LancerModala);
  };
  const handleClick = () => {
    setLancerModala(true);
  };

  return (
    <div>
      <div>
        {LancerModala && (
          <div className="fixed z-10 inset-0 overflow-y-auto w-2/3">
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
                      <>
                        {/* <div>
                        <img src={require=("getData()")} />
                      </div> */}
                      </>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Agent
                      </h3>
                    </div>
                    <div></div>
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
                          setLancerModala(false);
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
    </div>
  );
}
