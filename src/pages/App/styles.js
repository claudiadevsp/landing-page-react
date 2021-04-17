import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme}) => theme.colors.mainBg};
    color: ${({theme}) => theme.colors.secondaryBg};
`;