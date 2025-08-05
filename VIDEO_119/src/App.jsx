import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

    const delay = (d)=> {
    return new Promise(( resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log("Backend response:", result);

      // Example: Setting manual errors from backend logic
      // if (data.username !== "shubham") {
      //   setError("myform", { type: "manual", message: "Your form is not in good order" });
      // }
      // if (data.username === "rohan") {
      //   setError("blocked", { type: "manual", message: "You have been blocked" });
      // }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  return (
    <>
      {isSubmitting && <div>...Loading</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <input
              {...register("username", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "At least 3 characters" },
                maxLength: { value: 8, message: "Up to 8 characters" }
              })}
              type="text"
              placeholder="Username"
            />
            {errors.username && <div className="red">{errors.username.message}</div>}
          </div>

          <div className="password">
            <input
              {...register("password", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "At least 3 characters" }
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <div className="red">{errors.password.message}</div>}
          </div>

          <div className="submit">
            <input disabled={isSubmitting} type="submit" value="Submit" />
            {errors.myform && <div className="red">{errors.myform.message}</div>}
            {errors.blocked && <div className="red">{errors.blocked.message}</div>}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
