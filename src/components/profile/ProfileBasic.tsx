import ProfileSection from "@/components/profile/ProfileSection";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export default function ProfileBasic() {
  return (
    <ProfileSection title="Basic Information" onEdit={() => null}>
      <>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Profile Picture
            </Text>
          </Box>
          <Avatar name="Arthur Cooper" src="arcoop.png" w={"100px"} h={"100px"} />
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Full Name
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              Arthur Cooper
            </Text>
          </Box>
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Full Name
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              Arthur Cooper
            </Text>
          </Box>
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Date Of Birth
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              December 5th, 1992
            </Text>
          </Box>
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Gender
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              Male
            </Text>
          </Box>
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Gender
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              April 11th, 2023
            </Text>
          </Box>
        </Flex>
      </>
    </ProfileSection>
  );
}
