const Input = ({ type, placeholder, register, errors }: any) => {
  return (
    <>
      <input
        className="w-full p-6 border border-slate-300 rounded-md mt-4 placeholder:text-bgSecondary"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p className="ml-3 text-red-600">{errors}</p>
    </>
  );
};

export default Input;
