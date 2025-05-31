import React, { Dispatch } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface DashboardCommandProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandDialog>
  );
};

export default DashboardCommand;
