import Input from "../base/Input";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      query: "",
      message: "",
    },
    mode: "onBlur",
  });

  const formSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="mt-20 md:mx-10 lg:mx-20 xl:mx-60">
      <div className="bg-purple grid py-6 md:py-0 grid-cols-12 rounded">
        <div className="col-span-12 text-center mb-8 md:mb-0 md:col-span-6 md:px-8 md:py-6 lg:px-16 lg:py-12">
          <h4 className="text-white border-b border-b-mediumGrey pb-4">
            Working hours
          </h4>
          <h3 className="text-xl capitalize text-white mt-4 font-fontBold">
            Monday to Friday
          </h3>
          <h3 className="text-xl uppercase text-white mt-4 font-fontBold">
            9:00 am to 8:00 pm
          </h3>
          <p className="text-white">Our Support Team is available 24/7</p>
        </div>
        <div className="col-span-12 text-center pb-8 md:col-span-6 md:px-8 md:py-6 lg:px-16 lg:py-12">
          {" "}
          <h4 className="text-white border-b border-b-mediumGrey pb-4">
            Contact Us
          </h4>
          <h3 className="text-xl capitalize text-white mt-4 font-fontBold">
            020 7993 2905
          </h3>
          <p className="text-white">hello@finsweet.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          {...register("fullName", {
            required: { value: true, message: "Full Name is Required" },
          })}
          type="text"
          placeholder="Full Name"
          errors={errors.fullName?.message}
          register={{ ...register("fullName") }}
        />
        <Input
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email is not valid",
            },
          })}
          type="email"
          errors={errors.email?.message}
          placeholder="Your Email"
          register={{ ...register("email") }}
        />
        <Input
          {...register("query", {
            required: { value: true, message: "Query is required" },
          })}
          type="text"
          errors={errors.query?.message}
          placeholder="Query Related"
          register={{ ...register("query") }}
        />
        <input
          type="text"
          {...register("message", {
            required: { value: true, message: "Message is required" },
          })}
          className="w-full p-6 border border-slate-300 rounded-md mt-4 placeholder:text-bgSecondary h-32"
          placeholder="Message"
        />
        <p className="text-red-600">{errors.message?.message}</p>
        <button
          type="submit"
          className="text-btnText font-fontBold bg-btnPrimary py-6 text-bgSecondary w-full mt-4 rounded-lg mb-20"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
