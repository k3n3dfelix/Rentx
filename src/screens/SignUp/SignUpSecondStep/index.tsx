import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';

import { api } from '../../../services/api';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
  Container,
  Header, 
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle
} from './styles';
import { NativeScreenNavigationContainer } from 'react-native-screens';


interface Params {
  user: {
    name:string;
    email:string;
    driverLicense:string;
  }
}

export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user} = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister(){
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a confirmação.')
    }
    if(password !== passwordConfirm){
      return Alert.alert('As Senha não são iguais')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation',{
        nextScreenRoute: 'SigIn',
        title: 'Conta Criada!',
        message: `Agora é só fazer login\n e aproveitar.`
      })
    })
    .catch(() => {
      Alert.alert('Opa', 'Não foi possível cadastrar');
    })
  }
  
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack}/>
            <Steps>
              <Bullet active/>
              <Bullet />
            </Steps>
          </Header>
          <Title>
            Crie sua {'\n'}conta
          </Title>
          <Subtitle>
            Faça seus cadastro de{'\n'}forma rápida e fácil
          </Subtitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Repetir Senha'
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </Form>
          <Button
            color={theme.colors.success}
            title="Cadastrar"
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}