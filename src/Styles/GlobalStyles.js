import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
  background-color: #000;
  height: 100vh;
`
export const Background = styled.video`
  width: 100%;
  height: auto;

  @media (max-width: 900px) {
    object-fit: cover;
    height: 100%;
  }
`

export const TopUls = styled.ul`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 95%;
  left: 35px;
  list-style: none;

  @media (max-width: 900px) {
    width: 90%;
    left: 16px;
  }
`

export const LiImgs = styled.li`
  margin-top: 10px;
  img {
    height: 25px;
  }
`
export const Banner = styled.div`
  position: fixed;
  top: 25%;
  left: 50%; 
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 25%;
  z-index: 5;
  border: solid 2px #ffff;
  font-family: "Hind", sans-serif;

  @media (max-width: 900px) {
    width: 90%;
    top: 10%;
    padding: 8px;
    border-radius: 5px;
    border: none;
  }

  h2 {
    font-size: 30px;
    line-height: 50px;

    @media (max-width: 900px) {
      font-size: 22px;
      margin-left: 10px;
    }
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    span {
      font-weight: 600;
    }

    @media (max-width: 900px) {
      margin-left: 10px;
    }
  }
`
export const BannerModal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1,1,1, 0.8);
  z-index: 5;
`
export const SoundBtn = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 30px; 
  height: 25px;

  @media (max-width: 900px) {
    width: 25px;
    height: 20px;
  }
`

export const BoxBtnSound = styled.div`
  position: fixed;
  top: 10%;
  left: 30px;
  z-index: 10;

  @media (max-width: 900px) {
    top: 6%;
    left: 7px;
  }
`
export const ExitBtn = styled.button`
  position: absolute;
    bottom: 3%;
    right: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 30px; 
    height: 25px;

   @media (max-width: 900px) {
    bottom: 1%;
    width: 25px;
    height: 20px;
   }
`
