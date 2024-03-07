"use client";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import KakaoLoginBtn from "@/components/KakaoLoginBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <GoogleLoginBtn/>
      <div/>
      <KakaoLoginBtn/>
    </div>
  );
}
