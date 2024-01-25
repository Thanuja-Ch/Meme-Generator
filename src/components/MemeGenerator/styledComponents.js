// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const FormAndMemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
    }
`
export const MemeGeneratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
    @media screen and (min-width: 768px) {
        width: 85%;
        max-width: 1140px;
    }
`
export const MemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 300px;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    @media screen and (min-width: 768px) {
        width: 45%;
        margin-top: 5px;
        margin-bottom: 20px;
    }
`
export const Heading = styled.h1`
    font-size: 24px;
    font-family: "Open Sans";
    font-weight: bold;
    color: #35469c;
    text-align: center;
    margin-botton: 16px;
    @media screen and (min-width: 768px) {
        font-size: 36px;
        text-align: left;
    }
`

export const TextContent = styled.p`
    font-size: ${props => props.activeFontSizeId}px;
    font-family: "Open Sans";
    font-weight: 600;
    color: #ffffff;
`
export const MemeGeneratorForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 40%;
`
export const CustomLabel = styled.label`
    font-size: 12px;
    font-family: "Open Sans";
    font-weight: 500;
    color: #7e858e;
    line-height: 1.4;
    margin-bottom: 0px;
`
export const CustomInput = styled.input`
    height: 40px;
    font-family: "Open Sans";
    background-color: #ffffff;
    color: #5a7184;
    border: 1px solid #d7dfe9
    outline: none;
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 5px;
`
export const CustomSelect = styled.select`
    height: 40px;
    font-family: "Open Sans";
    background-color: #ffffff;
    color: #1e293b;
    border: 1px solid #d7dfe9
    outline: none;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
`
export const CustomOption = styled.option`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 16px;
`
export const GenerateButton = styled.button`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 14px;
    font-family: "Open Sans";
    background-color: #0b69ff;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    max-width: 150px;
    min-width: 25px;
    font-weight: 600;
    border-radius: 6px;
`