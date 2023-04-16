"use client";

import ChatSidebar from "@/components/chats/ChatSidebar";
import { Flex } from "@chakra-ui/react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w={"100vw"} minH={"100vh"}>
      <ChatSidebar />
      {children}
    </Flex>
  );
}
