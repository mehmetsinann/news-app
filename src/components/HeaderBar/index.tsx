import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View} from "react-native";

import { styles } from "./styles"
import { Icon } from "../Icon";

interface Button{
  onPress?: () => void;
  icon?: string;
}

interface HeaderBarProps {
  title: string;
  leftButton?: Button;
  rightButton?: Button;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({title, leftButton, rightButton}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.headerButton}>
        {leftButton && (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.icon && (
              <Icon name={leftButton.icon} />
            )}
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.headerTitle}>{title}</Text>
      
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