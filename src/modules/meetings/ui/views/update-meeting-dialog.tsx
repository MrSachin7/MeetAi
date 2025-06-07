import React from "react";

import ResponsiveDialog from "@/components/responsive-dialog";
import MeetingsForm from "./meetings-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
}

const UpdateMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit meeting"
      description="Edit meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingsForm
        onSuccess={(id) => {
          onOpenChange(false);
          if (!id) return;
        }}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

export default UpdateMeetingDialog;
