"use client";
import GithubLoginBtn from "@/components/GithubLoginBtn";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import KakaoLoginBtn from "@/components/KakaoLoginBtn";

export default function Home() {
  return (
    <div>
      <GoogleLoginBtn/>
      <div/>
      <KakaoLoginBtn/>
      <div/>
      <GithubLoginBtn/>
    </div>
  );
}
