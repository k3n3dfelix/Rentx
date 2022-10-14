import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  StatusBar, FlatList} from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import  { Load } from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTO';

import { api } from '../../services/api';



import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Apointments,
  ApointmentsTitle,
  ApointmentsQuantity,
  Carwrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate
} from './styles';

interface CarProps {
  id:string;
  user_id:string;
  car:CarDTO;
  startDate:string;
  endDate:string;
}
export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation();
  
  function handleBack(){
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars(){
      try{
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchCars();
  }, [])
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />
        <Title>
        Escolha uma {'\n'}
        data de início e  {'\n'}
        fim do aluguel
        </Title>
        <Subtitle>
          Conforto,Segurança e praticidade.
        </Subtitle>
      </Header>
      {loading ? <Load/> : 
        <Content>
          <Apointments>
            <ApointmentsTitle>Agendamentos feitos</ApointmentsTitle>
            <ApointmentsQuantity>{cars.length}</ApointmentsQuantity>
          </Apointments>
          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Carwrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{marginHorizontal:10}}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </Carwrapper>
            )}

          />
        </Content>
      }
    </Container>
  );
}