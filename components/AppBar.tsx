"use client";

import { signIn, signOut } from "next-auth/react";

export const AppBar = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
