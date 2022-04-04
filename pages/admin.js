import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const checkLogin = () => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  };
  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };
  useEffect(() => {
    console.log("check");
    checkLogin();
  }, []);
  return (
    <div className="flex flex-col items-center">
      AdminPage
      {isLogin && (
        <button className="border" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}
