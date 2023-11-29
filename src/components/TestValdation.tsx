import { useForm } from "react-hook-form";

type Test = {
  email: string;
};

const TestValdation = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Test>({
    mode: "onChange",
  });

  console.log(errors);

  return (
    <form action="">
      <label htmlFor="">Email</label>
      <input
        type="email"
        {...register("email", {
          validate: async (fieldValue) => {
            console.log(fieldValue);

            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
            );
            const data = await response.json();
            return data.length == 0 || "Email already exists";
          },
        })}
      />

      <button type="button" onClick={() => trigger()}>
        Validate
      </button>
      <p>{errors.email?.message}</p>
    </form>
  );
};

export default TestValdation;
