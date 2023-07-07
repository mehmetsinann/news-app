import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View} from "react-native";

import { Icon } from "../Icon";
import { secondaryColor } from "../../constants/appColors";

import { styles } from "./styles"

interface Button{
  onPress?: () => void;
  icon?: string;
}

interface HeaderBarProps {
  title: string;
  leftButton?: Button | null;
  rightButton?: Button | null;
  backgroundColor?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({title, leftButton, rightButton, backgroundColor = secondaryColor}) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <View style={styles.headerButton}>
        {leftButton && (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.icon && (
              <Icon name={leftButton.icon} />
            )}
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.headerTitle]}>{title}</Text>
      
      <View style={styles.headerButton}>
        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            {rightButton.icon && (
              <Icon name={rightButton.icon} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};