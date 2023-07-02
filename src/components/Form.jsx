import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import Success from "./Success";

export const Form = () => {
  const {
    setInfo,
    handleSubmit,
    nameError,
    cardError,
    expError,
    cvcError,
    isSuccess,
  } = useContext(InputContext);

  const handleChange = (e) => {
    e.preventDefault();
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="ml-auto mr-auto font-mono ">
      {!isSuccess ? (
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className="uppercase text-md">
                Cardholder Name
              </label>
              <input
                className={`h-10 border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-2 focus:border-indigo-700 ${
                  nameError.length !== 0 ? "border-2 border-red-800" : ""
                }`}
                type="text"
                id="name"
                name="holderName"
                placeholder="e.g Berke Demirel"
                onChange={handleChange}
                required
              />
              <span className="text-sm text-red-700 ">{nameError}</span>
            </div>
            <div className="flex flex-col justify-center">
              <label htmlFor="number" className="uppercase text-md">
                Card Number
              </label>
              <input
                type="text"
                id="number"
                className={`h-10 border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-2 focus:border-indigo-700 ${
                  cardError.length !== 0 ? "border-2 border-red-800" : ""
                }`}
                placeholder="e.g 1234 1234 1234 1234"
                name="cardNumber"
                onChange={handleChange}
                maxLength={16}
                required
              />
              <span className="text-sm text-red-700 ">{cardError}</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <label htmlFor="" className="uppercase text-md">
                  Exp. Date (MM/YY)
                </label>
                <div className="">
                  <input
                    className={`w-20 h-12 text-xl p-2 border-2 border-slate-300 rounded-md mr-2 focus:outline-none focus:border-2 focus:border-indigo-700 ${
                      expError.length !== 0 ? "border-2 border-red-800" : ""
                    }`}
                    type="text"
                    name="month"
                    placeholder="MM"
                    onChange={handleChange}
                    maxLength={2}
                    required
                  />
                  <input
                    className={`w-20 h-12 text-xl p-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-2 focus:border-indigo-700 ${
                      expError.length !== 0 ? "border-2 border-red-800" : ""
                    } `}
                    type="text"
                    name="year"
                    placeholder="YY"
                    onChange={handleChange}
                    maxLength={2}
                    required
                  />
                </div>
                <span className="text-sm text-red-700 ">{expError}</span>
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-md font-mono" htmlFor="cvc">
                  cvc
                </label>
                <input
                  className={`h-12 border-2 border-slate-300 focus:outline-none focus:border-2 focus:border-indigo-700 rounded-md p-2 ${
                    cvcError.length !== 0 ? "border-2 border-red-800" : ""
                  }`}
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="e.g 123"
                  maxLength={3}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm text-red-700 ">{cvcError}</span>
              </div>
            </div>
            <button
              className="text-lg bg-purple-950 p-2 text-slate-200 rounded-lg mt-4 hover:opacity-80 active:opacity-100"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </form>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Form;
