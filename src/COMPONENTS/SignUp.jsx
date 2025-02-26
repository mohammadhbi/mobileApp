import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(16),
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword);
  }
  async function submitForm(user) {
    try {
      const response = await axios.post(
        "https://strapi-store-server.onrender.com/api/auth/local/register",
        user

      );
      localStorage.setItem("token", response.data.jwt)
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <section className="flex">
     <div className="m-auto">
     <h1>SignUp</h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-12 flex flex-col gap-y-6 justify-center"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            {...register("email")}
            type="email"
            className="grow "
            placeholder="Email"
          />
        </label>
        {errors?.email ? (
          <span className="text-error">{errors.email.message}</span>
        ) : null}
        <label className="input input-bordered flex items-center gap-2">
          <input
            {...register("username")}
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
        {errors?.username ? (
          <span className="text-error">{errors.username.message}</span>
        ) : null}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            onClick={toggleShowPassword}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            {...register("password")}
            className="grow"
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
          />
        </label>
        {errors?.password ? <span className="text-error">{errors.password.message}</span> : null}
        <button className="btn btn-active btn-primary">Submit</button>
      </form>
     </div>
    </section>
  );
};

export default SignUp;
