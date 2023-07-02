import { createContext, useState } from "react";

export const InputContext = createContext();

export const ContextProvider = ({ children }) => {
  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [expError, setExpError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "ı",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ö",
    "p",
    "r",
    "s",
    "ş",
    "t",
    "u",
    "ü",
    "v",
    "y",
    "z",
  ];

  const [info, setInfo] = useState({
    holderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const checker = (str) => {
    for (let i = 0; i < letters.length; i++) {
      if (str.includes(letters[i])) {
        return true;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.holderName.length === 0) {
      setNameError("Can't be empty.");
    }
    if (info.cardNumber.length === 0) {
      setCardError("Can't be empty.");
    }
    if (info.month.length === 0) {
      setExpError("Can't be empty.");
    }
    if (info.year.length === 0) {
      setExpError("Can't be empty.");
    }
    if (info.cvc.length === 0) {
      setCvcError("Can't be empty.");
    }
    if (info.cardNumber !== 0 && checker(info.cardNumber)) {
      setCardError("Wrong format, numbers only.");
    }
    if (
      info.holderName.length !== 0 &&
      info.month.length !== 0 &&
      info.year.length !== 0 &&
      info.cardNumber.length !== 0 &&
      info.cvc.length !== 0 &&
      !checker(info.cardNumber)
    ) {
      setIsSuccess(true);
    }
  };

  return (
    <InputContext.Provider
      value={{
        info,
        setInfo,
        handleSubmit,
        nameError,
        cardError,
        expError,
        cvcError,
        isSuccess,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
