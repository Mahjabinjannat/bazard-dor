export default function Loading() {
  return (
    <main
      className="container mx-auto min-h-[600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
      role="status"
      aria-label="হোমপেজ লোড হচ্ছে"
      aria-busy="true"
    >
      <div className="animate-pulse space-y-10">
        {/* Banner skeleton */}
        <div className="rounded-[20px] bg-[#FAF9F6] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-4">
              <div className="h-8 w-3/4 max-w-[400px] rounded-lg bg-gray-200 sm:h-10" />
              <div className="h-4 w-full max-w-[450px] rounded bg-gray-200" />
              <div className="h-4 w-2/3 max-w-[300px] rounded bg-gray-200" />
              <div className="h-10 w-36 rounded-lg bg-gray-200" />
            </div>

            <div className="h-40 w-full rounded-xl bg-gray-200 sm:h-52 md:w-[40%] lg:h-60" />
          </div>
        </div>

        {/* Price update skeleton */}
        <section className="space-y-5">
          <div className="h-7 w-48 rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 rounded-[16px] border border-gray-200 bg-[#FAF9F6] p-5"
              >
                <div className="h-5 w-32 rounded bg-gray-200" />
                <div className="h-8 w-24 rounded bg-gray-200" />
                <div className="h-4 w-40 max-w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </section>

        {/* Increased and decreased price sections */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="space-y-4 rounded-[16px] border border-gray-200 bg-[#FAF9F6] p-5"
            >
              <div className="h-6 w-40 rounded bg-gray-200" />

              {Array.from({ length: 3 }).map((_, row) => (
                <div
                  key={row}
                  className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-200" />
                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded bg-gray-200" />
                      <div className="h-3 w-20 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="h-5 w-14 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* All products heading */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="h-7 w-40 rounded bg-gray-200" />
            <div className="h-9 w-28 rounded-lg bg-gray-200" />
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 rounded-[20px] border border-gray-300 bg-[#FAF9F6] px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-[45px] w-[45px] shrink-0 rounded-[7px] bg-gray-200" />

                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-28 rounded bg-gray-200" />
                    <div className="h-3 w-20 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div className="h-3 w-20 rounded bg-gray-200" />
                    <div className="h-6 w-24 rounded bg-gray-200" />
                  </div>

                  <div className="h-6 w-16 rounded-full bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <span className="sr-only">
        হোমপেজের তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন।
      </span>
    </main>
  );
}
