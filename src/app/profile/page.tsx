"use client";

import ProfileBasic from "@/components/profile/ProfileBasic";
import ProfileInformation from "@/components/profile/ProfileInformation";
import ProfileLinks from "@/components/profile/ProfileLinks";
import { VStack } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <VStack flexGrow={1} align={"stretch"} py={"8"} px={"70px"} spacing={"36px"}>
      <ProfileLinks />
      <ProfileBasic />
      <ProfileInformation />
    </VStack>
  );
}
