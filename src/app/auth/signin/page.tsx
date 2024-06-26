"use client";

import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res?.error) return console.error(res.error);

    router.push("/travel/new-trip");
  };

  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-56px-73px)] flex-col items-center justify-center gap-10 bg-secondary px-5 sm:px-10 md:flex-row md:gap-20">
        <div className="sign-in-form">
          <form onSubmit={handleSubmit}>
            <p className="text-red-500">{error}</p>
            <h1>Login</h1>
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

            <input type="submit" value="login" />
          </form>
        </div>
      </div>
    </>
  );
}
