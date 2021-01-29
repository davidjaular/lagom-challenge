import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap'
import { animated } from 'react-spring';
import { Element } from 'react-scroll'
 
export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    width: 284px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`
export const MainText = styled.span`
    font-size: 60px; 
    line-height: 63px; 
    width: 420px; 
    height: 315px;
    font-weight: 800;
    @media (max-width: 1024px) {
        font-size: 40px;
        width: 320px;
        height: auto;
        text-align: center;
    }
`

export const Subtitle = styled.h2`
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    margin-top: 25px;
    margin-bottom: 20px;
`

export const List = styled.ul`
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    padding-inline-start: 20px;
    li {
        margin-bottom: 10px;
    }
`

export const Footer = styled.footer`
    background-color: black;
    padding: 67px 100px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;
`

export const Container = styled(Element)`
    width: 100vw;
`

export const Div = styled.div`
    padding: 100px;
    @media (max-width: 768px) {
        padding: 50px;
    }
`

export const PhoneImage = styled.img`
    width: 100%;
    height: 820px;
    @media (max-width: 768px) {
        height: 89vh;
    }
    @media (max-width: 525px) {
        height: 75vh;
    }
`

export const LagomImage = styled.img`
    width: 100%;
    height: 364px;
    @media (max-width: 768px) {
        height: 264px;
    }
    @media (max-width: 525px) {
        height: 364px;
    }
`
export const Header = styled(Row)`
    padding: 36px 40px; 
    width: 100%; 
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 36px 20px; 
    }
`
export const LogoContainer = styled(Col)`
    align-items: center;
    display: flex;
    justify-content: center;
    background: black;
    height: 364px;
    @media (max-width: 768px) {
        height: 264px;
    }
    @media (max-width: 525px) {
        height: 364px;
    }
`

export const Options = styled(Row)`
    padding: 65px 55px;
    width:100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        padding: 40px 20px; 
    }
`

export const Separator = styled.div`
    height: 4px; 
    background: black; 
    width: ${(props) => props.width};
    @media (max-width: 768px) {
        width: 90%; 
    }
`

export const Flex = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    height: 80%;
    @media (max-width: 1024px) {
        padding: 40px 0;
    }
`

export const MenuContainer = styled(animated.div)`
    height: 100vh;
    position: fixed;
    background: black;
    right: 0;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: column;
`

export const MenuContent = styled(animated.div)`
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`