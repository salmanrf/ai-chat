import ActionButton from "@/components/ActionButton";
import { HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function ProfileLinks() {
  return (
    <HStack spacing={"4"}>
      <Link href={"/profile"}>
        <ActionButton colorScheme="blackAlpha" background={"blackAlpha.900"}>
          My Profile
        </ActionButton>
      </Link>
      <Link href={"/profile/settings"}>
        <ActionButton colorScheme="gray" background={"#ECECEC"}>
          Settings
        </ActionButton>
      </Link>
    </HStack>
  );
}
