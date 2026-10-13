// import { IMarket } from "@/types/market";

// import { Table } from "@heroui/react";

// export function MarketBasedPrice({ markets }: { markets: IMarket[] }) {
//   console.log("table: ", markets);
//   const formatPrice = (price: number) =>
//     price.toLocaleString("bn-BD", {
//       maximumFractionDigits: 2,
//     });

//   return (
//     <div>
//       <h1 className="font-bold mt-10 mb-5">বাজারভিত্তিক আজকের দাম</h1>
//       <div className="overflow-hidden rounded-[20px] border border-[#DFE7DF] mb-8">
//         <Table className="w-full">
//           <Table.ScrollContainer>
//             <Table.Content aria-label="Team members" className="min-w-[600px]">
//               <Table.Header className="bg-[#FAF9F6]">
//                 <Table.Column
//                   isRowHeader
//                   className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]"
//                 >
//                   বাজার
//                 </Table.Column>
//                 <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
//                   বিভাগ
//                 </Table.Column>
//                 <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
//                   সর্বনিম্ন
//                 </Table.Column>
//                 <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
//                   সর্বাধিক
//                 </Table.Column>
//                 <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
//                   গড়
//                 </Table.Column>
//               </Table.Header>
//               <Table.Body>
//                 {markets.map((market, index) => {
//                   const bgColor =
//                     index % 2 === 0 ? "bg-[#FAF9F6]" : "bg-[#F0F5F0]";
//                   const cellStyle = `${bgColor} border-b border-[#E1E8E1] px-5 py-4 text-[15px] last:border-b-0`;
//                   return (
//                     <Table.Row key={`${market.division}-${market.market}`}>
//                       <Table.Cell className={cellStyle}>
//                         <span className="font-medium">{market.market}</span>
//                       </Table.Cell>

//                       <Table.Cell className={`${cellStyle} text-[#777F77]`}>
//                         {market.division}
//                       </Table.Cell>
//                       <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
//                         {formatPrice(market.min)} টাকা
//                       </Table.Cell>
//                       <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
//                         {formatPrice(market.max)} টাকা
//                       </Table.Cell>
//                       <Table.Cell className={`${cellStyle} font-medium text-[#1D281F]`}>
//                         {formatPrice((market.min + market.max) / 2)} টাকা
//                       </Table.Cell>
//                     </Table.Row>
//                   );
//                 })}
//               </Table.Body>
//             </Table.Content>
//           </Table.ScrollContainer>
//         </Table>
//       </div>
//     </div>
//   );
// }

import { IMarket } from "@/types/market";
import { Table } from "@heroui/react";
import { formatBanglaNumber } from "@/lib/formatBangla";

export function MarketBasedPrice({ markets }: { markets: IMarket[] }) {
  return (
    <section className="min-w-0">
      <h2 className="mb-4 mt-8 text-[18px] font-bold text-[#1D281F] sm:mb-5 sm:mt-10 sm:text-[20px]">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="mb-6 max-w-full overflow-x-auto rounded-[14px] border border-[#DFE7DF] sm:mb-8 sm:rounded-[20px]">
        <Table className="w-full">
          <Table.ScrollContainer>
            <Table.Content
              aria-label="বাজারভিত্তিক আজকের দাম"
              className="min-w-[600px] lg:min-w-full"
            >
              <Table.Header className="bg-[#FAF9F6]">
                <Table.Column
                  isRowHeader
                  className="whitespace-nowrap border-b border-[#E1E8E1] px-3 py-3 text-[12px] font-bold text-[#777F77] sm:px-5 sm:py-4 sm:text-[15px]"
                >
                  বাজার
                </Table.Column>

                <Table.Column className="whitespace-nowrap border-b border-[#E1E8E1] px-3 py-3 text-[12px] font-bold text-[#777F77] sm:px-5 sm:py-4 sm:text-[15px]">
                  বিভাগ
                </Table.Column>

                <Table.Column className="whitespace-nowrap border-b border-[#E1E8E1] px-3 py-3 text-[12px] font-bold text-[#777F77] sm:px-5 sm:py-4 sm:text-[15px]">
                  সর্বনিম্ন
                </Table.Column>

                <Table.Column className="whitespace-nowrap border-b border-[#E1E8E1] px-3 py-3 text-[12px] font-bold text-[#777F77] sm:px-5 sm:py-4 sm:text-[15px]">
                  সর্বাধিক
                </Table.Column>

                <Table.Column className="whitespace-nowrap border-b border-[#E1E8E1] px-3 py-3 text-[12px] font-bold text-[#777F77] sm:px-5 sm:py-4 sm:text-[15px]">
                  গড়
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {markets.map((market, index) => {
                  const bgColor =
                    index % 2 === 0 ? "bg-[#FAF9F6]" : "bg-[#F0F5F0]";

                  const cellStyle = `
                    ${bgColor}
                    whitespace-nowrap
                    border-b border-[#E1E8E1]
                    px-3 py-3
                    text-[12px]
                    sm:px-5 sm:py-4 sm:text-[15px]
                  `;

                  return (
                    <Table.Row key={`${market.division}-${market.market}`}>
                      <Table.Cell className={cellStyle}>
                        <span className="font-medium">{market.market}</span>
                      </Table.Cell>

                      <Table.Cell className={`${cellStyle} text-[#777F77]`}>
                        {market.division}
                      </Table.Cell>

                      <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
                        {formatBanglaNumber(market.min)} টাকা
                      </Table.Cell>

                      <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
                        {formatBanglaNumber(market.max)} টাকা
                      </Table.Cell>

                      <Table.Cell
                        className={`${cellStyle} font-medium text-[#1D281F]`}
                      >
                        {formatBanglaNumber((market.min + market.max) / 2)} টাকা
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

      <p className="-mt-3 mb-6 text-center text-[11px] text-gray-500 sm:hidden">
        ← সম্পূর্ণ টেবিল দেখতে পাশে স্ক্রল করুন →
      </p>
    </section>
  );
}
