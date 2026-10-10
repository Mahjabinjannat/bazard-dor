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

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span>{formattedDate}</span>
    </div>
  );
}
