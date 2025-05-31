"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const HomeView = () => {
  const router = useRouter();
  const trpc = useTRPC();

  const { data } = useQuery(
    trpc.hello.queryOptions({
      text: "Hello from TRPC!",
    })
  );

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign Out
      </Button>

      {data && data.greeting}
    </div>
  );
};

export default HomeView;
