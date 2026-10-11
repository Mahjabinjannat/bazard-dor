// "use client";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import Link from "next/link";

// const SignUpPage = () => {
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data: Record<string, string> = {};
//     // Convert FormData to plain object
//     formData.forEach((value, key) => {
//       data[key] = value.toString();
//     });
//     alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
//   };

//   return (
//     <div className="flex justify-center items-center flex-col my-16 space-y-4">
//       <h1 className="font-bold text-[22px]">অ্যাকাউন্ট তৈরি করুন
// </h1>
//       <p className="text-gray-500 text-[14px]">
//         বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
//       </p>
//       <Form
//         className="flex w-96 flex-col gap-4 border border-gray-300 py-8 px-8 rounded-[15px] bg-[#FAF9F6] space-y-2"
//         onSubmit={onSubmit}
//       >
//           <TextField
//             isRequired
//             name="name"
//             className="bg-[#FAF9F6] space-y-2"
//             validate={(value) => {
//               if (value.length < 3) {
//                 return "Name must be at least 3 characters";
//               }
//               return null;
//             }}
//           >
//             <Label>Name</Label>
//             <Input placeholder="যেমন: রহিম উদ্দিন" />
//             <FieldError />
//           </TextField>
//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           className="bg-[#FAF9F6] space-y-2"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }
//             return null;
//           }}
//         >
//           <Label>ইমেইল</Label>
//           <Input placeholder="you@example.com" />
//           <FieldError />
//         </TextField>
//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           className="bg-[#FAF9F6] space-y-2"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             if (!/[A-Z]/.test(value)) {
//               return "Password must contain at least one uppercase letter";
//             }
//             if (!/[0-9]/.test(value)) {
//               return "Password must contain at least one number";
//             }
//             return null;
//           }}
//         >
//           <Label>পাসওয়ার্ড</Label>
//           <Input placeholder="কমপক্ষে ৮ অক্ষর" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>
//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           className="bg-[#FAF9F6] space-y-2"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             if (!/[A-Z]/.test(value)) {
//               return "Password must contain at least one uppercase letter";
//             }
//             if (!/[0-9]/.test(value)) {
//               return "Password must contain at least one number";
//             }
//             return null;
//           }}
//         >
//           <Label>পাসওয়ার্ড</Label>
//           <Input placeholder="আবার লিখুন" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>
//         <div className="flex gap-2 bg-green-700 rounded-4xl items-center">
//           <Button type="submit" className="bg-green-700 ">
//             অ্যাকাউন্ট তৈরি করুন
//           </Button>
//         </div>
//         <div className="flex w-full flex-col">
//           <div className="divider">অথবা</div>
//         </div>
//        <div className="flex flex-col gap-3">
//       <Button
//         variant="outline"
//         className="flex w-full items-center justify-center gap-3"
//       >
//         <FcGoogle className="text-[22px]" />
//         Google দিয়ে চালিয়ে যান
//       </Button>

//       <Button
//         variant="outline"
//         className="flex w-full items-center justify-center gap-3"
//       >
//         <FaGithub className="text-[22px]" />
//         GitHub দিয়ে চালিয়ে যান
//       </Button>
//     </div>
//       <p className="text-gray-600">
//           অ্যাকাউন্ট আছে?  <Link href="/signIp" className="text-green-600">সাইন ইন করুন</Link>
//         </p>
//       </Form>
//     </div>
//   );
// };

// export default SignUpPage;

"use client";

import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string, confirmPassword: string};
    console.log(data);

    // const name = String(formData.get("name") ?? "");
    // const email = String(formData.get("email") ?? "");
    // const passwordValue = String(formData.get("password") ?? "");
    // const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (data.password !== data.confirmPassword) {
      return;
    }

    // Connect Better Auth signup here.
    // Do not log or display passwords.
    // console.log("Validated signup:", { name, email });
  };

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[460px]">
        <div className="mb-8 text-center">
          <h1 className="text-[28px] font-extrabold tracking-tight text-[#1D281F]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-[14px] leading-6 text-[#718075]">
            বিনা খরচে সাইন আপ করে প্রতিদিনের বাজারদর,
            <br className="hidden sm:block" />
            দামের পরিবর্তন ও বিস্তারিত তথ্য জানুন।
          </p>
        </div>

        <div className="rounded-[22px] border border-[#DDE7DE] bg-[#FAF9F6] p-6 shadow-[0_10px_35px_rgba(25,70,35,0.05)] sm:p-8">
          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            <TextField
              isRequired
              name="name"
              className="w-full"
              validate={(value) =>
                value.trim().length < 3 ? "নাম কমপক্ষে ৩ অক্ষরের হতে হবে" : null
              }
            >
              <Label className="mb-2 text-[14px] font-semibold text-[#253329]">
                আপনার নাম
              </Label>

              <Input
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full rounded-xl border border-[#DDE5DD] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#008C45]"
              />

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            <TextField isRequired name="email" type="email" className="w-full">
              <Label className="mb-2 text-[14px] font-semibold text-[#253329]">
                ইমেইল ঠিকানা
              </Label>

              <Input
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#DDE5DD] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#008C45]"
              />

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
              onChange={setPassword}
              validate={(value) => {
                if (value.length < 8)
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                if (!/[A-Z]/.test(value))
                  return "অন্তত একটি বড় হাতের ইংরেজি অক্ষর দিন";
                if (!/[0-9]/.test(value)) return "অন্তত একটি সংখ্যা দিন";
                return null;
              }}
            >
              <Label className="mb-2 text-[14px] font-semibold text-[#253329]">
                পাসওয়ার্ড
              </Label>

              <div className="relative w-full">
                <Input
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="w-full rounded-xl border border-[#DDE5DD] bg-white px-4 py-3 pr-12 text-[14px] outline-none transition focus:border-[#008C45]"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A968C] hover:text-[#008C45]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <Description className="mt-1 text-[12px] text-[#8A968C]">
                কমপক্ষে ৮ অক্ষর, একটি বড় হাতের অক্ষর ও একটি সংখ্যা
              </Description>

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            <TextField
              isRequired
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full"
              validate={(value) =>
                value !== password ? "দুটি পাসওয়ার্ড মিলছে না" : null
              }
            >
              <Label className="mb-2 text-[14px] font-semibold text-[#253329]">
                পাসওয়ার্ড নিশ্চিত করুন
              </Label>

              <div className="relative w-full">
                <Input
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  className="w-full rounded-xl border border-[#DDE5DD] bg-white px-4 py-3 pr-12 text-[14px] outline-none transition focus:border-[#008C45]"
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirmation password"
                      : "Show confirmation password"
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A968C] hover:text-[#008C45]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            <Button
              type="submit"
              className="mt-1 flex w-full items-center justify-center rounded-xl bg-[#008C45] py-3.5 text-[15px] font-bold text-white transition hover:bg-[#007338]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>

            <div className="flex w-full items-center gap-4 py-1">
              <div className="h-px flex-1 bg-[#DFE7DF]" />
              <span className="text-[13px] text-[#929C94]">অথবা</span>
              <div className="h-px flex-1 bg-[#DFE7DF]" />
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DDE5DD] bg-white py-3 text-[14px] font-semibold text-[#253329] transition hover:bg-[#F4F7F4]"
              >
                <FcGoogle size={21} />
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DDE5DD] bg-white py-3 text-[14px] font-semibold text-[#253329] transition hover:bg-[#F4F7F4]"
              >
                <FaGithub size={20} />
                GitHub
              </Button>
            </div>
          </Form>

          <p className="mt-7 text-center text-[14px] text-[#718075]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signIn"
              className="font-bold text-[#008C45] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
