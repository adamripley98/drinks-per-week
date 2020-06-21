import Card from "../Card";

const Form2 = (props) => {
  return (
    <>
      <Card>
        <form className="w-full max-w-lg">
          <h1 className="text-2xl my-4 bold">Drinking Goals</h1>
          <div className=" flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-baseline-drinks"
              >
                Baseline Drinks
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-baseline"
                type="number"
                placeholder={0}
                name="baselineDrinks"
                onChange={props.handleChange}
                value={props.onboardState.baselineDrinks}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-additional-drinks"
              >
                Added drinks/exercise
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-additional-drinks"
                type="number"
                placeholder={1}
                name="addedDrinks"
                onChange={props.handleChange}
                value={props.onboardState.addedDrinks}
              />
            </div>
          </div>
          <div className="md:flex md:items-center my-3">
            <label className="block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                onChange={props.handleChange}
                name="drinkCarryOver"
                checked={props.onboardState.drinkCarryOver}
                type="checkbox"
              />
              <span className="text-sm">
                Allow drink carryover from week to week?
              </span>
            </label>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Form2;
