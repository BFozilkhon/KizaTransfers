import React from 'react'
import { Container, Form, Wrapper } from './style'
import img from '../../assets/imgs/login.jpg'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Img>
               <Link to={'/home'}><Wrapper.Close>+</Wrapper.Close></Link> 
                <Wrapper.Image src={img} />
            </Wrapper.Img>
            <Wrapper.Container>
                <Wrapper.Title>Login into Your MoneyGram Profile</Wrapper.Title>
                <Form>
                    <Form.Title>Email Address</Form.Title>
                    <Form.Wrapper>
                        <Form.Input type='email' placeholder='Email Address' />
                    </Form.Wrapper>
                </Form>
                <Form>
                    <Form.Title>Password</Form.Title>
                    <Form.Wrapper>
                        <Form.Input type='password' placeholder='Password' />
                    </Form.Wrapper>
                </Form>
                <Form checkbox>
                    <Form.Checkbox type='checkbox' />
                    <Form.Remember__my__email>Remember my email address</Form.Remember__my__email>
                </Form>
                <Wrapper.Button onClick={()=> alert('success log in')}>Log in</Wrapper.Button>
                <Wrapper.Forgot__my__password>Forgot Password?</Wrapper.Forgot__my__password>
                <Wrapper.Dont__have__account>Don't have an account ? <Link to={'/signup'}> <Wrapper.Signup>Sign Up</Wrapper.Signup></Link> </Wrapper.Dont__have__account>
            </Wrapper.Container>
        </Wrapper>
    </Container>
  )
}
