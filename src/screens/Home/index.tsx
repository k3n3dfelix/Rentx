import React from 'react';
import { StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

import { Car } from '../../components/Car';


export function Home(){
  
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period:'AO DIA',
      price:120,
    },
    thumbnail: 'https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png'
  }
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
      <CarList
        data={[1,2,3, 4, 5, 6 , 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData}/>}
        >
       
      </CarList>
        
    </Container>
  );
}