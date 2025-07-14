import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ButtonProps } from '@types/index';
import { theme, commonStyles } from '@styles/theme';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
}) => {
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={[styles.container, style, disabled && styles.disabled]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Animated.View style={animatedStyle}>
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>{children}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.secondary,
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Animated.View style={animatedStyle}>
        <Text style={styles.buttonText}>{children}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  gradientButton: {
    ...commonStyles.button,
  },
  secondary: {
    backgroundColor: theme.colors.surface,
    ...commonStyles.button,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonText: {
    ...commonStyles.buttonText,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;