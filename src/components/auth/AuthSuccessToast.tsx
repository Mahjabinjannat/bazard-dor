"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { toast } from "@heroui/react";

export default function AuthSuccessToast() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, isPending } = useSession();
  const shown = useRef(false);

  const authProvider = searchParams.get("auth");

  useEffect(() => {
    if (isPending || shown.current) return;
    if (session?.user && !isPending && !shown.current) {
      if (authProvider === "google" || authProvider === "github") {
        shown.current = true;

        toast.success(
          authProvider === "google"
            ? "Google দিয়ে সফলভাবে সাইন ইন হয়েছে!"
            : "GitHub দিয়ে সফলভাবে সাইন ইন হয়েছে!",
        );

        window.history.replaceState(null, "", "/");
      }
    }
  }, [authProvider, session?.user, isPending, router]);

  return null;
}
