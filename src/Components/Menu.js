import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const BannerMenu = styled.div`
    width: 1060px;
    height: 210px;
    background-image: url('/banner.png');
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const MenuContainer = styled.div`
    width: 1060px;
    margin-left: auto;
    margin-right: 0;
`;



export const Menu = () => (
    <MenuStyled>
        <MenuContainer>
        <BannerMenu/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
        </MenuContainer>
    </MenuStyled>
)