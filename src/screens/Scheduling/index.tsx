import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  Dateinfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

export function Scheduling(){
  const theme = useTheme();

  return(
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton 
          onPress={() => {}}
          color={theme.colors.shape}
        />
        <Title>
        Escolha uma {'\n'}
        data de início e  {'\n'}
        fim do aluguel
        </Title>
        <RentalPeriod>
          <Dateinfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>26/09/2022</DateValue>
          </Dateinfo>
          
          <ArrowSvg/>

          <Dateinfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>26/09/2022</DateValue>
          </Dateinfo>
        </RentalPeriod>
      </Header>
      
      <Content>
        <Calendar/>
      </Content>

      <Footer>
          <Button
            title="Confirmar"
          />
        </Footer>
    </Container>
  )
}