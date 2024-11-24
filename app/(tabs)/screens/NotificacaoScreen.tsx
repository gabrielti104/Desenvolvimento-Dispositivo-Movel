import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importar o useNavigation
import { StackNavigationProp } from '@react-navigation/stack'; // Importar o StackNavigationProp
import { RootStackParamList } from '../index'; // Importar o RootStackParamList corretamente

// Definindo o tipo de navegação para esta tela
type NotificacaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notificacao'>;

const NotificacaoScreen = () => {
  // Usando o useNavigation para navegar entre telas
  const navigation = useNavigation<NotificacaoScreenNavigationProp>();

  // Definindo os estados necessários para a tela de notificação
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState('Exame'); // Tipo de notificação (Exame, Consulta, Medicação)
  const [descricao, setDescricao] = useState('');

  // Função para lidar com a alteração da data
  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  // Função para salvar a notificação
  const handleSave = () => {
    if (!descricao || !tipo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Notificação', 'Notificação salva com sucesso!');
    navigation.navigate('Home'); // Redireciona para a tela inicial após salvar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>+Saúde</Text>
      <Text style={styles.subtitle}>Notificação</Text>

      {/* Seletor de Data */}
      <TouchableOpacity onPress={() => setShow(true)} style={styles.input}>
        <Text style={styles.inputText}>Data: {date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {/* Exibe o DateTimePicker se 'show' for verdadeiro */}
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      {/* Campo de Tipo de Notificação */}
      <Text style={styles.label}>Tipo de Notificação:</Text>
      <TextInput
        style={styles.input}
        value={tipo}
        onChangeText={setTipo}
        placeholder="Exame, Consulta, Medicação"
      />

      {/* Campo de Descrição */}
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição da Notificação"
      />

      {/* Botão de Salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    left: 20,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotificacaoScreen;
