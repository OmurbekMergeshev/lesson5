import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("FirstName", { required: true, maxLength: 20 })} />
      <input {...register("LastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("Age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  )
}