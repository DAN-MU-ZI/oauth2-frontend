"use client";
import LoginBtn from "@/components/LoginBtn";

export default function Login() {
  return (
    <div>
      <div/>
      <LoginBtn provider="kakao"/>
      <div/>
      <LoginBtn provider="github"/>
      <div/>
      <LoginBtn provider="google"/>
    </div>
  );
}
