// "use client";

// import type { Selection } from "@heroui/react";
// import { Button, Dropdown, Header, Label } from "@heroui/react";
// import { IoCaretDown } from "react-icons/io5";

// export default function DropdownComponent({
//   sortOrder,
//   setSortOrder,
// }: {
//   sortOrder: string;
//   setSortOrder: (value: string) => void;
// }) {
//   const selected = new Set([sortOrder]);

//   const handleSelectionChange = (keys: Selection) => {
//     if (keys === "all") return;

//     const value = String(Array.from(keys)[0] ?? "default");
//     setSortOrder(value);
//   };

//   return (
//     <Dropdown>
//       <Button variant="secondary" className="text-black">
//         {sortOrder === "default"
//           ? "Default"
//           : sortOrder === "ascending"
//             ? "Ascending"
//             : "Descending"}

//         <IoCaretDown />
//       </Button>

//       <Dropdown.Popover className="min-w-[256px]">
//         <Dropdown.Menu
//           selectedKeys={selected}
//           selectionMode="single"
//           onSelectionChange={handleSelectionChange}
//         >
//           <Dropdown.Section>
//             <Header>Select an option</Header>
//           </Dropdown.Section>

//           <Dropdown.Item id="default" textValue="Default">
//             <Dropdown.ItemIndicator />
//             <Label>Default</Label>
//           </Dropdown.Item>

//           <Dropdown.Item id="ascending" textValue="Ascending">
//             <Dropdown.ItemIndicator />
//             <Label>Ascending</Label>
//           </Dropdown.Item>

//           <Dropdown.Item id="descending" textValue="Descending">
//             <Dropdown.ItemIndicator />
//             <Label>Descending</Label>
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown.Popover>
//     </Dropdown>
//   );
// }

"use client";

import type { Selection } from "@heroui/react";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { IoCaretDown } from "react-icons/io5";

export default function DropdownComponent({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}) {
  const selected = new Set([sortOrder]);

  const handleSelectionChange = (keys: Selection) => {
    if (keys === "all") return;

    const value = String(Array.from(keys)[0] ?? "default");
    setSortOrder(value);
  };

  const sortLabels: Record<string, string> = {
    default: "ডিফল্ট",
    ascending: "দাম: কম থেকে বেশি",
    descending: "দাম: বেশি থেকে কম",
  };

  return (
    <Dropdown>
      <Button
        variant="secondary"
        className="flex h-9 min-w-[110px] items-center justify-between gap-2 rounded-lg px-3 text-[12px] text-[#1D281F] sm:h-10 sm:min-w-[135px] sm:px-4 sm:text-[14px]"
      >
        {sortLabels[sortOrder] ?? sortLabels.default}

        <IoCaretDown className="shrink-0 text-[14px]" />
      </Button>

      <Dropdown.Popover
        placement="bottom end"
        className="w-[min(220px,calc(100vw-32px))] rounded-xl border border-[#DDE7DE] bg-white p-2 shadow-lg sm:w-[256px]"
      >
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={handleSelectionChange}
        >
          <Dropdown.Section>
            <Header>সাজানোর ধরন নির্বাচন করুন</Header>
          </Dropdown.Section>

          <Dropdown.Item id="default" textValue="ডিফল্ট">
            <Dropdown.ItemIndicator />
            <Label>ডিফল্ট</Label>
          </Dropdown.Item>

          <Dropdown.Item id="ascending" textValue="দাম: কম থেকে বেশি">
            <Dropdown.ItemIndicator />
            <Label>দাম: কম থেকে বেশি</Label>
          </Dropdown.Item>

          <Dropdown.Item id="descending" textValue="দাম: বেশি থেকে কম">
            <Dropdown.ItemIndicator />
            <Label>দাম: বেশি থেকে কম</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
