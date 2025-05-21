import { BackIcon } from '@/shared/icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Pressable onPress={router.back} style={styles.container}>
      <BackIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
    gap: 4,
  },
  label: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});
