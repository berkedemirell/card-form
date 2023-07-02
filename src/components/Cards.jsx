import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import img1 from '/src/images/bg-card-back.png'
import img2 from '/src/images/bg-card-front.png'

export const Cards = () => {
  const { info } = useContext(InputContext);

  const splittedNumber = info?.cardNumber.match(/.{1,4}/g);
  const newNumber = splittedNumber?.join(" ");

  return (
    <div className="z-10 flex flex-col items-center justify-center cards">
      <div className="relative ml-24 mt-24">
        <img className="" src={img2} />
        <span className="absolute text-4xl text-slate-200 left-6 font-mono top-32 font-bold number">
          {newNumber?.length === undefined ? "0000 0000 0000 0000" : newNumber}
        </span>
        <span className="absolute text-xl left-6 text-slate-200 top-48 uppercase font-bold name">
          {info?.holderName.length === 0 ? "BERKE DEMIREL" : info.holderName}
        </span>
        <span className="absolute text-xl text-slate-200 top-48 right-10 font-bold exp">
          {info.month.length === 0 ? "00" : info.month}/{info.year.length === 0 ? "00" : info.year}
        </span>
      </div>
      <div className="ml-64 mt-6 relative">
        <img className="" src={img1} />
        <span className="absolute text-xl text-slate-950 font-bold bottom-28 right-14 cvc">
          {info.cvc.length === 0 ? "123" : info.cvc}
        </span>
      </div>
    </div>
  );
};

export default Cards;
