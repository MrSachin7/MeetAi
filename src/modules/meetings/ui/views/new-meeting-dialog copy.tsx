import React from "react";

import ResponsiveDialog from "@/components/responsive-dialog";
import MeetingsForm from "./meetings-form";
import { useRouter } from "next/navigation";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewMeetingDialog = ({ open, onOpenChange }: NewMeetingDialogProps) => {
  const router = useRouter();
  return (
    <ResponsiveDialog
      title="New meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingsForm
        onSuccess={(id) => {
          onOpenChange(false);
          if (!id) return;
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};

export default NewMeetingDialog;
