import { Center } from "@mantine/core";
import { Outlet } from "@tanstack/react-router";

export default function AuthLayout() {
  return (
    <Center mih="100vh" pos="relative">
      <Outlet />
    </Center>
  );
}
