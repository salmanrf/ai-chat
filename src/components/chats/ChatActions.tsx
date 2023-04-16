import {
  VStack,
  Avatar,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

export default function ChatActions() {
  return (
    <VStack py={"4"} px={"6"} spacing={"18px"}>
      <VStack>
        <Avatar name="Arthur Cooper" src="/arcoop.png" size={"xl"} />
        <Text color={"#61646B"} fontSize={"xl"} fontWeight={"semibold"}>
          Arthur Cooper
        </Text>
      </VStack>
      <Button
        leftIcon={<AddIcon width={"16px"} height={"16px"} marginRight={"16px"} />}
        py={"24px"}
        alignSelf={"stretch"}
        background={"black"}
        colorScheme={"blackAlpha"}
        fontSize={"16px"}
        rounded={"100px"}
      >
        New Chat
      </Button>
      <InputGroup>
        <InputLeftElement height={"100%"} paddingLeft={0}>
          <Flex justify={"center"} align={"center"}>
            <SearchIcon width={"16px"} height={"16px"} color={"#8FA0AF"} />
          </Flex>
        </InputLeftElement>
        <Input
          size={"sm"}
          placeholder={"Search"}
          border={"1px solid #CDD5DE"}
          borderRadius={"8px"}
        />
      </InputGroup>
    </VStack>
  );
}
