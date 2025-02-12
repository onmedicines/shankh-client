import { useContext, useEffect, useState } from "react";
import { LoginData } from "../context/loginContext";

export default function Tickets() {
  const [loginData] = useContext(LoginData);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/flights", {
      headers: {
        Authorization: `Bearer ${loginData.access}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    });
  }, [loginData.access]);

  if (!loginData.access) {
    return <h1>Unauthorized</h1>;
  }
  return (
    <div>
      <div className="flex gap-8">
        <h1>Tickets</h1>
        <Logout />
      </div>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
}

const Logout = () => {
  const [loginData, setLoginData] = useContext(LoginData);
  const logout = () => {
    fetch("http://localhost:5000/api/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loginData.access}`,
      },
      withCredentials: true,
      credentials: "include",
    }).then(async (response) => {
      if (response.ok) {
        console.log("Logged out");
        setLoginData({});
      }
    });
  };

  return (
    <button className="bg-red-500 text-white" onClick={logout}>
      Logout
    </button>
  );
};
