import Logo from "@/components/Logo";
import { PinIcon } from "@/icons/PinIcon";
import { VStack, Flex, Avatar, Icon, Text } from "@chakra-ui/react";
import ChatActions from "@/components/chats/ChatActions";

export default function ChatSidebar() {
  return (
    <VStack
      flexBasis={"22vw"}
      flexShrink={0}
      boxShadow={`0px 0px 4px rgba(2, 17, 37, 0.04), 2px 0px 8px rgba(2, 17, 37, 0.04), 6px 0px 16px rgba(2, 17, 37, 0.04);`}
      align={"stretch"}
    >
      <Logo />
      <ChatActions />
      <VStack px={"24px"} align={"stretch"} spacing={0}>
        <Flex pt={"16px"} pb={"18px"}>
          <Avatar src="/victoria-legrand-crp.jpg" width={"40px"} height={"40px"} flexShrink={0} />
          <Flex
            ml={"8px"}
            direction={"column"}
            justify={"space-between"}
            align={"start"}
            flexGrow={1}
          >
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              Victoria Legrand
            </Text>
            <Text fontSize={"14px"} color={"#616C76"} noOfLines={1}>
              Gather matters of the heart, so we can act a fool
            </Text>
          </Flex>
          <VStack ml={"8px"} align={"end"} flexShrink={0}>
            <Text fontSize={"12px"} color={"#8FA0AF"} noOfLines={1}>
              10:49 AM
            </Text>
            <Icon as={PinIcon} />
          </VStack>
        </Flex>
        <Flex pt={"16px"} pb={"18px"}>
          <Avatar src="/john-lennon.jpg" width={"40px"} height={"40px"} flexShrink={0} />
          <Flex
            ml={"8px"}
            direction={"column"}
            justify={"space-between"}
            align={"start"}
            flexGrow={1}
          >
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              John Lennon
            </Text>
            <Text fontSize={"14px"} color={"#616C76"} noOfLines={1}>
              {"The monster's gone, it's on the run, and your daddy's here"}
            </Text>
          </Flex>
          <VStack ml={"8px"} align={"end"} flexShrink={0} color={"#4277FF"}>
            <Text fontSize={"12px"} noOfLines={1}>
              10:49 AM
            </Text>
            <Flex
              width={"20px"}
              height={"20px"}
              background={"#4277FF"}
              color={"white"}
              justify={"center"}
              align={"center"}
              fontSize={"12px"}
              rounded={"full"}
            >
              3
            </Flex>
          </VStack>
        </Flex>
        <Flex pt={"16px"} pb={"18px"}>
          <Avatar src="/victoria-legrand-crp.jpg" width={"40px"} height={"40px"} flexShrink={0} />
          <Flex
            ml={"8px"}
            direction={"column"}
            justify={"space-between"}
            align={"start"}
            flexGrow={1}
          >
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              Victoria Legrand
            </Text>
            <Text fontSize={"14px"} color={"#616C76"} noOfLines={1}>
              Gather matters of the heart, so we can act a fool
            </Text>
          </Flex>
          <VStack ml={"8px"} align={"end"} flexShrink={0}>
            <Text fontSize={"12px"} color={"#8FA0AF"} noOfLines={1}>
              10:49 AM
            </Text>
            <Icon as={PinIcon} />
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}
