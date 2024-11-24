import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

const CadastroScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [form, setForm] = useState({
    nome: '',
    nomeMae: '',
    dataNascimento: '',
    telefone: '',
    cartaoSUS: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleInputChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const hasEmptyFields = Object.values(form).some((value) => value.trim() === '');
    if (hasEmptyFields) {
      Alert.alert('Aviso', 'Todos os campos devem ser preenchidos!');
      return;
    }

    // Simula sucesso no cadastro
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'), // Retorna à página de login após o sucesso
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Título +Saúde no canto superior esquerdo */}
      <Text style={styles.title}>+Saúde</Text>

      {/* Título principal Cadastro logo abaixo de +Saúde */}
      <Text style={styles.mainTitle}>Cadastro</Text>

      {/* Grupo 1: Informações pessoais */}
      <Text style={styles.sectionTitle}>Informações Pessoais</Text>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={form.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />
      <TextInput
        placeholder="Digite o nome da mãe"
        style={styles.input}
        value={form.nomeMae}
        onChangeText={(text) => handleInputChange('nomeMae', text)}
      />

      {/* Grupo 2: Dados adicionais */}
      <Text style={styles.sectionTitle}>Dados Adicionais</Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        style={styles.input}
        value={form.dataNascimento}
        onChangeText={(text) => handleInputChange('dataNascimento', text)}
      />
      <TextInput
        placeholder="(XX) XXXXX-XXXX"
        style={styles.input}
        value={form.telefone}
        onChangeText={(text) => handleInputChange('telefone', text)}
      />
      <TextInput
        placeholder="Digite o número do cartão SUS"
        style={styles.input}
        value={form.cartaoSUS}
        onChangeText={(text) => handleInputChange('cartaoSUS', text)}
      />

      {/* Grupo 3: Dados de login */}
      <Text style={styles.sectionTitle}>Dados de Login</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        value={form.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
        value={form.senha}
        onChangeText={(text) => handleInputChange('senha', text)}
      />
      <TextInput
        placeholder="Confirme sua senha"
        style={styles.input}
        secureTextEntry
        value={form.confirmarSenha}
        onChangeText={(text) => handleInputChange('confirmarSenha', text)}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  mainTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60, // Ajusta para que o título fique abaixo de +Saúde
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 5, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 16 },
});

export default CadastroScreen;
