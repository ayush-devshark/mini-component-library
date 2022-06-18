import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <SelectWrapper value={value} onChange={onChange}>
                {children}
            </SelectWrapper>
            <PresentationalBits>
                {displayedValue}
                <IconWrapper>
                    <Icon id='chevron-down' size={24} />
                </IconWrapper>
            </PresentationalBits>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
    /* isolation: isolate; */
`;

const SelectWrapper = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-appearance: none;
    /* z-index: 2; */
`;

const PresentationalBits = styled.div`
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: 16px;
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 8px;
    text-transform: capitalize;

    ${SelectWrapper}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${SelectWrapper}:hover + & {
        color: ${COLORS.black}
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    /* z-index: 1; */
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: 24px;
    height: 24px;
    pointer-events: none;
`;
export default Select;
