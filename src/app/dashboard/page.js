"use client";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back
      </button>
      <h1>Hello YasCode This is the Dashboard page !</h1>
    </div>
  );
}
