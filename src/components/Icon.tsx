import React from 'react';
import { BackIcon, UserIcon } from '../constants/icons';

interface IconProps {
  name: string;
}

export const Icon:React.FC<IconProps> = ({name}) => {
  const choosedIcon = () => {
    if(name==='user') return <UserIcon />
    else if(name==='back') return <BackIcon />
    return null;
  };

  return choosedIcon();
};