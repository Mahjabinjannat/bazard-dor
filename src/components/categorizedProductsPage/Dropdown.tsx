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

  return (
    <Dropdown>
      <Button variant="secondary" className="text-black">
        {sortOrder === "default"
          ? "Default"
          : sortOrder === "ascending"
            ? "Ascending"
            : "Descending"}

        <IoCaretDown />
      </Button>

      <Dropdown.Popover className="min-w-[256px]">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={handleSelectionChange}
        >
          <Dropdown.Section>
            <Header>Select an option</Header>
          </Dropdown.Section>

          <Dropdown.Item id="default" textValue="Default">
            <Dropdown.ItemIndicator />
            <Label>Default</Label>
          </Dropdown.Item>

          <Dropdown.Item id="ascending" textValue="Ascending">
            <Dropdown.ItemIndicator />
            <Label>Ascending</Label>
          </Dropdown.Item>

          <Dropdown.Item id="descending" textValue="Descending">
            <Dropdown.ItemIndicator />
            <Label>Descending</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}