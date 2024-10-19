"use client";
import EyeFilledIcon from "@/components/Icons/EyeFilledIcon";
import EyeSlashedFilledIcon from "@/components/Icons/EyeSlashedFilledIcon";
import { local_login_page, login_img } from "@/constants";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onLogin = async (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <div className=" flex-col flex p-4 items-center justify-center">
      <div className=" w-[400px] lg:w-[1000px]   shadow-lg rounded-md flex lg:flex-row flex-col mt-[5%]">
        <div className=" w-full lg:w-1/2  rounded-md">
          <div className="relative lg:h-[600px] h-[200px]">
            <Image
              src={local_login_page}
              alt=""
              fill
              placeholder="blur"
              className=" rounded-md object-cover "
            />
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className=" p-3  flex flex-col items-center gap-2">
            <div className=" text-center">
              <h3 className=" font-bold text-blue-600 text-3xl">Welcome</h3>
            </div>
            <div className=" my-3">
              <p className=" font-semibold">Our Journey Starts Here</p>
            </div>
            <div className=" w-full flex flex-col gap-3 justify-center">
              <form onSubmit={handleSubmit(onLogin)}>
                <div className=" my-3">
                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    className="max-w-xl"
                    color="primary"
                    variant="bordered"
                    {...register("email", { required: true })}
                  />
                  {errors?.email?.type === "required" && (
                    <p className=" text-red-700"> Email Required</p>
                  )}
                </div>
                <div className=" my-3">
                  <Input
                    isRequired
                    type={isVisible ? "text" : "password"}
                    label="Password"
                    className="max-w-lg"
                    color="primary"
                    variant="bordered"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <EyeSlashedFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors?.password && (
                    <p className="text-red-700">{errors.password.message}</p>
                  )}
                </div>
                <div className=" my-3 w-full">
                  <Button
                    type="submit"
                    variant="shadow"
                    color="primary"
                    className=" w-full"
                  >
                    Login
                  </Button>
                </div>
              </form>
              <div className=" my text-center">
                <p>
                  Dont Have an Account?{" "}
                  <span className=" text-blue-600 font-bold cursor-pointer">
                    <Link href={"/signUp"}> Create New Account</Link>
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
