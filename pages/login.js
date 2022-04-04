import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    console.log("login");
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        router.push("/admin");
      }
    });
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center bg-white"
        onSubmit={(e) => {
          login(e);
        }}
      >
        <input type="text" className="border  " />
        <input type="password" className="border" />
        <button className="border w-24 bg-slate-400 ">login</button>
      </form>
    </div>
  );
}
