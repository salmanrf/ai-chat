import ProfileSection from "@/components/profile/ProfileSection";
import { Flex, Text, Box } from "@chakra-ui/react";

export default function ProfileInformation() {
  return (
    <ProfileSection title="Personal Information" onEdit={() => null}>
      <>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Username
            </Text>
          </Box>
          <Box w={"200px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              arthurcooper11
            </Text>
          </Box>
        </Flex>
        <Flex justify={"start"}>
          <Box w={"200px"}>
            <Text color={"#61646B"} fontSize={"sm"} fontWeight={"normal"}>
              Bio
            </Text>
          </Box>
          <Box maxW={"600px"}>
            <Text color={"black"} fontSize={"lg"} fontWeight={"medium"}>
              Arthur is a data scientist with a passion for extracting insights and making informed
              decisions through data analysis. When he is not working, he enjoys pursuing his
              hobbies of hiking and photography, which allow him to explore new places and capture
              the beauty of the natural world.
            </Text>
          </Box>
        </Flex>
      </>
    </ProfileSection>
  );
}
