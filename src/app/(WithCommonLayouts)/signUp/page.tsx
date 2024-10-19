"use client";
import EyeFilledIcon from "@/components/Icons/EyeFilledIcon";
import EyeSlashedFilledIcon from "@/components/Icons/EyeSlashedFilledIcon";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ISignUpForm {
  fullName: string;
  email: string;
  password: string;
  repassword: string;
}

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();
  const onSignUp = async (data: ISignUpForm) => {
    if (data.password !== data.repassword) {
      toast.error("Password mismatch");
      return;
    }
    console.log(data);
  };

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className=" flex flex-col p-3 mt-[5%] items-center justify-center">
      <div className=" flex flex-col rounded-md w-[400px] lg:w-[600px] shadow-md bg-slate-50 items-center justify-center p-3">
        <div className=" text-center">
          <h3 className=" text-blue-600 font-bold text-2xl">Sign Up</h3>
        </div>
        <div className=" my-2">
          <p className=" font-semibold">Lets get set for our journey.</p>
        </div>
        <div className=" flex flex-col gap-3 my-2 w-full items-center justify-center">
          <form onSubmit={handleSubmit(onSignUp)} className=" w-full p-2">
            <div className=" my-2 ">
              <Input
                isRequired
                type="text"
                label="Full Name"
                className=""
                color="primary"
                variant="bordered"
                {...register("fullName", { required: "Full Name is Required" })}
              />
              {errors?.fullName && (
                <p className=" text-red-700">{errors.fullName.message}</p>
              )}
            </div>
            <div className=" my-2 ">
              <Input
                isRequired
                type="email"
                label="Email"
                className=""
                color="primary"
                variant="bordered"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <p className=" text-red-700"> Email is Required</p>
              )}
            </div>
            <div className=" my-2">
              <Input
                isRequired
                type={isVisible ? "text" : "password"}
                label="Password"
                className=""
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
            <div className=" my-2">
              <Input
                isRequired
                type={isVisible ? "text" : "password"}
                label="Retype Password"
                className=""
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
                {...register("repassword", {
                  required: "Retype Password is required",
                })}
              />
              {errors?.repassword && (
                <p className="text-red-700">{errors.repassword.message}</p>
              )}
            </div>
            <div className=" my-3 w-full">
              <Button
                type="submit"
                variant="shadow"
                color="primary"
                className=" w-full"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div>
          <div className=" my text-center">
            <p>
              Already Have an Account?{" "}
              <span className=" text-blue-600 font-bold cursor-pointer">
                <Link href={"/login"}> Lets's travel!</Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
