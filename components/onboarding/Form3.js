import Card from "../Card";

const Form3 = (props) => {
  const { penalties } = props.onboardState;
  return (
    <>
      <Card>
        <form className="w-full max-w-lg">
          <h1 className="text-2xl my-4 bold">Added Penalties</h1>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input
              className="mr-2 leading-tight penalty-1"
              type="checkbox"
              onChange={props.handleChange}
              name="daysInARowMissedEnabled"
              checked={
                penalties &&
                penalties.daysInARowMissed &&
                penalties.daysInARowMissed.enabled
                  ? penalties.daysInARowMissed.enabled
                  : false
              }
            />
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
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={2}
                    onChange={props.handleChange}
                    name="daysInARowMissedValue"
                    value={
                      penalties &&
                      penalties.daysInARowMissed &&
                      penalties.daysInARowMissed.enabled
                        ? penalties.daysInARowMissed.daysInARowMissedValue
                        : null
                    }
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
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                    onChange={props.handleChange}
                    name="daysInARowMissedPenalty"
                    value={
                      penalties &&
                      penalties.daysInARowMissed &&
                      penalties.daysInARowMissed.enabled
                        ? penalties.daysInARowMissed.daysInARowMissedPenalty
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input
              className="mr-2 leading-tight penalty-2"
              type="checkbox"
              onChange={props.handleChange}
              name="daysInAWeekMissedEnabled"
              checked={
                penalties &&
                penalties.daysInAWeekMissed &&
                penalties.daysInAWeekMissed.enabled
                  ? penalties.daysInAWeekMissed.enabled
                  : false
              }
            />
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
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={3}
                    onChange={props.handleChange}
                    name="daysInAWeekMissedValue"
                    value={
                      penalties &&
                      penalties.daysInAWeekMissed &&
                      penalties.daysInAWeekMissed.enabled
                        ? penalties.daysInAWeekMissed.daysInAWeekMissedValue
                        : null
                    }
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
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                    onChange={props.handleChange}
                    name="daysInAWeekMissedPenalty"
                    value={
                      penalties &&
                      penalties.daysInAWeekMissed &&
                      penalties.daysInAWeekMissed.enabled
                        ? penalties.daysInAWeekMissed.daysInAWeekMissedPenalty
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:items-center my-3">
            <input
              className="mr-2 leading-tight penalty-3"
              type="checkbox"
              onChange={props.handleChange}
              name="daysInAWeekLimitEnabled"
              checked={
                penalties &&
                penalties.daysInAWeekLimit &&
                penalties.daysInAWeekLimit.enabled
                  ? penalties.daysInAWeekLimit.enabled
                  : false
              }
            />
            <span className="text-md">More than # drinking days in a week</span>
            <div className="penalty-3-inputs">
              <div className=" flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 my-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-baseline-drinks"
                  >
                    Drinking days in a week
                  </label>
                  <input
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-baseline"
                    type="number"
                    placeholder={5}
                    onChange={props.handleChange}
                    name="daysInAWeekLimitValue"
                    value={
                      penalties &&
                      penalties.daysInAWeekLimit &&
                      penalties.daysInAWeekLimit.enabled
                        ? penalties.daysInAWeekLimit.daysInAWeekLimitValue
                        : null
                    }
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
                    className="penalty-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-additional-drinks"
                    type="number"
                    placeholder={1}
                    onChange={props.handleChange}
                    name="daysInAWeekLimitPenalty"
                    value={
                      penalties &&
                      penalties.daysInAWeekLimit &&
                      penalties.daysInAWeekLimit.enabled
                        ? penalties.daysInAWeekLimit.daysInAWeekLimitPenalty
                        : null
                    }
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
