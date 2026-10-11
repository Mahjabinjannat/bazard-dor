"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, signOut, updateUser, useSession } from "@/lib/auth-client";
import {
  UserRound,
  Mail,
  LogOut,
  Save,
  ShieldCheck,
  LoaderCircle,
} from "lucide-react";
import { toast } from "@heroui/react";

export default function ProfilePage() {
  const router = useRouter();
  const {
    data: session,
    isPending,
    error: sessionError,
    refetch,
  } = useSession();

  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const user = session?.user;

  //   useEffect(() => {
  //     if (user?.name) {
  //       setName(user.name);
  //     }
  //   }, [user?.name]);

  useEffect(() => {
    if (!isPending && !sessionError && !user) {
      router.replace("/signIn");
    }
  }, [isPending, sessionError, user, router]);

  const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName.length < 3) {
      setError("নাম কমপক্ষে ৩ অক্ষরের হতে হবে।");
      return;
    }

    if (trimmedName === user?.name) {
      setMessage("নাম পরিবর্তন করা হয়নি।");
      setError("");
      return;
    }

    setIsUpdating(true);
    setMessage("");
    setError("");

    try {
      const { error } = await updateUser({
        name: trimmedName,
      });

      if (error) {
        setError(error.message || "নাম পরিবর্তন করা যায়নি।");
        return;
      }

      await refetch();
      router.refresh();
      toast.success("আপনার নাম সফলভাবে পরিবর্তন হয়েছে!");

      setMessage("আপনার নাম সফলভাবে পরিবর্তন হয়েছে!");
    } catch {
      setError("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    setError("");

    try {
      const { error } = await signOut();

      if (error) {
        setError(error.message || "সাইন আউট করা যায়নি।");
        return;
      }

      router.replace("/signIn");
      router.refresh();
    } catch {
      setError("সাইন আউট করার সময় সমস্যা হয়েছে।");
    } finally {
      setIsSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center bg-[#F0F5F0]">
        <LoaderCircle className="h-8 w-8 animate-spin text-[#008C45]" />
      </div>
    );
  }

  if (sessionError) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center px-4 text-center text-red-600">
        সেশন যাচাই করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।
      </div>
    );
  }

  if (!user) return null;

  const initial = user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-9">
          <div className="mb-3 flex items-center gap-2 text-[#008C45]">
            <UserRound size={19} />
            <span className="text-sm font-semibold">আমার অ্যাকাউন্ট</span>
          </div>

          <h1 className="text-[30px] font-extrabold tracking-tight text-[#1D281F] sm:text-[38px]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-[15px] text-[#6F796F] sm:text-[17px]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <section className="mb-7 rounded-[22px] border border-[#DDE7DE] bg-white p-6 shadow-[0_4px_24px_rgba(20,70,35,0.025)] sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-5">
              <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#008C45] text-[34px] font-semibold text-white shadow-sm sm:h-[88px] sm:w-[88px]">
                {initial}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-[21px] font-bold text-[#1D281F] sm:text-[27px]">
                  {user.name}
                </h2>

                <div className="mt-2 flex min-w-0 items-center gap-2 text-[#6F796F]">
                  <Mail size={16} className="shrink-0" />

                  <p className="truncate text-[13px] sm:text-[16px]">
                    {user.email}
                  </p>
                </div>

                {user.emailVerified && (
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#E8F5EB] px-3 py-1 text-[12px] font-medium text-[#008C45]">
                    <ShieldCheck size={14} />
                    ইমেইল যাচাইকৃত
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#E43D3D] bg-white px-5 py-3 text-[15px] font-semibold text-[#E43D3D] transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSigningOut ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : (
                <LogOut size={18} />
              )}

              {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
            </button>
          </div>
        </section>

        <section className="rounded-[22px] border border-[#DDE7DE] bg-white p-6 shadow-[0_4px_24px_rgba(20,70,35,0.025)] sm:p-8">
          <div className="mb-7">
            <h2 className="text-[22px] font-bold text-[#1D281F] sm:text-[26px]">
              নাম হালনাগাদ করুন
            </h2>

            <p className="mt-2 text-[13px] text-[#829084]">
              আপনার প্রোফাইলে প্রদর্শিত নাম পরিবর্তন করুন।
            </p>
          </div>

          <form onSubmit={handleUpdateName} className="space-y-5">
            <div>
              <label
                htmlFor="profile-name"
                className="mb-2 block text-[15px] font-semibold text-[#253329]"
              >
                নাম
              </label>

              <input
                id="profile-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setMessage("");
                  setError("");
                }}
                placeholder="আপনার নাম লিখুন"
                minLength={3}
                maxLength={100}
                required
                className="w-full rounded-xl border border-[#D5DED5] bg-[#FAFCFA] px-4 py-3.5 text-[15px] text-[#1D281F] outline-none transition placeholder:text-[#A3ADA4] focus:border-[#008C45] focus:ring-2 focus:ring-[#008C45]/10"
              />
            </div>
            {/* 
            {message && (
              <p
                role="status"
                className="rounded-lg bg-[#E8F5EB] px-4 py-3 text-sm text-[#087B3E]"
              >
                {message}
              </p>
            )}

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </p>
            )} */}

            <button
              type="submit"
              disabled={isUpdating || name.trim() === user.name}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#008C45] px-6 py-3.5 text-[15px] font-bold text-white shadow-sm transition hover:bg-[#007338] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUpdating ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : (
                <Save size={18} />
              )}

              {isUpdating ? "সংরক্ষণ হচ্ছে..." : "নাম হালনাগাদ করুন"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
