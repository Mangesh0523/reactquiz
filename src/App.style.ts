import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/n_admin.jpg';

export const GlobleStyle= createGlobalStyle`
html{
    height:100%;
}

body{
    background-image:url(${BGImage});
    background-size: cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
}
*{
    box-sizing:border-box;
    font-family:'catmaran',sans-serif;
}
`;

export const Wrapper =styled.div `
display:flex;
flex-direction:column;
align-items:center;

> p{
    color:#fff;
}
.score{
    color:#fff;
    font-size:2rem;
    margin:0;
  
}

h1 {
    font-family:fascinate Inline;
    background-image: linear- gradient(180deg, #fff, #87f1ff);
    background-size:100%;
    background-clip:text;
    --webkit-backgraound-clip:text;
    --webkit-text-fill-color:transparent;
}
`