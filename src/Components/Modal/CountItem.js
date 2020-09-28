import React from 'react';
import styled from 'styled-components';

const WrappCount = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;
const CountInput = styled.input`
    width: 30px;
    text-align: center; 
`;
const ButtonCount = styled.button`
    background-color: transparent;
`;


export const CountItem = ({ count, setCount, onChange }) => {
    return (
        <WrappCount>
            <div>Количество</div>
            <div>
                <ButtonCount disabled={count <=1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type="number" min='1' max='20' value={count <1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </WrappCount>
    )
};