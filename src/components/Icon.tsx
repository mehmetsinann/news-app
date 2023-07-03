import React from 'react';
import { LeftArrowIcon, RightArrowIcon, UserIcon } from '../constants/icons';

interface IconProps {
  name: string;
}

export const Icon:React.FC<IconProps> = ({name}) => {
  const choosedIcon = () => {
    if(name==='user') return <UserIcon />
    else if(name==='left_arrow') return <LeftArrowIcon />
    else if(name==='right_arrow') return <RightArrowIcon />
    return null;
  };

  return choosedIcon();
};