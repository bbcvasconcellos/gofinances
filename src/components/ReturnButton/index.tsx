import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler";
import { ReturnIcon } from "./styles";

interface ButtonProps extends BorderlessButtonProps {
  iconName: string;
  onPress?: () => void;
}

export const ReturnButton = ({ iconName, onPress, ...rest }: ButtonProps) => {
  return (
    <BorderlessButton
      onPress={onPress}
      {...rest}
    >
      <ReturnIcon name={iconName} />
    </BorderlessButton>
  )
}