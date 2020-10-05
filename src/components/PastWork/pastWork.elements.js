import styled, { keyframes } from 'styled-components';
import { FaGithubAlt, FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { DiJavascript1, DiMongodb } from 'react-icons/di'


import { Container } from '../../globalStyles'



import img from '../../images/Project1.png'




export const Wrapper = styled.div`
max-width : auto;
display : flex;
flex-flow : row wrap;
justify-content : center;
${Container}
`

export const Card = styled.div`
  width: 330px;
  height: 430px;
  margin: 5em auto;
  position: relative;
  overflow: hidden;
  border-radius : 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;


  &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export const TopSection = styled.div`
  text-align: center;
  margin: 70px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9CC9E3;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
`

export const Line = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: white;
`

export const StackContainer = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #DCE3E7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`


export const JsIcon = styled(DiJavascript1)`
margin-right : 0.5rem;
font-size : 1.5rem;
`

export const ReactIcon = styled(FaReact)`
margin-right : 0.5rem;
font-size : 1.5rem;
`

export const DbIcon = styled(DiMongodb)`
margin-right : 0.5rem;
font-size : 1.5rem;
`

export const NodeIcon = styled(FaNodeJs)`
margin-right : 0.5rem;
font-size : 1.5rem;
`


export const HtmlIcon = styled(FaHtml5)`
margin-right : 0.5rem;
font-size : 1.5rem;
`




export const Summary = styled.div`
  width: 100%;
  position: absolute;
  bottom: -100%;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  color: #DCE3E7;
  font-family: 'Droid Serif', serif;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom 1s ease-in;
&:hover {
      opacity: 0.8;
}
`