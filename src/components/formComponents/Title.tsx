import styled from '@emotion/styled';
import React from 'react';
import Text from '../Text';

const Title = ({ children }: { children?: React.ReactNode }) => {
    return(
        <TitleText>
            {children}
        </TitleText>
    )
};

export default Title;

const TitleText = styled(Text)`
    font-size: 1.5rem;
    font-weight: 700;
`;