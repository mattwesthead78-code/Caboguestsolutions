import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: function AppRedirect() {
    return <Navigate to="/platform" replace />;
  },
});
