import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Historico'>;

const HistoricoScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [doencas, setDoencas] = useState('');
  const [alergias, setAlergias] = useState('');
  const [intolerancias, setIntolerancias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [exames, setExames] = useState<string | null>(null); // Armazena o caminho da imagem selecionada

  const handleSave = () => {
    Alert.alert('Sucesso', 'Histórico de Saúde salvo com sucesso!');
    navigation.goBack();
  };

  const handleAttachImage = async () => {
    // Solicita permissão para acessar a galeria
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permissão Necessária',
        'É necessário permitir o acesso à galeria para anexar imagens.'
      );
      return;
    }

    // Abre a galeria para selecionar uma imagem
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens
      allowsEditing: true, // Permite edição da imagem
      quality: 1, // Qualidade máxima
    });

    if (!result.canceled) {
      setExames(result.assets[0].uri); // Salva o URI da imagem selecionada
    } else {
      console.log('Seleção de imagem cancelada.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>+Saúde</Text>
      <Text style={styles.subtitle}>Histórico de Saúde</Text>

      <TextInput
        placeholder="Tipo Sanguíneo"
        style={styles.input}
        value={tipoSanguineo}
        onChangeText={setTipoSanguineo}
      />
      <TextInput
        placeholder="Doenças"
        style={styles.input}
        value={doencas}
        onChangeText={setDoencas}
      />
      <TextInput
        placeholder="Alergias"
        style={styles.input}
        value={alergias}
        onChangeText={setAlergias}
      />
      <TextInput
        placeholder="Intolerâncias"
        style={styles.input}
        value={intolerancias}
        onChangeText={setIntolerancias}
      />
      <TextInput
        placeholder="Medicamentos em uso"
        style={styles.input}
        value={medicamentos}
        onChangeText={setMedicamentos}
      />

      <View style={styles.attachmentContainer}>
        <Text style={styles.attachmentLabel}>Exames</Text>
        <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachImage}>
          <Text style={styles.attachmentButtonText}>Anexar</Text>
        </TouchableOpacity>
      </View>
      {exames && (
        <Image
          source={{ uri: exames }}
          style={styles.imagePreview}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
    paddingLeft: 1,
  },
  subtitle: {
    fontSize: 35,
    marginTop: 80,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  attachmentLabel: {
    fontSize: 16,
  },
  attachmentButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  attachmentButtonText: {
    color: 'white',
    fontSize: 14,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HistoricoScreen;
