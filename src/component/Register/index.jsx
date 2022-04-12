import React, { useState } from 'react'
import { Container, Flexing, Form, Wrapper } from './style'
import register from '../../assets/imgs/register.jpg'
import canada from '../../assets/imgs/canada.png'
import uzb from '../../assets/imgs/uzb.jpg'
import chinese from '../../assets/imgs/chinese.png'
import korean from '../../assets/imgs/korean.jpg'
import { Link } from 'react-router-dom'


export const Register = () => {
    const [state, setState] = useState('canada')

    const onChange = (e) => {
        setState({[e.target.name]: e.target.value})
    }

  return (
    <Container>
        <Wrapper>
            <Wrapper.Left>
                <Wrapper.Image src={register} />
            </Wrapper.Left>
            <Wrapper.Right>
                <Link to={'/home'}><Wrapper.Close>+</Wrapper.Close></Link>
                <Wrapper.Title>First, we'll need to collect the essentials</Wrapper.Title>
                <Form>
                    <Form.Title>EMAIL ADDRESS</Form.Title>
                    <Form.Wrapper>
                        <Form.Input type='email' placeholder='Email Address' />
                    </Form.Wrapper>
                </Form>
                <Form>
                    <Form.Title>PASSWORD</Form.Title>
                    <Form.Wrapper>
                        <Form.Input type='pasword' placeholder='Password' />
                    </Form.Wrapper>
                </Form>
                <Form>
                    <Form.Title>CONFIRM PASSWORD</Form.Title>
                    <Form.Wrapper>
                        <Form.Input type='email' placeholder='Email Address' />
                    </Form.Wrapper>
                </Form>
                <Form>
                    <Form.Title>PASSWORD REQUIRMENTS</Form.Title>
                    <Form.Password__requirments>Minimum of 8 characters</Form.Password__requirments>
                    <Form.Password__requirments>At least 1 number</Form.Password__requirments>
                    <Form.Password__requirments>At least 1 letter</Form.Password__requirments>
                </Form>
                <Form>
                    <Form.Title>MOBILE NUMBER</Form.Title>
                    <Flexing>
                        <Flexing.Flag src={canada} state={(state.select==='canada' || state ==='canada') && state} />
                        <Flexing.Flag src={uzb} state={state.select==='uzb' && state} />
                        <Flexing.Flag src={korean} state={state.select==='korean' && state} />
                        <Flexing.Flag src={chinese} state={state.select==='chinese' && state} />
                        <Flexing.Select__number name='select'  onChange={onChange} >
                        <Flexing.Option value='canada'>+1</Flexing.Option>
                        <Flexing.Option value='uzb'>+998</Flexing.Option>
                        <Flexing.Option value='korean'>+82</Flexing.Option>
                        <Flexing.Option value='chinese'>+86</Flexing.Option>
                        </Flexing.Select__number>
                        <Flexing.Input__select type='number' placeholder="Mobile number" />
                    </Flexing>
                </Form>
                <Form checkbox>
                    <Form.Checkbox type='checkbox' />
                    <Form.Remember__my__email>Yes, send me text messages about offers and promotions</Form.Remember__my__email>
                </Form>
                <Form checkbox>
                    <Form.Checkbox type='checkbox' />
                    <Form.Remember__my__email>Yes, send me emails about offers and promotions</Form.Remember__my__email>
                </Form>
                <Form.Terms>By tapping "NEXT" you agree to out <Form.Bold> Terms of Use </Form.Bold>, 
                    you acknowledge your information will be used, disclosed and transferred, including
                    international transfers as described in our <Form.Bold>Privacy Notice.</Form.Bold> 
                </Form.Terms>
                <Form.Button onClick={()=> alert('register done')}>Sign Up</Form.Button>
                <Form.Have__a__profile>Have a profile?<Link to={'/login'}><Form.Bold> Log in</Form.Bold></Link> </Form.Have__a__profile>
                <Form.Standard>1. Standard message rates and data charges from your carrier may apply.</Form.Standard>
            </Wrapper.Right>
        </Wrapper>
    </Container>
  )
}