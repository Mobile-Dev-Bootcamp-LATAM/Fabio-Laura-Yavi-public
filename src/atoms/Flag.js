import styled from "styled-components"

const Flag = styled.img`
    width: ${({ size }) => `${2*size}rem`};
    height: ${({ size }) => `${size}rem`};
`;

export {
    Flag
}