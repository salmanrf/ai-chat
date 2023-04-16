import { Flex, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Flex py={"12px"} px={"24px"} align={"center"}>
      <Image src="aichat-logo.png" alt="logo" width={"116px"} height={"56px"} />
    </Flex>
  );
}
