import {keyframes} from "styled-components";
import { slideInRight, slideInLeft, bounce, fadeIn, fadeInDown } from 'react-animations'

export const slideInLeftAnimation = keyframes`${slideInLeft}`;
export const slideInRightAnimation = keyframes`${slideInRight}`;
export const bounceAnimation = keyframes`${bounce}`;
export const fadeInAnimation = keyframes`${fadeIn}`;
export const fadeInDownAnimation = keyframes`${fadeInDown}`;