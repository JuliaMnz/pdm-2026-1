import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Minha Bio' }} 
      />
      <Stack.Screen 
        name="detalhes" 
        options={{ 
          presentation: 'modal', 
          title: 'Mais Detalhes',
          headerStyle: { backgroundColor: 'rgba(0,0,0,0.5)' } 
        }} 
      />
    </Stack>
  );
}