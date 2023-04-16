import { AddIcon } from "@chakra-ui/icons";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ActionButtonProps extends ButtonProps {}

export default function ActionButton(props: ButtonProps) {
  return (
    <Button
      py={"3"}
      px={"4"}
      alignSelf={"stretch"}
      fontSize={"sm"}
      rounded={"100px"}
      fontWeight={"medium"}
      {...props}
    >
      {props.children}
    </Button>
  );
}
