import Form from "./components/Form";
import Cards from "./components/Cards";
import img from "/src/images/bg-main-desktop.png";

function App() {
  return (
    <div className="w-full flex flex-row items-center justify-start asd">
      <img className="img absolute left-0 top-0 " src={img} alt="" />
      <svg
        width="84"
        height="47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-20 absolute top-28 left-56"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
      <Cards />
      <Form />
    </div>
  );
}

export default App;
