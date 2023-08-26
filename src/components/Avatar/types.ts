import { IAvatarProps } from "native-base";

export interface AvatarProps extends IAvatarProps {
  userName: string;
  onPress?: () => void;
}
