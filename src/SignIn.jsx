import React from "react";
import { withFormik } from "formik";

import * as Yup from "yup";
import FancyInput from "./FancyInput";
import Input from "./Input";
import axios from "axios";
import { withUser } from "./withProvider";

function callSignInApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullname,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("signned in");
    });
}
const schema = Yup.object().shape({
  fullname: Yup.string().required(),

  email: Yup.string().email().required(),

  password: Yup.string().required(),
});
const initialValues = {
  fullname: "",

  email: "",

  password: "",
};
export function SignIn({
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
            SignIn To Shopping Zone
          </h1>

          <Input
            values={values.fullname}
            error={errors.fullname}
            touched={touched.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            lable="fullname"
            id="fullname"
            type="fullname"
            name="fullname"
            required
            placeholder="Full name"
          />

          <Input
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            lable="email-address"
            id="email-address"
            type="email"
            name="email"
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
            type="password"
            name="password"
            required
            placeholder="Password"
          />

          <button
            type="submit"
            className=" border rounded-md bg-red-500 text-white font-bold text-lg px-2 ml-2"
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
}
const xyzHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callSignInApi,
});
const EasySignIn = xyzHOC(SignIn);
export default withUser(EasySignIn);
