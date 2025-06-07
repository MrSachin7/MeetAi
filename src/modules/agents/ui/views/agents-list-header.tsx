"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import NewAgentDialog from "@/modules/agents/ui/views/new-agent-dialog";
import { useAgentFilters } from "../../hooks/use-agent-filters";
import AgentSearchFilter from "./agents-search-filter";
import { DEAFULT_PAGE } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AgentsListHeader = () => {
  const [filters, setFilters] = useAgentFilters();
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const isAnyFilterModified = !!filters.search;

  const onClearFilters = () => {
    setFilters({
      search: "",
      page: DEAFULT_PAGE,
    });
  };

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
        <ScrollArea>
          <div className="flex items-center gap-x-2 p-1">
            <AgentSearchFilter />
            {isAnyFilterModified && (
              <Button variant="outline" size="sm" onClick={onClearFilters}>
                <XCircleIcon />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default AgentsListHeader;
