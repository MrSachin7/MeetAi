"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import React from "react";

const HomeView = () => {
  return (
    <div>
      Home view
      <Button
        variant={"link"}
        onClick={() => {
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                // Redirect to sign-in page after logout
                window.location.href = "/sign-in";
              },
              onError: (error) => {
                console.error("Logout failed:", error);
              },
            },
          });
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default HomeView;
