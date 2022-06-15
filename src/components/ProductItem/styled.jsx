import styled from 'styled-components';

export const ProductItemTitle = styled.strong `
    font-family: 'Arial';
    color: ${props => props.color ? props.color : 'blue'};
    font-size: 16px;
`;