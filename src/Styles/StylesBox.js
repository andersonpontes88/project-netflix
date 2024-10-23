import styled from 'styled-components'
/* cSpell:disable */

export const BoxInfor = styled.div`
  position: absolute;
  bottom: 15%;
  left: 5%;
  width: 34%;
  z-index: 3;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 20%;
    height: 60%;
    width: 60%;
    top: 25%;
  }
`
export const Title = styled.h1`
  color: #fff;
  font-family: "Lilita One", sans-serif;
  font-weight: 500;
  font-size: 75px;
  line-height: 75px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    font-size: 40px;
    line-height: normal;
    margin-bottom: 30px;
  }
`
export const Informations = styled.div`
  display: flex;
  word-spacing: 5px;
  gap: 10px;

  p {
    font-family: "Hind", sans-serif;
    font-weight: 400;
    color: #fff;
  }
`
export const MiniAge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 20px;
  color: #fff;
  background: none;
  border: solid 1px #fff;
`
export const Sinopse = styled.p`
  font-family: "Hind", sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 15px;
    font-weight: 500;
  } 
`

export const BoxLinks = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  gap: 20px;
`

export const Links = styled.a`
  background-color: #fff;
  padding: 8px 20px;
  color: #000;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Hind", sans-serif;
  transition: all 0.2s;
  height: 37px;

  &:hover {
    background-color: #CACFD6;
    color: #1F1A38;
    box-shadow: 0px 0px 6px 1px rgb(239, 35, 60);
  }

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 8px;
  }
`
export const BtnInfor = styled.button`
  background-color: #fff;
  padding: 8px 20px;
  color: #000;
  border-radius: 5px;
  border: none;
  font-family: "Hind", sans-serif;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #CACFD6;
    color: #1F1A38;
    box-shadow: 0px 0px 6px 1px rgb(239, 35, 60);
  }

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 8px;
  }
`

export const CarouselBox = styled.div`
  position: relative;
  padding: 10px;
  cursor: grabbing;
  bottom: 30%;

  @media (max-width: 900px) {
    padding: 30px;
    bottom: 20%;
  }
`
