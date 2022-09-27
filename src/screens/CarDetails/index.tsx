import React from 'react';

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
  About,
  Accessories,
  Footer

} from './styles';

export function CarDetails(){
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
          
          <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>
        <Footer>
          <Button title="Confirmar"></Button>
        </Footer>
    </Container>
  )
}