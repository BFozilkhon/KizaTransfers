import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #212121;
`

export const Wrapper = styled.div`
    width: 391px;
    background-color: #FFF;
    border-radius: 9px;
    margin: auto;
    overflow: hidden;
    box-sizing: border-box;
    @media (max-width: 776px) {
        width: 350px;
    }
    @media (max-width: 500px) {
        width: 320px;
    }
`

Wrapper.Img = styled.div`
    position: relative;
    width: 100%;
    height: 170px;
    background-color: red;
    @media (max-width: 776px) {
        height: 160px;
    }
    @media (max-width: 500px) {
        height: 150px;
    }
`

Wrapper.Close = styled.div`
    position: absolute;
    top: 0px;
    right: 10px;
    z-index: 1;
    transform: rotate(45deg);
    font-size:45px;
    color: crimson;
    cursor: pointer;
    @media (max-width: 776px) {
        font-size:41px;
    }
    @media (max-width: 500px) {
        font-size:38px;
    }
`

Wrapper.Image = styled.img`
    width: 100%;
    height: 100%;
`

Wrapper.Container = styled.div`
    padding: 30px;
    @media (max-width: 776px) {
        padding: 28px;
    }
    @media (max-width: 500px) {
        padding: 26px;
    }
`

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #535353;
    margin: 0 0 24px 0;
    @media (max-width: 776px) {
        font-size: 23px;
    }
    @media (max-width: 500px) {
        font-size: 22px;
    }
`

export const Form = styled.div`
    display: ${({checkbox}) => checkbox  && 'flex'};
    align-items: center;
    margin-bottom: 22px;
    @media (max-width: 776px) {
        margin-bottom: 21px;
    }
    @media (max-width: 500px) {
        margin-bottom: 20px;
    }
`

Form.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    color: #000000;
    text-transform: uppercase;
    @media (max-width: 776px) {
        font-size: 10px;
    }
    @media (max-width: 500px) {
        font-size: 9px;
    }
`

Form.Wrapper = styled.div`
    margin-top: 5px;
`

Form.Input = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000000;
    font-size: 20px;
    padding: 3px 0;
    color: #3D3D3D;
    @media (max-width: 776px) {
        font-size: 18px;
        height: 28px;
    }
    @media (max-width: 500px) {
        font-size: 17px;
        height: 27px;
    }
`

Form.Checkbox = styled.input`
    width: 20px;
    height: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000000;
    @media (max-width: 776px) {
        width: 18px;
        height: 18px;
    }
    @media (max-width: 500px) {
        width: 16px;
        height: 16px;
    }
`

Form.Remember__my__email = styled.div`
    margin-left: 10px;
    color: #727272;
    @media (max-width: 776px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`

Wrapper.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: crimson;
    border-radius: 30px;
    width: 75%;
    height: 40px;
    margin: auto;
    color: #FFF;
    cursor: pointer;
    transition: all .3s ease-in-out;
    :active{
        transform: scale(0.99);
    }
    @media (max-width: 776px) {
        font-size: 15px;
        height: 38px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        height: 37px;
    }
`

Wrapper.Forgot__my__password = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    margin: auto;
    margin: 22px 0;
    @media (max-width: 776px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`

Wrapper.Dont__have__account = styled.div`
    display: flex;
    justify-content: center;
    color: #727272;
    @media (max-width: 776px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`

Wrapper.Signup = styled.div`
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    margin-left: 10px;
    text-decoration: underline;
    :active{
        color: green;
    }
    @media (max-width: 776px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`