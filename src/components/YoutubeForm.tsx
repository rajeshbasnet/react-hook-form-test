import "./YoutubeForm.css";

import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { User } from "../types";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/UserSchema";

const YoutubeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: {
      errors,
      isSubmitting,
      isSubmitted,
      submitCount,
      isSubmitSuccessful,
    },
  } = useForm<User>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = (user: User) => {
    console.log(user);
  };

  const onError: SubmitErrorHandler<User> = (errors: FieldErrors<User>) => {
    console.log(errors);
  };

  console.log(isSubmitting, isSubmitted, submitCount, isSubmitSuccessful);

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  // const formData = watch();

  // console.log(formData);

  const currentNumber = useWatch({
    control,
    name: "currentNumber",
  });

  const values = getValues("username");

  console.log(values);

  return (
    <section className="youtube__form__section">
      <form
        action=""
        className="form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <p className="error__message">{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" {...register("email")} />
        <p className="error__message">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <p className="error__message">{errors.channel?.message}</p>

        <label htmlFor="numbers">List of phone numbers</label>
        <input type="text" {...register("numbers.0")} />

        <br />

        <div>
          <label htmlFor="secondary-phone">Phone Numbers</label>
          <input
            type="text"
            style={{ display: "block" }}
            {...register("currentNumber")}
          />

          <div>
            {fields.map((field, index) => {
              return (
                <div
                  key={field.id}
                  style={{ display: "flex", margin: "0.5rem 0" }}
                >
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  <button onClick={() => remove(index)}>Remove number</button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              append({ number: currentNumber });
            }}
            style={{
              backgroundColor: "green",
              padding: "0.25rem 0.5rem",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              margin: "1rem 0 0 0",
            }}
          >
            Add number
          </button>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default YoutubeForm;
