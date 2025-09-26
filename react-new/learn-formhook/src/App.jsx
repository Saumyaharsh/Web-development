import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log("Submitting the form", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name: </label>
          <input
            className={errors.firstname ? "input-error" : ""}
            {...register("firstname", {
              required: true,
              minLength: {
                value: 3,
                message: "min-length must be 3",
              },
              maxLength: {
                value: 20,
                message: "max-length does not exceed 20",
              },
            })}
          />
          {errors.firstname && (
            <p className="error-msg">{errors.firstname.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="">Middle Name: </label>
          <input
            {...register("middlename")}
            className={errors.firstname ? "input-error" : ""}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">LastName Name: </label>
          <input
            {...register("lastname")}
            className={errors.firstname ? "input-error" : ""}
          />
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submittting" : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
