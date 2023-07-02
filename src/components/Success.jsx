export const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-4">
        <h3 className="text-4xl uppercase font-mono text-center">Thank you</h3>
        <p className="text-xl font-mono text-center mt-4 opacity-80">
          We`ve added your card details
        </p>
      </div>
      <button className="mt-6 bg-violet-950 text-slate-200 p-2 w-80 text-xl font-mono rounded-md hover:opacity-90 active:opacity-100">
        Continue
      </button>
    </div>
  );
};

export default Success;
