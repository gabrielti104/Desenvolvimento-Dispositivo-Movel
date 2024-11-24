import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importar o useNavigation
import { StackNavigationProp } from '@react-navigation/stack'; // Importar o StackNavigationProp
import { RootStackParamList } from '../index'; // Importar o RootStackParamList corretamente

// Definindo o tipo de navegação para esta tela
type ConfiguracaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Configuracao'>;

const ConfiguracaoScreen = () => {
  // Usando o useNavigation para navegar entre telas
  const navigation = useNavigation<ConfiguracaoScreenNavigationProp>();

  // Definindo os estados necessários para a tela de configuração
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para lidar com a alteração do email e senha
  const handleSave = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    
    // Aqui você pode adicionar lógica para salvar as alterações no servidor ou na memória local
    Alert.alert('Sucesso', 'Configurações atualizadas com sucesso!');
    navigation.goBack(); // Voltar para a tela anterior
  };

  return (
    <View style={styles.container}>
      {/* Título +Saúde no canto superior esquerdo */}
      <Text style={styles.title}>+Saúde</Text>

      <Text style={styles.subtitle}>Configurações</Text>

      {/* Campo de E-mail */}
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha atual"
        secureTextEntry
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua nova senha"
        secureTextEntry
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Confirme sua nova senha"
        secureTextEntry
      />


      {/* Botão de Salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
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

export default ConfiguracaoScreen;
