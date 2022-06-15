/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {
    return (
        <Wrapper
            size={size}
            role='progressbar'
            aria-valuenow={value}
            aria-valuemin='0'
            aria-valuemax='100'
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <Bar wid={value} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${props => (props.size === 'large' ? '4px' : '0px')};
    border-radius:${props => (props.size === 'large' ? '8px' : '4px')};
    height: ${props =>
        props.size === 'large'
            ? '24px'
            : props.size === 'medium'
            ? '12px'
            : '8px'};
`;

const Bar = styled.div`
    background-color: blue;
    width: ${props => props.wid + '%'};
    height: 100%;
    border-radius: 5px ${props => (props.wid > 99 ? '5px' : '0px')}
        ${props => (props.wid > 99 ? '5px' : '0px')} 5px;
`;

export default ProgressBar;
