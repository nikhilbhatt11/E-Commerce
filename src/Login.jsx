import axios from "axios";
import { withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FancyInput from "./FancyInput";
import Input from "./Input";
import { withAlert, withUser } from "./withProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({ type: "error", message: "Invalid credentials" });
    });
}
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const initialValues = {
  email: "",
  password: "",
};
export function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="bg-white text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-lg font-bold text-violet-500">
            Login To Shopping Zone
          </h1>
          <Input
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            lable="email-address"
            id="email-addess"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
          />
          <FancyInput
            values={values.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
            lable="password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
          />
          <button
            type="submit"
            className=" border rounded-md bg-red-500 text-white font-bold text-lg px-2 ml-2"
          >
            Login
          </button>
        </form>
        Dont have an account?<Link to="/SignIn"> SignIn</Link>
      </div>
    </div>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
});
const EasyLogin = myHOC(Login);
export default withAlert(withUser(EasyLogin));
