import React from 'react';

// UI
import {
  Avatar as AvatarNB,
  Pressable,
} from 'native-base';

// Types
import { AvatarProps } from './types';

const Avatar = (props: AvatarProps) => {

  const {
    userName,
    onPress,
    ...rest
  } = props;

  const [firstName, lastName] = userName.split(' ');
  const formattedUserName = firstName[0] + lastName[0];

  return (
    <Pressable
      onPress={onPress}
    >
      <AvatarNB
        size={8}
        { ...rest }
      >
        {formattedUserName}
      </AvatarNB>
    </Pressable>
  );};

export default Avatar;
