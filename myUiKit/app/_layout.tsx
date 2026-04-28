import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper'; // Importante para o UI Kit funcionar

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        {/* 'index' é sua página principal */}
        <Stack.Screen name="index" options={{ title: 'Página Inicial' }} />
        {/* 'detalhes' é sua segunda página */}
        <Stack.Screen name="detalhes" options={{ title: 'Componentes e Controles' }} />
      </Stack>
    </PaperProvider>
  );
}