import React from "react";

import ResponsiveDialog from "@/components/responsive-dialog";
import AgentsForm from "./agents-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues?: AgentGetOne;
}

const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Agent"
      description="Edit agent details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentsForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

export default UpdateAgentDialog;
