import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
          height: 80,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar-page"
        options={{
          title: '캘린더',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-study-page"
        options={{
          title: '내 스터디',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done-outline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-cert-page"
        options={{
          title: '내 자격증',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more-page"
        options={{
          title: '더보기',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
