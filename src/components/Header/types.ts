export interface HeaderProps {
  screenName: string;
  userName: string;
  onAvatarPress: () => void;
  onBackPress: () => void;
  onOptionsPress?: () =>void;
}
