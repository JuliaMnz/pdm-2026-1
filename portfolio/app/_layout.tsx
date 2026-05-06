import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#2563eb',
      tabBarInactiveTintColor: '#64748b',
      headerStyle: { backgroundColor: '#2563eb' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="academica" 
        options={{ 
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => <Ionicons name="school-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profissional" 
        options={{ 
          title: 'Profissional',
          tabBarIcon: ({ color }) => <Ionicons name="briefcase-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="projetos" 
        options={{ 
          title: 'Projetos',
          tabBarIcon: ({ color }) => <Ionicons name="code-slash-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="sobre" 
        options={{ 
          title: 'Sobre o App',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}