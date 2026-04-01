import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: '#888',
      headerStyle: { backgroundColor: '#FFF' },
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarStyle: { backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#EEE' },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Formulário',
          tabBarIcon: ({ color }) => <Ionicons name="create" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}