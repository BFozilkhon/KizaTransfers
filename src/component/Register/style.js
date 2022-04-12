    import styled from 'styled-components'

    export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #212121;
        padding: 100px 0;
    `

    export const Wrapper = styled.div`
        display: flex;
        width: 702px;
        border: 1px solid black;
        background-color: #FFF;
        margin-top: 50px;
        border-radius: 9px;
        @media (max-width: 776px) {
            width: 500px;
        }
        @media (max-width: 500px) {
            width: 350px;
        }
    `

    Wrapper.Left = styled.div`
        flex: 1;
        overflow: hidden;
        @media (max-width: 776px) {
            display: none;
        }
    `

    Wrapper.Image = styled.img`
        /* width: 100%; */
        max-height: 1070px;
        border-radius: 9px;
    `

    Wrapper.Right = styled.div`
        position: relative;
        flex: 1.5;
        height: 100%;
        padding: 57px 36px 45px 36px;
        box-sizing: border-box;
        @media (max-width: 776px) {
            padding: 53px 32px 40px 32px;
        }
        @media (max-width: 500px) {
            padding: 48px 28px 36px 28px;
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
            font-size:40px;
        }
        @media (max-width: 500px) {
            font-size:34px;
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
            margin: 0 0 22px 0;
        }
        @media (max-width: 500px) {
            font-size: 20px;
            margin: 0 0 18px 0;
        }
    `

    export const Form = styled.div`
        display: ${({checkbox}) => checkbox  && 'flex'};
        align-items: ${({checkbox}) => checkbox ? 'flex-start' : 'center'};
        margin-bottom: 25px;
        @media (max-width: 776px) {
            margin-bottom: 21px;
        }
        @media (max-width: 500px) {
            margin-bottom: 14px;
        }
    `

    Form.Title = styled.div`
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
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
        outline: none;
        border: none;
        width: 100%;
        border-bottom: 2px solid #000000;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        opacity: 0.8;
        padding-bottom: 15px;
        transition: padding 0.3s ease-in-out;
        :focus {
            padding-bottom: 5px;
        }
        @media (max-width: 776px) {
            font-size: 18px;
            padding-bottom: 12px;
        }
        @media (max-width: 500px) {
            font-size: 15px;
            padding-bottom: 10px;
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

    Form.Password__requirments = styled.div`
        font-size: 15px;
        color: #727272;
        margin-top: 15px;
        @media (max-width: 776px) {
            font-size: 14px;
        }
        @media (max-width: 500px) {
            font-size: 12px;
        }
    `
    export const Flexing = styled.div`
        display: flex;
        align-items: center;
    `;

    Flexing.Select__number = styled.select`
        width: 75px;
        height: 50px;
        margin-right: 10px;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        font-size: 20px;
        @media (max-width: 776px) {
            font-size: 18px;
            width: 70px;
            height: 40px;
        }
        @media (max-width: 500px) {
            font-size: 16px;
            width: 62px;
            height: 37px;
        }
    `

    Flexing.Option = styled.option`
        display: flex;
        justify-content: center;
        align-items: center;   
    `

    Flexing.Flag = styled.img`
    display: ${({state}) => state ? 'flex' : 'none'};
    width: 35px;
    height: 20px;
    @media (max-width: 776px) {
        width: 30px;
        height: 18px;
    }
    @media (max-width:500px) {
        width: 23px;
        height: 14px;
    }
    `

    Flexing.Input__select = styled.input`
    outline: none;
    border: none;
    width: 100%;
    border-bottom: 2px solid #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    opacity: 0.8;
    padding-bottom: 15px;
    transition: padding 0.3s ease-in-out;
    :focus {
        padding-bottom: 5px;
    }
    @media (max-width: 776px) {
        font-size: 18px;
        padding-bottom: 12px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
        padding-bottom: 8px;
    }
    `

    Form.Checkbox = styled.input`
        width: 23px;
        height: 23px;
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
            font-size: 13px;
        }
    `

    Form.Terms = styled.div`
        font-size: 16px;
        color: #727272;
        @media (max-width: 776px) {
            font-size: 15px;
        }
        @media (max-width: 500px) {
            font-size: 13px;
        }
    `

    Form.Bold = styled.div`
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        line-height: 24px;
        text-decoration: underline;
        @media (max-width: 776px) {
            font-size: 15px;
        }
        @media (max-width: 500px) {
            font-size: 13px;
        }
    `

    Form.Button = styled.div`
        background: #f11e1e;
        border-radius: 48px;
        text-align: center;
        color: #f3f3f3;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        width: ${({ width }) => (width ? `${width}` : "280px")};
        height: ${({ height }) => (height ? `${height}` : "44px")};
        :active {
            transform: scale(0.98);
        }
        @media (max-width: 776px) {
            width: ${({ width }) => (width ? `${width}` : "260px")};
            height: ${({ height }) => (height ? `${height}` : "38px")};
        }
        @media (max-width: 500px) {
            width: ${({ width }) => (width ? `${width}` : "100%")};
            height: ${({ height }) => (height ? `${height}` : "33px")};
        }
    `

    Form.Have__a__profile = styled.div`
        font-size: 16px;
        color: #727272;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 776px) {
            font-size: 15px;
        }
        @media (max-width: 500px) {
            font-size: 13px;
        }
    `

    Form.Standard = styled.div`
        color: #727272;
        margin-top: 20px;
        @media (max-width: 776px) {
            font-size: 15px;
        }
        @media (max-width: 500px) {
            font-size: 14px;
        }
    `

