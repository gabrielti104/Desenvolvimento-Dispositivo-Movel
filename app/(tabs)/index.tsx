import React from 'react';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Caminho do seu arquivo HomeScreen
import HistoricoScreen from './screens/HistoricoScreen'; // Caminho do seu arquivo HistoricoScreen
import NotificacaoScreen from './screens/NotificacaoScreen'; // Caminho do seu arquivo NotificacaoScreen
import ConfiguracaoScreen from './screens/ConfiguracaoScreen'; // Caminho do seu arquivo ConfiguracaoScreen
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';

// Definição de tipos para a navegação
// NavigationIndependentTree.tsx
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  Historico: undefined;
  Notificacao: undefined;
  Configuracao: undefined;
  Sair: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Notificacao" component={NotificacaoScreen} />
        <Stack.Screen name="Configuracao" component={ConfiguracaoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />

      </Stack.Navigator>
    </NavigationIndependentTree>
  );
};

export default App;
