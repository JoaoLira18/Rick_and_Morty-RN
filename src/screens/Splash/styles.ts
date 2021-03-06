import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const ImageSplash = styled.Image`
    width: 347px;
    height: 354px;
`;
