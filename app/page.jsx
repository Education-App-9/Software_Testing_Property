"use client";

import { redirect, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    redirect("/login");
  }
}
