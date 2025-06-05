import React, { Dispatch } from "react";
import {
  CommandResponsiveDialog,
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
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem></CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};

export default DashboardCommand;
