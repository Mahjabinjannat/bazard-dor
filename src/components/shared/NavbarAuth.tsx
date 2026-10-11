"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Dropdown, Label, Spinner, toast } from "@heroui/react";
import { ChevronDown, LogOut, UserRound, LayoutDashboard } from "lucide-react";

export default function NavbarAuth() {
  const { data: session, isPending, error } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      toast.success("Sign out successful");

      if (error) {
        console.error("Sign out failed:", error.message);
        toast.danger("sign out failed");
        return;
      }

      router.push("/");
      router.refresh();
    } finally {
      setIsSigningOut(false);
    }
  };

  if (isPending) {
    return <Spinner size="sm" />;
  }

  if (error) {
    return <span className="text-sm text-red-500">Session error</span>;
  }

  if (!session?.user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/signIn"
          className="text-sm font-semibold text-[#1D281F] hover:text-green-700"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signUp"
          className="rounded-xl bg-[#008C45] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#007338]"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;
  const initial = user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <Dropdown>
      <Button
        variant="ghost"
        className="flex h-auto items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#EAF3EC]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#008C45] text-[16px] font-bold text-white">
          {initial}
        </span>

        <span className="hidden text-[15px] font-semibold text-[#1D281F] sm:block">
          {user.name}
        </span>

        <ChevronDown size={15} className="text-[#7D897F]" />
      </Button>

      <Dropdown.Popover
        placement="bottom end"
        className="w-[260px] rounded-2xl border border-[#E1E8E1] bg-white p-2 shadow-lg"
      >
        <div className="border-b border-[#E9EEE9] px-3 py-3">
          <p className="truncate text-[14px] font-bold text-[#1D281F]">
            {user.name}
          </p>
          <p className="mt-1 truncate text-[12px] text-[#819084]">
            {user.email}
          </p>
        </div>

        <Dropdown.Menu
          aria-label="User account menu"
          onAction={(key) => {
            if (key === "profile") router.push("/profile");

            if (key === "signout") void handleSignOut();
          }}
        >
          <Dropdown.Item id="profile" textValue="Profile">
            <UserRound size={17} />
            <Link href="/profile">
              <Label>আমার প্রোফাইল</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="signout"
            textValue="Sign out"
            isDisabled={isSigningOut}
            className="text-red-600"
          >
            <LogOut size={17} />
            <Label>{isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
