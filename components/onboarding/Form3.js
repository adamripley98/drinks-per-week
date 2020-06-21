import Card from "../Card";

const Form3 = (props) => {
  return (
    <>
      <Card>
        <form className="w-full max-w-lg">
          <h1 className="text-2xl my-4 bold">Added Penalties</h1>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input className="mr-2 leading-tight penalty-1" type="checkbox" />
            <span className="text-md">Missed workouts # days in a row</span>
            <div className="penalty-1-inputs">
              <div className=" flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-baseline-drinks"
                  >
                    Days in a row missed
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={3}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 my-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-additional-drinks"
                  >
                    Drink Penalty
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input className="mr-2 leading-tight penalty-2" type="checkbox" />
            <span className="text-md">Missed workouts # days in a week</span>
            <div className="penalty-2-inputs">
              <div className=" flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-baseline-drinks"
                  >
                    Days in a week missed
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={3}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 my-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-additional-drinks"
                  >
                    Drink Penalty
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input className="mr-2 leading-tight penalty-3" type="checkbox" />
            <span className="text-md">
              No drinks on certain days of the week
            </span>
            <div className="penalty-3-inputs">
              <div className=" flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-additional-drinks"
                  >
                    No drink days
                  </label>
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="monday"
                  />
                  <span className="text-md">Monday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="tuesday"
                  />
                  <span className="text-md">Tuesday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="wednesday"
                  />
                  <span className="text-md">Wednesday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="thursday"
                  />
                  <span className="text-md">Thursday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="friday"
                  />
                  <span className="text-md">Friday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="saturday"
                  />
                  <span className="text-md">Saturday</span>
                  <br />
                  <input
                    className="mr-2 leading-tight penalty-1"
                    type="checkbox"
                    id="sunday"
                  />
                  <span className="text-md">Sunday</span>
                </div>
                <div className="w-full md:w-1/2 px-3 my-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-additional-drinks"
                  >
                    Drink Penalty
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input className="mr-2 leading-tight penalty-4" type="checkbox" />
            <span className="text-md">More than # drinking days in a week</span>
            <div className="penalty-4-inputs">
              <div className=" flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-baseline-drinks"
                  >
                    Drinking days in a week
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={3}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 my-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-additional-drinks"
                  >
                    Drink Penalty
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Form3;
