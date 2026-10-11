import Link from "next/link";
import { House, SearchX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  show404?: boolean;
}

export default function EmptyState({
  title = "কোনো তথ্য পাওয়া যায়নি!",
  description = "দুঃখিত, আপনার খোঁজা তথ্যটি বর্তমানে উপলব্ধ নেই।",
  show404 = false,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[65vh] items-center justify-center bg-[#F0F5F0] px-4 py-12">
      <div className="w-full max-w-[480px] text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#E0F2E5]">
          <SearchX size={44} strokeWidth={1.5} className="text-[#008C45]" />
        </div>

        {/* 404 indicator */}
        {show404 && (
          <h1 className="mb-3 text-[72px] font-extrabold leading-none text-[#008C45] sm:text-[90px]">
            ৪০৪
          </h1>
        )}

        {/* Message */}
        <h2 className="text-[24px] font-bold text-[#1D281F] sm:text-[30px]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-[360px] text-[14px] leading-7 text-[#718075] sm:text-[16px]">
          {description}
        </p>

        {/* Home button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#008C45] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#007338] hover:shadow-md"
        >
          <House size={18} />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
