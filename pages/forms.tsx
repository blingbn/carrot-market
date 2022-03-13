import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  // less code, better validation, have full controls
  const { register, watch } = useForm();
  console.log(register);
  console.log(watch);
  //register - function, input을 state와 연결시켜주는 역할

  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [formErrros, setFormErrros] = useState("");
//   const [emailErrros, setEmailErrros] = useState("");

//   const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget:  { value },
//     } = event;
//     setUsername(value);
//   };
//   const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setPassword(value);
//   };
//   const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setEmail(value);
//   };
//   const onSubmit = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     console.log(email, username, password);
//   };
