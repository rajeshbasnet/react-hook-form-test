import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IUser {
  username: string;
  password: string;
}

const App: React.FC = () => {
  const { handleSubmit, register } = useForm<IUser>();

  const formSubmitHandler: SubmitHandler<IUser> = (user) => {
    console.log(user);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" {...register("password")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;
