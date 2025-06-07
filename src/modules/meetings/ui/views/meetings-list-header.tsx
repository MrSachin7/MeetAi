"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { PlusIcon } from "lucide-react";
import NewMeetingDialog from "./new-meeting-dialog";

const MeetingsListHeader = () => {
  const [isDialogueOpen, setIsDialogueOpen] = React.useState(false);
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
      </div>
    </>
  );
};

export default MeetingsListHeader;
