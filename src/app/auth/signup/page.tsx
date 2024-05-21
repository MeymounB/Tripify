"use client";

import { FormEventHandler, useState } from "react";
import { createUser } from "@/lib/actions/createUser";
import { useRouter } from "next/navigation";

export default function Page() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");

    const res = await createUser(userInfo);

    if (res.error) return setError(res.error);
    else router.push("/auth/signin");
  };

  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-56px-73px)] flex-col items-center justify-center gap-10 bg-secondary px-5 sm:px-10 md:flex-row md:gap-20">
        <div className="sign-in-form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="text-red-500">{error}</p>
            <input
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="email"
              placeholder="john@email.com"
            />

            <input
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
              type="password"
              placeholder="*******"
            />

            <input type="submit" value="signup" />
          </form>
        </div>
      </div>
    </>
  );
}
