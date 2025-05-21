import { PRIMARY_COLOR, URGENT, WHITE } from '@/shared/styles/color.style';
import { StyleSheet } from 'react-native';

interface StyleProps {
  variant: 'filled' | 'outlined' | 'normal' | 'warning';
  color: 'primary' | 'urgent' | 'default';
  disabled: boolean;
}

export const buttonStyles = ({ variant, color, disabled }: StyleProps) => {
  const base = {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const filled = {
    backgroundColor: disabled ? URGENT : PRIMARY_COLOR,
  };

  const outlined = {
    backgroundColor: WHITE,
    borderWidth: 1.5,
    borderColor: PRIMARY_COLOR,
  };

  const normal = {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: '#ccc',
  };

  const warning = {
    backgroundColor: disabled ? '#FDEDEC' : 'rgba(244, 67, 54, 0.2)',
  };

  const variantStyles = {
    filled,
    outlined,
    normal,
    warning,
  };

  const labelStyle = {
    color:
      variant === 'filled'
        ? WHITE
        : variant === 'warning'
        ? URGENT
        : disabled
        ? URGENT
        : PRIMARY_COLOR,
    fontWeight: '600',
    fontSize: 14,
  };

  return StyleSheet.create({
    container: {
      ...base,
      ...(variantStyles[variant] ?? filled),
      opacity: disabled ? 0.7 : 1,
    },
    label: labelStyle,
  });
};
