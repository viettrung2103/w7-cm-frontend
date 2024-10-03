import { useState } from "react";
import { useAuth } from "./useAuth";

export default function useSignup(url) {
  const [error, setError] = useState(null);
  const { login: authLogin, setLoading } = useAuth();

  const signup = async (object) => {
    setLoading(true);
    setError(null);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
    const user = await response.json();

    if (!response.ok) {
      console.log(user.error);
      setError(user.error);
      setLoading(false);
      return error;
    }

    authLogin(user);
  };

  return { signup, error };
}
