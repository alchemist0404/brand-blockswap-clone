import React from 'react';
import styled from 'styled-components';
import variables from '../../theme/variables';

const StyledDivder = styled.hr`
  margin: 0px;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: ${props => props.dark ? variables.colors.darkDivider : variables.colors.lightDivider};
  width: 100%;
`;

export default function Divider(props) {
  return (
    <StyledDivder {...props}/>
  )
}
