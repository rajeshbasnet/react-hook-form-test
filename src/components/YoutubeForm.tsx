import React, { useEffect } from "react";
import "./YoutubeForm.css";

import { useForm } from "react-hook-form";
import { User } from "../types";

const YoutubeForm = () => {
  const { register } = useForm<User>();

  return (
    <section className="youtube__form__section">
      <form action="" className="form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </section>
  );
};

export default YoutubeForm;
