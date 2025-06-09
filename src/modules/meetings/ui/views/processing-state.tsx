import EmptyState from "@/components/empty-state";
import React from "react";

const ProcessingState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        imageSrc="/processing.svg"
        title="Meeting completed"
        description="The meeting was completed, a summary will be available soon."
      />
    </div>
  );
};

export default ProcessingState;
