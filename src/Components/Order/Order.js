import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { currency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background-color: white;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
	padding: 20px;
`;
const OrderTitle = styled.h2`
	text-align: center;
`;
const OrderContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding-bottom: 30px;
`;
const OrderList = styled.ul`
	flex: 1 0 auto;
	width: 100%;
`;
const OrderTotal = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 35px;
	span {
		display: block;
	}
`;
const Empty = styled.p`
	margin-top: 50px;
	text-align: center;
	flex: 1 0 auto;
	width: 100%;
`;


export const Order = ({ orders, setOrders }) => {

	const reduceAcc = () => {
		const acc = orders.reduce((sum, order) => (sum +  totalPriceItems(order)), 0);
		return currency(acc);
	};

	const trashOrder = (id) => {
		const trash = [...orders];
		trash.forEach((item, i) => {
			if (item.id === id) {
				trash.splice(i, 1);
			}
		});
		setOrders(trash);
	};
	
    return (
        <>
        <OrderStyled>
			<OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
			<OrderContent>
				{
					orders.length ? 
						<OrderList>
						{
							orders.map(order =>  (
								<OrderListItem 
									key={order.id} 
									order={order} 
									index={order.id} 
									trashOrder={trashOrder}
								/>
							))
						}
						</OrderList> : 
					<Empty>Список заказов пуст</Empty>
				}
				<OrderTotal>
					<span>Итого:</span>
					<span>{orders.reduce((sum ,order) => (sum + +order.count), 0)} шт.</span>
					<span> {reduceAcc()}</span>
				</OrderTotal>
				<ButtonAdd>Оформить</ButtonAdd>
			</OrderContent>
        </OrderStyled>   
        </>
    )
};