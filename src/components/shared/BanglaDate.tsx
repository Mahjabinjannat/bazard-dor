import { connection } from "next/server";

export default async function BanglaDate() {
  await connection();
  const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return <span className="text-[13px] text-gray-500 ">{formattedDate}</span>;
}
