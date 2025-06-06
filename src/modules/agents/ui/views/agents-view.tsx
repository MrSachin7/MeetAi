"use client";
import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import LoadingState from "@/components/loading-state";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import EmptyState from "@/components/empty-state";
import { useAgentFilters } from "../../hooks/use-agent-filters";
import DataPagination from "./data-pagination";
import { useRouter } from "next/navigation";

const AgentsView = () => {
  const [filters, setFilters] = useAgentFilters();
  const trpc = useTRPC();
  const router = useRouter();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-8 md:px-8 flex flex-col gap-y-4">
      {data.items.length === 0 ? (
        <EmptyState
          title="Create your first Agent"
          description="Create an agent to join your meetings. Each agent will foloow your instructions and can interact with participants during the call."
        />
      ) : (
        <>
          <DataTable
            data={data.items}
            columns={columns}
            onRowClick={(row) => router.push(`/agents/${row.id}`)}
          />
          <DataPagination
            page={filters.page}
            totalPages={data.totalPages}
            onPageChange={(page) => setFilters({ page })}
          />
        </>
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
