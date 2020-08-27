import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 600px;
    background-color: #fff;
    color: black;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
`;
const NamePrice = styled.div`
    width: 100%;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    align-content: center;
`;


const Name = styled.p`
    font-family: Pacifico;
    font-size: 30px;
`;

const Price = styled.p`
    font-family: Pacifico;
    font-size: 30px;
`;
const Toppings = styled.ul`
    flex: 1 0 auto;
`;

const ButtonAdd = styled.button`
    width: 250px;
    height: 65px;
    background: #299B01;
    border: none;
    color: white;
    font-size: 21px;
    line-height: 25px;
    margin: 43px 0;
    border-radius: 5px;
    :hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border-radius: 5px;
    }
    :active {
        background-color: #300B01;
        border: none;
    }
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
    const closeModal = event => {
        if (event.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    if (!openItem) return null;
    return (
        <Overlay id="overlay"
            onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}></Banner>
                <NamePrice>
                    <Name>{openItem.name}</Name>
                    <Price>{openItem.price.toLocaleString('ru-RU',
                        {style: 'currency', currency: 'RUB'})}
                    </Price>
                </NamePrice>
                <Toppings>
                   
                </Toppings>
                <ButtonAdd>Добавить</ButtonAdd>
            </Modal>
        </Overlay>
    )
};