import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "../Icon";
import { secondaryColor } from "../../constants/appColors";

import { styles } from "./styles";

interface Button {
  onPress?: () => void;
  icon?: string;
}

interface HeaderBarProps {
  title?: string;
  leftButton?: Button | null;
  rightButton?: Button | null;
  backgroundColor?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  title = "News",
  leftButton,
  rightButton,
  backgroundColor = secondaryColor,
}) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }]}
      testID="header-container"
    >
      <View style={styles.headerButton}>
        {leftButton && (
          <TouchableOpacity
            onPress={leftButton.onPress}
            testID="header-left-button"
          >
            {leftButton.icon && <Icon name={leftButton.icon} />}
          </TouchableOpacity>
        )}
      </View>

      <Text
        style={[styles.headerTitle]}
        testID="header-title"
        numberOfLines={1}
      >
        {title}
      </Text>

      <View style={styles.headerButton}>
        {rightButton && (
          <TouchableOpacity
            onPress={rightButton.onPress}
            testID="header-right-button"
          >
            {rightButton.icon && <Icon name={rightButton.icon} />}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
