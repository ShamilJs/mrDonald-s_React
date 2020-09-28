import React from 'react';
import styled from 'styled-components';
import { useCount } from '../Hooks/useCount';
import { ButtonAdd } from '../Styled/ButtonCheckout';
import { CountItem } from './CountItem';
import { currency } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';

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
const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 20px 0 0 0;
`;




export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = event => {
        if (event.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        // ...openItem  ---> можем сразу все свойства передать
        name: openItem.name,
        price: openItem.price,
        count: counter.count
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };
    
    // export const totalPriceItems = order => order.count * order.price;

    return (
        <Overlay id="overlay"
            onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}></Banner>
                <NamePrice>
                    <Name>{openItem.name}</Name>
                    <Price>{currency(openItem.price)}
                    </Price>
                </NamePrice>
                <Toppings>
                </Toppings>
                <CountItem {...counter}/>
                <TotalPriceItem>
                    <div>Цена:</div>
                    <div>{currency(totalPriceItems(order))} </div>
                </TotalPriceItem>
                <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
            </Modal>
        </Overlay>
    )
};