import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { buttonStyles } from './button.style';

type Variant = 'filled' | 'outlined' | 'normal' | 'warning';
type Color = 'primary' | 'urgent' | 'default';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: Variant;
  color?: Color;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  children,
  onPress,
  variant = 'filled',
  color = 'primary',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) => {
  const { container, label } = buttonStyles({ variant, color, disabled });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[container, style]}
      activeOpacity={0.8}
    >
      <Text style={[label, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};
