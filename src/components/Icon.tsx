import React from 'react';
import { DeleteIcon, LeftArrowIcon, LoginIcon, RightArrowIcon, SaveIcon, UpArrowIcon, UserIcon } from '../constants/icons';

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
    else if(name==="delete") return <DeleteIcon />
    return null;
  };

  return choosedIcon();
};