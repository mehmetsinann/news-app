import React from 'react';
import { LeftArrowIcon, LoginIcon, RightArrowIcon, SaveIcon, UpArrowIcon, UserIcon } from '../constants/icons';

interface IconProps {
  name: string;
}

export const Icon:React.FC<IconProps> = ({name}) => {
  const choosedIcon = () => {
    if(name==='user') return <UserIcon />
    else if(name==='left_arrow') return <LeftArrowIcon />
    else if(name==='right_arrow') return <RightArrowIcon />
    else if(name==='up_arrow') return <UpArrowIcon />
    else if(name==="save") return <SaveIcon />
    else if(name==="login") return <LoginIcon />
    return null;
  };

  return choosedIcon();
};