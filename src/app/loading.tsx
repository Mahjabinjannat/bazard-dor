export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      <div className="animate-pulse space-y-5">
        <div className="h-40 rounded-xl bg-gray-200" />
        <div className="h-40 rounded-xl bg-gray-200" />
        <div className="h-80 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
}
