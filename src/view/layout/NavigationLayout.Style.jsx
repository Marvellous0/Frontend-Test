import styled from "styled-components";
import theme from "../../application/utils/Theme";
import bg from '../../application/assests/images/backgroundImage.png'

export const NavigationWrapper = styled.div`
    display: flex;
`

export const SideNavContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
`

export const BottonNav = styled.div`
    display: block;
    width: 100%;
    max-height: 300px;
    padding: 20px 0px;
    border-top-left-radius: 12px; 
    border-top-right-radius: 12px;
    position: fixed;
    bottom: 0px;
    background: ${theme.backgroundColor};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: none;
    }

    .flex{
        display: flex;
        position: relative; 
        justify-content: space-around;
    }

    .list{
        width: 64px;
        text-decoration: none;
        list-style: none;
    }

    a{
        display: flex;
        flex-direction: column;
        padding-top: 24px;
    }
`

export const SideBar = styled.div`
    display: none;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: block;
        background: rgba(112, 112, 112, 0.15);
        height: 100%;
        width: 15%;
        min-width: 200px;
    }
`

export const ProfileDiv = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    background: ${theme.backgroundColor};
    height: 90px;
    padding: 0px 8px;
`

export const ProfileImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        height: 60px;
        width: 60px;
    }
`

export const ProfileText = styled.p`
    font-size: 16px;
    white-space: nowrap;
`

export const SideOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-weight: 600;
    padding: 20px;

    span{
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;
    }
`

export const SideOptionMiniContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    flex-basis: 100%;
   

    .side-options{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 15px;
        cursor: pointer;
    }

    .active{
        color: #FBBA12;
    }

    .playlist{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
    }
`

export const Border = styled.div`
    background: rgba(112, 112, 112, 0.15);
    height: 1px;
    margin-top: 8px;
`

export const Content = styled.div`
    padding: 10px;
    margin-left: 0%;
    width: 100vw;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin-left: 15%;
        padding: 30px 20px;
    }

    h3{
        font-weight: 500;
        font-size: 25px;
        line-height: 25px;
        letter-spacing: 0.02em;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.04em;
        }
    }

    .positionSearch{
        width: 100%;
        margin-left: 50px;
        position: relative;
    }
    
    .icon{
        padding: 10px;
        min-width: 40px;
        position: absolute;
        left: 40px;
        top: 10px;
    }

    .inputField{
        padding: 10px;
        text-align: center;
    }
`

export const TopSection = styled.div`
    display: none;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        height: 5%;
        display: flex;
        gap: 16px;
        align-items: center;
    }

`

export const ImageSection = styled.div`
    margin-top: 30px;
    height: 25%;
    background-image: url(${bg});
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    p{
        position: absolute;
        top: 20px;
        left: 20px;
        font-weight: 700;
        font-size: 20px;
    }
`
export const MobileProfile = styled.div`
    display: block;
    height: 50px;
    background: ${theme.backgroundColor};
    padding: 5px 20px;


    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: none;
    }
`

export const Input = styled.input`
    height: 50px;
    width: 30%;
    margin-left: 40px;
    border: 1px solid ${theme.backgroundColor};
    background: ${theme.backgroundColor};
    color: ${theme.textColor};

`

export const PaddedSection = styled.div`
    padding: 30px 20px;

    .ptag{
        display: block;
        float: right;

        @media (min-width: ${theme.breakPoint['tablet']}) {
        display: none;
    }
    }
`

export const CardSection = styled.div`
    margin-top: 20px;
    height: 200px;
    display: flex;
    gap: 20px;
    overflow-x: auto;
   
    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin-top: 30px;
        height: 200px;
        width: 76vw;
        gap: 30px;
    }
`

export const CardBody = styled.div`
    width: 200px;
    height: 100%;
`

export const SubCard = styled.div`
    height: 85%;
    margin-top: 20px;
    background: ${props => props.backgroundColor ? props.backgroundColor : theme.goldBackground} ;
    display: flex;
    flex-direction: column;
    align-items: center;

    .small-text{
       padding: 0px 0px 0px 10px;
       font-weight: 600;
    }
    .small-text > h4{
        font-size: 15px;
        line-height: 23px;
    }

    .small-text > p{
        font-size: 10px;
    }
`

export const Image = styled.div`
    height: 120px;
    width: 150px;
    margin-top: -12px;

     img{
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%; 
     }
`