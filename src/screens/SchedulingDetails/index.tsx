import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  RentalPeriod,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Accessories,
  Footer

} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();

  return (

    <Container>
        <Header>
            <BackButton onPress={() => {}}/>
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png']}/>
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lanborghini</Brand>
              <Name>Huracan</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Accessories>
            <Accessory name="380Km/h" icon={speedSvg}></Accessory>
            <Accessory name="3.2s" icon={accelerationSvg}></Accessory>
            <Accessory name="800 HP" icon={forceSvg}></Accessory>
            <Accessory name="Gasolina" icon={gasolineSvg}></Accessory>
            <Accessory name="Auto" icon={exchangeSvg}></Accessory>
            <Accessory name="2 pessoas" icon={peopleSvg}></Accessory>
          </Accessories>
          
          <RentalPeriod>
            <CalendarIcon>
              <Feather
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>
            
            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>27/09/2022</DateValue>
            </DateInfo>

            <Feather
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
            />

             <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>27/09/2022</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900,00</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>
        <Footer>
          <Button title="Confirmar"></Button>
        </Footer>
    </Container>
  )
}