import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { currency } from '../Functions/secondaryFunction';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border: transparent;
    background-color: transparent;
    background-image:url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 10px;

`;
const OrderItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px  0;
    span {
        display: block;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 172px;
        span:first-child {
            margin: 0 30px;
        }
    }
`;


export const OrderListItem = ({ order }) => {
    return (
        <OrderItemStyled >
					<span>{order.name}</span>
					<div>
                        <span>{order.count}</span>
						<span>{currency(totalPriceItems(order))}</span>
						<TrashButton/>
					</div>
        </OrderItemStyled>
    );
}