"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import NewMeetingDialog from "./new-meeting-dialog";
import MeetingsSearchFilter from "./meetings-search-filter";
import StatusFilter from "./status-filter";
import AgentIdFilter from "./agent-id-filter";
import { useMeetingFilters } from "../../hooks/use-meeting-filters";
import { set } from "date-fns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const MeetingsListHeader = () => {
  const [filters, setFilters] = useMeetingFilters();
  const [isDialogueOpen, setIsDialogueOpen] = React.useState(false);

  const isAnyFilterModified =
    !!filters.status || !!filters.agentId || !!filters.search;

  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: 1,
    });
  };
  return (
    <>
      <NewMeetingDialog
        open={isDialogueOpen}
        onOpenChange={setIsDialogueOpen}
      />
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl"> My Meetings</h5>

          <Button size="sm" onClick={() => setIsDialogueOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <ScrollArea>
          <div className="flex items-center gap-x-2 p-1">
            <MeetingsSearchFilter />
            <StatusFilter />
            <AgentIdFilter />

            {isAnyFilterModified && (
              <Button variant="outline" onClick={onClearFilters}>
                <XCircleIcon className="size-4 " />
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

export default MeetingsListHeader;
