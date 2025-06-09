import EmptyState from "@/components/empty-state";
import React from "react";

const CancelledState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        imageSrc="/cancelled.svg"
        title="Meeting is cancelled"
        description="The meeting has been cancelled and will not take place."
      />
    </div>
  );
};

export default CancelledState;
