import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #212121;
`

export const Wrapper = styled.div`
    display: flex;
    width: 702px;
    height: 1042px;
    border-radius: 9px;
    background-color: #fff;
    margin-top: 100px;
    overflow: hidden;
    box-sizing: border-box;
`

Wrapper.Left = styled.div`
    flex: 1;
    height: 100%;
    box-sizing: border-box;
`

Wrapper.Image = styled.img`
    width: 100%;
    height: 100%;
`

Wrapper.Right = styled.div`
    flex: 1.5;
    height: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
`

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #535353;
`