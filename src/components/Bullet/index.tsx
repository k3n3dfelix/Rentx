import react from 'react';
import { ImageIndex } from '../ImageSlider/styles';

import {
  Container
} from './styles';

interface Props {
  active?:boolean;
}
export function Bullet({active = false}: Props) {
  return (
    <Container active={active}/>
      
  )
}