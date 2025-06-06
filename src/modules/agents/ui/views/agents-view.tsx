"use client";
import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import LoadingState from "@/components/loading-state";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import EmptyState from "@/components/empty-state";

const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex-1 pb-4 px-8 md:px-8 flex flex-col gap-y-4">
      {data.length === 0 ? (
        <EmptyState
          title="Create your first Agent"
          description="Create an agent to join your meetings. Each agent will foloow your instructions and can interact with participants during the call."
        />
      ) : (
        <DataTable data={data} columns={columns} />
      )}
    </div>
  );
};

export default AgentsView;

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading agents"
      description="Please wait while we load the agents."
    />
  );
};
