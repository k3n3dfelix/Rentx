import React from 'react';
import { StatusBar } from 'react-native';

import { Button} from '../../components/Button';
import { Input } from '../../components/Input';
import theme from '../../styles/theme';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';

export function SigIn(){
  return(
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quase lá</Title>
        <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível</SubTitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
        ></Input>
      </Form>
      
      <Footer>
        <Button
          title="login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => {}}
          enabled={true}
          loading={false}
        />
      </Footer>
    </Container>
  );
}