import React from "react";
import SubHomePage from "@/app/[locale]/Home/SubHomePage";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-5 gap-8">
      <h1>Main Page</h1>
      <SubHomePage />
    </main>
  );
}
