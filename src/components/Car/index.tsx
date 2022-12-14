import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineSvg from '../../assets/gasoline.svg'

import {CarDTO} from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  Container,
  Details,
  Name,
  Brand,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './styles';

// interface CarData extends RectButtonProps{
//   brand:  string;
//   name: string;
//   rent: {
//     period: string;
//     price: number;
//   }
//   thumbnail:string;
// }

interface Props {
  data : CarDTO;
}

export function Car({data, ...rest} : Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
              <MotorIcon></MotorIcon>
            </Type>
        </About>
      </Details>

      <CarImage 
      source={{uri: data.thumbnail}}
      resizeMode="contain"
      />
    </Container>
  )
}