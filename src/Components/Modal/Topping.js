import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    flex: 1 0 auto;
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 30px;
`;

const LabelToppig = styled.label`
    cursor: pointer;
    display: block;
`;

const ToppigCheckBox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const H3 = styled.p`
    font-family: Pacifico;
    font-size: 30px;
    width: 100%;
    padding: 0 40px;
`;

export const Topping = ({ toppings, checkToppings }) => {
    return (
        <>
        <H3>Добавки</H3>
        <ToppingWrap>
            {toppings.map((item, i) => (
                <LabelToppig key={i}>
                        <ToppigCheckBox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                        />
                    {item.name}
                </LabelToppig>
            ))}
        </ToppingWrap>
        </>
    );
}