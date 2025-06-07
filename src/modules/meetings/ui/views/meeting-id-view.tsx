"use client";
import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { useState } from "react";
import MeetingIdViewHeader from "./meeting-id-view-header";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useConfirm } from "@/modules/agents/hooks/useConfirm";
import UpdateMeetingDialog from "./update-meeting-dialog";
import UpdateAgentDialog from "@/modules/agents/ui/views/update-agent-dialog";
interface MeetingIdViewProps {
  meetingId: string;
}

const MeetingIdView = ({ meetingId }: MeetingIdViewProps) => {
  const trpc = useTRPC();
  const router = useRouter();
  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );
  const queryClient = useQueryClient();

  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    "Are you sure?",
    "The following action will delete the meeting permanently."
  );

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        router.push("/meetings");
      },
      onError: (error) => {
        toast.error(error.message || "Error removing meeting");
      },
    })
  );

  const handleRemove = async () => {
    const ok = await confirmRemove();
    if (!ok) return;
    await removeMeeting.mutateAsync({ id: meetingId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateMeetingDialog
        open={updateMeetingDialogOpen}
        onOpenChange={setUpdateMeetingDialogOpen}
        initialValues={data}
      />
      <div className="flex-1 px-4 py-4 md:px-8 flex flex-col gap-y-4">
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => {
            setUpdateMeetingDialogOpen(true);
          }}
          onRemove={handleRemove}
        />
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
};

export const MeetingIdViewLoading = () => {
  return (
    <LoadingState
      title="Loading meeting"
      description="This may take a few seconds, please wait..."
    />
  );
};

export const MeetingIdViewError = () => {
  return (
    <ErrorState
      title="Error loading meeting"
      description="There was an error loading the meeting. Please try again later."
    />
  );
};
export default MeetingIdView;
