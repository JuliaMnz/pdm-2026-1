import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { 
  adicionarTarefa, 
  getTarefas, 
  atualizarTarefa, // Você deve exportar isso no seu arquivo back4app/index.js
  deletarTarefa     // Você deve exportar isso no seu arquivo back4app/index.js
} from "@/back4app";

export default function TarefasPage() {
  const queryClient = useQueryClient();
  const [descricao, setDescricao] = useState("");

  // 1. QUERY: Buscar tarefas
  const { data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });

  // 2. MUTATION: Adicionar
  const mutationAdd = useMutation({
    mutationFn: adicionarTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
  });

  // 3. MUTATION: Atualizar (Switch)
  const mutationUpdate = useMutation({
    mutationFn: ({ id, concluida }) => atualizarTarefa(id, concluida),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  // 4. MUTATION: Deletar
  const mutationDelete = useMutation({
    mutationFn: deletarTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  async function handleAdicionarTarefaPress() {
    if (descricao.trim() === "") {
      Alert.alert("Erro", "Preencha a descrição");
      return;
    }
    mutationAdd.mutate({ descricao, concluida: false });
  }

  // Componente para renderizar cada linha da lista
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.taskText, item.concluida && styles.strikethroughText]}>
          {item.descricao}
        </Text>
      </View>

      <Switch
        value={item.concluida}
        onValueChange={(value) => mutationUpdate.mutate({ id: item.objectId, concluida: value })}
      />

      <TouchableOpacity
        onPress={() => mutationDelete.mutate(item.objectId)}
        style={styles.deleteButton}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const isLoading = isFetching || mutationAdd.isPending || mutationUpdate.isPending || mutationDelete.isPending;

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="blue" />}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          value={descricao}
          onChangeText={setDescricao}
        />
        <Button
          title="Adicionar"
          onPress={handleAdicionarTarefaPress}
          disabled={mutationAdd.isPending}
        />
      </View>

      <View style={styles.hr} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.objectId}
        renderItem={renderItem}
        style={{ width: "100%" }}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Nenhuma tarefa encontrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  hr: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
    marginVertical: 15,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  taskText: {
    fontSize: 16,
  },
  strikethroughText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
    width: 35,
    alignItems: "center",
  },
});