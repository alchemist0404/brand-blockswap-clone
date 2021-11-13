import styled from 'styled-components';
import { variables } from '../../../theme/variables'
import LogoSVG from '../../../assets/img/logo.svg';
import {
  Button,
} from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  height: 128px;
  background: ${variables.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 2rem;
`;

export const Logo = styled.img`
  height: 85px;
`;

Logo.defaultProps = {
  src: LogoSVG,
  alt: "Block Swap Network"
}

export const AccountBtn = styled(Button)`
  &&{
    color: rgba(28,28,28, 1);
    background-color: hsla(0,0%,100%,.45);
    font-size: 1.125rem;
    text-transform: none;
    font-weight: 600;
    font-family: Overpass,Arial,sans-serif;
    &:hover{
      background-color: hsla(0,0%,100%,.7);
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 512px;
  width: 100%;
  background-color: ${variables.colors.bgColor};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  .e-button {
    text-transform: none;
    color: ${variables.colors.whiteColor};
    margin: .5rem 0;
    font-family: Overpass,Arial,sans-serif;
    font-weight: 700;
    height: 2.75rem;
    width: 100%;
    &:hover {
      background-color: rgba(210,210,211,.25);
    }
  }
  .btn-cancel {
    margin-left: auto;
    width: fit-content;
    padding: 0.25rem 1.25rem 0 1.25rem;
  }
`;