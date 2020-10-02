import React from 'react';
import styled from 'styled-components';


const ChoicesWrap = styled.div`
    flex: 1 0 auto;
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 30px;
`;

const ChoicesRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoicesLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const H3 = styled.p`
    font-family: Pacifico;
    font-size: 30px;
    width: 100%;
    padding: 0 40px;
`;

export const Choices = ({choices, changeChoices, openItem}) => {
    return ( 

        <>
        <H3>Выбирайте</H3>
        <ChoicesWrap>
            {openItem.choices.map((item, i) => (
                <ChoicesLabel key={i}>
                        <ChoicesRadio 
                            type="radio"
                            name="choices"
                            checked={choices === item}
                            value={item}
                            onChange={changeChoices}
                        />
                    {item}
                </ChoicesLabel>
            ))}
        </ChoicesWrap>
        </>

    )
   
};