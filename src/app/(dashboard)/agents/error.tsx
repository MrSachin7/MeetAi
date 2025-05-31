"use client";

import ErrorState from "@/components/error-state";
import React from "react";

const ErrorPage = () => {
  return (
    <ErrorState
      title="Error loading agents"
      description="There was an error loading the agents. Please try again later."
    />
  );
};

export default ErrorPage;
