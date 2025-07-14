import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { InputProps } from '@types/index';
import { theme, commonStyles } from '@styles/theme';

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  autoCapitalize = 'sentences',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        selectionColor={theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.sm,
  },
  label: {
    ...commonStyles.label,
  },
  input: {
    ...commonStyles.input,
    minHeight: 48,
  },
  multilineInput: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: theme.spacing.md,
  },
});

export default Input;