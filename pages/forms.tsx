import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}
export default function Forms() {
  // less code, better validation, have full controls
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("i am valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  //register - function, input을 state와 연결시켜주는 역할

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "The username should be longer than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
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
