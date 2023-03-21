const ButtonPrimary = ({ text }: any) => {
  return (
    <button className="mt-5 md:mt-12 py-4 px-12 bg-btnPrimary font-fontBold text-bgSecondary">
      {text}
    </button>
  );
};

export default ButtonPrimary;
