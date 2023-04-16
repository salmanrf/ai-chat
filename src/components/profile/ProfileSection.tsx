import { EditIcon } from "@chakra-ui/icons";
import { VStack, Flex, Heading, HStack, Icon, Divider, Avatar, Text, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  onEdit?(): void;
  editable?: boolean;
  children: JSX.Element;
}

export default function ProfileSection({ title, onEdit, children, editable = true }: Props) {
  return (
    <VStack mt={"9"} align={"stretch"}>
      <Flex justify={"space-between"} align={"center"}>
        <Heading size={"7xl"} fontWeight={"semibold"}>
          {title}
        </Heading>
        {editable && (
          <HStack onClick={onEdit} align={"center"} spacing={"1.5"} cursor={"pointer"}>
            <Icon as={EditIcon} ml={"100px"} />
            <Text fontSize={"sm"} fontWeight={"medium"}>
              Edit
            </Text>
          </HStack>
        )}
      </Flex>
      <Divider h={"0.5"} background={"#8D8D8D"} />
      <VStack py={"8"} align={"start"} spacing={"30px"}>
        {children}
      </VStack>
    </VStack>
  );
}
