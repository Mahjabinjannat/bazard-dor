import { IMarket } from "@/types/market";

import { Table } from "@heroui/react";

export function MarketBasedPrice({ markets }: { markets: IMarket[] }) {
  console.log("table: ", markets);
  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD", {
      maximumFractionDigits: 2,
    });

  return (
    <div>
      <h1 className="font-bold mt-10 mb-5">বাজারভিত্তিক আজকের দাম</h1>
      <div className="overflow-hidden rounded-[20px] border border-[#DFE7DF] mb-8">
        <Table className="w-full">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header className="bg-[#FAF9F6]">
                <Table.Column
                  isRowHeader
                  className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]"
                >
                  বাজার
                </Table.Column>
                <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
                  বিভাগ
                </Table.Column>
                <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
                  সর্বনিম্ন
                </Table.Column>
                <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
                  সর্বাধিক
                </Table.Column>
                <Table.Column className="border-b border-[#E1E8E1] px-5 py-4 text-[15px] font-bold text-[#777F77]">
                  গড়
                </Table.Column>
              </Table.Header>
              <Table.Body>
                {markets.map((market, index) => {
                  const bgColor =
                    index % 2 === 0 ? "bg-[#FAF9F6]" : "bg-[#F0F5F0]";
                  const cellStyle = `${bgColor} border-b border-[#E1E8E1] px-5 py-4 text-[15px] last:border-b-0`;
                  return (
                    <Table.Row key={`${market.division}-${market.market}`}>
                      <Table.Cell className={cellStyle}>
                        <span className="font-medium">{market.market}</span>
                      </Table.Cell>

                      <Table.Cell className={`${cellStyle} text-[#777F77]`}>
                        {market.division}
                      </Table.Cell>
                      <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
                        {formatPrice(market.min)} টাকা
                      </Table.Cell>
                      <Table.Cell className={`${cellStyle} text-[#1D281F]`}>
                        {formatPrice(market.max)} টাকা
                      </Table.Cell>
                      <Table.Cell className={`${cellStyle} font-medium text-[#1D281F]`}>
                        {formatPrice((market.min + market.max) / 2)} টাকা
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}
