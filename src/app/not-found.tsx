import EmptyState from "@/components/shared/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      show404
      title="আপনার খোঁজা পেজটি পাওয়া যায়নি!"
      description="দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।"
    />
  );
}
