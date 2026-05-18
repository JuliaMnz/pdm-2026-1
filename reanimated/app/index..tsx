import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolateColor,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Definições de tamanho das zonas de Drop
const COLUMN_WIDTH = SCREEN_WIDTH * 0.44;
const DROP_ZONE_HEIGHT = SCREEN_HEIGHT * 0.45; 
const DROP_ZONE_TOP = 100; // Distância do topo onde começam as colunas

const INITIAL_ITEMS = ['Brócolis', 'Pizza', 'Chuva', 'Praia', 'Café'];

export default function DragActivity() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [currentIdx, setCurrentIdx] = useState(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const currentItem = items[currentIdx];

  const nextItem = (column: 'LIKE' | 'DISLIKE') => {
    console.log(`Item "${currentItem}" movido para: ${column}`);
    if (currentIdx < items.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      alert('Você classificou todos os itens! 🎉');
      setCurrentIdx(0); 
    }
    // Reseta as posições para o próximo item
    translateX.value = 0;
    translateY.value = 0;
    scale.value = 1;
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withSpring(1.1); // Dá um leve "pop" ao puxar
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      scale.value = withSpring(1);

      // Pegamos a posição EXATA do dedo na tela
      const fingerX = event.absoluteX;
      const fingerY = event.absoluteY;

      // Verifica se o dedo está verticalmente dentro da área das colunas
      const insideYZone = fingerY >= DROP_ZONE_TOP && fingerY <= DROP_ZONE_TOP + DROP_ZONE_HEIGHT;

      // Verifica se o dedo está na coluna da ESQUERDA (Não Gosto)
      const insideLeftColumn = fingerX > 16 && fingerX < 16 + COLUMN_WIDTH;

      // Verifica se o dedo está na coluna da DIREITA (Gosto)
      const insideRightColumn = fingerX > SCREEN_WIDTH - 16 - COLUMN_WIDTH && fingerX < SCREEN_WIDTH - 16;

      if (insideYZone && insideLeftColumn) {
        // "Gruda" jogando o card para a esquerda e passa para o próximo
        translateX.value = withSpring(-SCREEN_WIDTH / 3, {}, () => {
          runOnJS(nextItem)('DISLIKE');
        });
      } else if (insideYZone && insideRightColumn) {
        // "Gruda" jogando o card para a direita e passa para o próximo
        translateX.value = withSpring(SCREEN_WIDTH / 3, {}, () => {
          runOnJS(nextItem)('LIKE');
        });
      } else {
        // Se soltar em qualquer outro lugar fora das caixas, volta para o início
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  // Estilo animado do Cartão (Posição + Escala + Cor Dinâmica)
  const animatedStyle = useAnimatedStyle(() => {
    // Interpolação de cor baseada no arrasto horizontal (X)
    const backgroundColor = interpolateColor(
      translateX.value,
      [-SCREEN_WIDTH / 3, 0, SCREEN_WIDTH / 3],
      ['#ffccc7', '#ffffff', '#d9f7be'] // Vermelho claro se for pra esquerda, Branco no centro, Verde claro se for pra direita
    );

    return {
      backgroundColor,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      {/* Áreas de Drop (Colunas de Gosto / Não Gosto) */}
      <View style={styles.columnsContainer}>
        <View style={[styles.column, styles.dislikeColumn]}>
          <Text style={styles.columnText}>Coisas que{"\n"}NÃO gosto ❌</Text>
        </View>

        <View style={[styles.column, styles.likeColumn]}>
          <Text style={styles.columnText}>Coisas que{"\n"}GOSTO ❤️</Text>
        </View>
      </View>

      {/* Área onde o cartão nasce */}
      <View style={styles.cardContainer}>
        {currentItem ? (
          <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.card, animatedStyle]}>
              <Text style={styles.cardText}>{currentItem}</Text>
            </Animated.View>
          </GestureDetector>
        ) : (
          <Text style={styles.emptyText}>Nenhum item restante</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
    alignItems: 'center',
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    height: DROP_ZONE_HEIGHT,
    position: 'absolute',
    top: DROP_ZONE_TOP,
    zIndex: 1,
  },
  column: {
    width: COLUMN_WIDTH,
    height: '100%',
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  dislikeColumn: {
    borderColor: '#ff4d4f',
    backgroundColor: 'rgba(255, 77, 79, 0.03)',
  },
  likeColumn: {
    borderColor: '#52c41a',
    backgroundColor: 'rgba(82, 196, 26, 0.03)',
  },
  columnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
  },
  cardContainer: {
    position: 'absolute',
    bottom: 60, // Posiciona o card na parte inferior para dar espaço para arrastá-lo para cima nas colunas
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  card: {
    width: 200,
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },
});