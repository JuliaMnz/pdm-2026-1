import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    // O GestureHandlerRootView é obrigatório no topo para o react-native-gesture-handler funcionar
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Controla a cor dos ícones da barra de status do celular (bateria, hora, etc.) */}
      <StatusBar style="dark" />
      
      {/* O Stack gerencia as telas de navegação baseadas em arquivos dentro da pasta /app */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f7', // Cor de fundo do cabeçalho combinando com o app
          },
          headerTintColor: '#333', // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false, // Remove a linha/sombra divisória do cabeçalho
        }}
      >
        {/* Configuração da tela principal (index.tsx) */}
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Atividade: Drag & Drop' 
          }} 
        />
      </Stack>
    </GestureHandlerRootView>
  );
}