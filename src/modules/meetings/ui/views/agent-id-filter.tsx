import React, { useState } from "react";
import { useMeetingFilters } from "../../hooks/use-meeting-filters";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import CommandSelect from "@/components/command-select";
import GeneratedAvatar from "@/components/generated-avatar";

const AgentIdFilter = () => {
  const [filters, setFilters] = useMeetingFilters();
  const trpc = useTRPC();

  const [agentSearch, setAgentSearch] = useState("");
  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  return (
    <CommandSelect
      className="h-9"
      placeholder="Agent"
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-2">
            <GeneratedAvatar
              seed={agent.name}
              variant="botttsNeutral"
              className="size-6"
            />
            {agent.name}
          </div>
        ),
      }))}
      onSelect={(value) => setFilters({ agentId: value })}
      onSearch={setAgentSearch}
      value={filters.agentId ?? ""} // Ensure value is a string
    />
  );
};

export default AgentIdFilter;
