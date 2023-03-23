const Input = ({ type, placeholder, register, errors }: any) => {
  return (
    <>
      <input
        className="mx-2 w-full p-6 border border-slate-300 rounded-md mt-4 placeholder:text-bgSecondary"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p className="text-red-600">{errors}</p>
    </>
  );
};

export default Input;
