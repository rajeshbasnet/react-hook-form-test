import "./YoutubeForm.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/UserSchema";

const YoutubeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = (user: User) => {
    console.log(user);
  };

  return (
    <section className="youtube__form__section">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <p className="error__message">{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" {...register("email")} />
        <p className="error__message">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <p className="error__message">{errors.channel?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default YoutubeForm;
