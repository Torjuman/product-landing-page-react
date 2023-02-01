const ButtonRoseColour = ({ btnText }) => {
  return (
    <button
      title="button"
      type="button"
      className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg"
    >
      {btnText}
    </button>
  );
};

export default ButtonRoseColour;
