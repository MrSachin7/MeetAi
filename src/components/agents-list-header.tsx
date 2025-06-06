"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import NewAgentDialog from "@/modules/agents/ui/views/new-agent-dialog";

const AgentsListHeader = () => {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  return (
    <>
      <NewAgentDialog open={isDialogueOpen} onOpenChange={setIsDialogueOpen} />
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl"> My Agents</h5>

          <Button onClick={() => setIsDialogueOpen(true)} size="sm">
            <PlusIcon />
            New Agent
          </Button>
        </div>
      </div>
    </>
  );
};

export default AgentsListHeader;
