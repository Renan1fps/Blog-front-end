import styled from "styled-components";


export const Header = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
height: 70px;
background-color: #dadde2;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
color: black;
font-family: 'Allison', cursive;
font-size: 20px;
box-shadow: 5px 5px 5px black;

img{
  height: 100%;
  width: 80px;
}

h2{
  margin-top: 5px;
  font-size: 40px;
}
`;

export const ItemsNav = styled.ul`
margin-top: 16px;
margin-right: 15px;
display: flex;
flex-direction: row;
list-style: none;
align-items: flex-end;

li{
  margin: 0 10px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Section = styled.div`
margin: 100px auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #dadde2;
border-radius: 10px;
box-shadow: 15px 15px 25px black;
font-family: Arial, Helvetica, sans-serif;
`;

export const Card = styled.div`
margin: 10px 10px;
background-color: #a9a6b6;
width: 1000px;
height: 400px;
overflow-y: scroll;
`;