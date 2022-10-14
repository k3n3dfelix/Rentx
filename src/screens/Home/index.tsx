import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

import { api } from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton
} from './styles';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

export function Home(){
  const [cars,setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const theme = useTheme();

  // const carData = {
  //   brand: 'Audi',
  //   name: 'RS 5 Coupé',
  //   rent: {
  //     period:'AO DIA',
  //     price:120,
  //   },
  //   thumbnail: 'https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png'
  // }

  function handleCarDetails(car: CarDTO){
    navigation.navigate('CarDetails', { car });
  }
  function handleOpenMyCars(){
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      }catch(error){
        console.log('error3', error);
      }finally{
        setLoading(false)
      }
    }
    fetchCars();
  },[]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)} 
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
          </HeaderContent>
      </Header>
      {loading ? <Load /> : 
      <CarList
        data={cars}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)}/>}
        />
      }

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape}/>
      </MyCarsButton>

    </Container>
  );
}