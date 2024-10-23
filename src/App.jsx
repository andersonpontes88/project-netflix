/* cSpell:disable */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Background,
  Banner,
  BannerModal,
  BoxBtnSound,
  Container,
  ExitBtn,
  LiImgs,
  SoundBtn,
  TopUls,
} from "./Styles/GlobalStyles";
import {
  BoxInfor,
  BoxLinks,
  BtnInfor,
  CarouselBox,
  Informations,
  Links,
  MiniAge,
  Sinopse,
  Title,
} from "./Styles/StylesBox";
import Avatar from "./assets/images/avatar.png";
import Logo from "./assets/images/logo.png";
import VideoBG from "./assets/videos/onepiece-liveaction.mp4";
import "./App.css";

function App() {
  // Estado para o controle de som
  const [isMuted, setIsMuted] = useState(false);
  // Funçao para alterar o som
  const toggleSound = () => {
    setIsMuted(!isMuted); // Altera para mudo e não mudo
  };

  //Estado para controlar a visiblidade do banner
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  // Funçao para alternar a visibilidade do banner
  const toggleBanner = () => {
    setIsBannerVisible(!isBannerVisible);
  };

  const [slidePerview, setSlidePerview] = useState(7);

  const data = [
    {
      id: "1",
      image:
        "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdemGLE5X2hgHskoFen46xsrlKtj6yG4woynwXq7i2_p1TKheQ52pjM7fIx6MbB88-WXk0OIahVFULW9WUD7LPMHS6LJp6GQysJIbkzu6hA7K62Zd932uttIlL6DCVFnEdGh1w.webp?r=946",
    },
    {
      id: "2",
      image:
        "https://imaginacaofertil.com.br/wp-content/uploads/2019/07/The-Witcher-Imagina%C3%A7%C3%A3o-F%C3%A9rtil-3-1024x576.jpg",
    },
    {
      id: "3",
      image:
        "https://www.gamersegames.com.br/wp-content/uploads/2022/09/WANDINHA-Netflix.jpg",
    },
    {
      id: "4",
      image: "https://i.ibb.co/6tD8PWZ/umbrella-academy-wide-poster.jpg",
    },
    {
      id: "5",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_oOaENSrZ-4GjIL4BCQeXJpsVGPzGDAFWZXGfLA4WX2iwxi-u44naJKnCaIeGy0IY_iPpRKA2BmodEC3Ux7FSlTtNSBjf1-Top.jpg?r=5ec",
    },
    {
      id: "6",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXD7NkdYF6ysn-dSMKaWhLIUX2Kbm1KJdTbDKh679kPwUMuTWYNrFz_Nh3EvvyXi4Zuiz9WXMTHPPk49o3EqRRF1kS7QybxJNsL9.jpg?r=d6c",
    },
    {
      id: "7",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQrb8Yqw_QS5bqK-jk8fk7a5oRIwQ5fJb506XQMkb1PJbYGPCrIcHqK31kyP2YrH3V2PfHTw0mtTLm1LV9KPcjB1KjNMny-Pjm4H.jpg?r=6c9",
    },
    {
      id: "8",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZr83Kn7eaRX-C-ZN52SVPIdH86EroNR7dFAiswfC_VIq9SQA42wLjNFNHLoEiLVSqofeAVNfUO5P7tjz6UdrF2Ne9MPeUWSgTkt.jpg?r=062",
    },
    {
      id: "9",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQr3KP5nDaBi4Q6q1XI2Q9BoptbUfDx4tKls68OKTkFS51hwHO84QdeIXn5jypLB6yoxeVsxz-QRrXEt8khITCfYdYwZgu2p_L4r.jpg?r=07e",
    },
    {
      id: "10",
      image:
        "https://occ-0-343-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUTeN3QHU_6vhC7UKGKo1PeLcrBGMWz-XxeR6tmSTAu6AV5E9pdbaclTTRXTAYsU0rejeeLvG-2FpFKHHhIFCbRWCaqWH9rTTo6p.jpg?r=2ac",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setSlidePerview(2);
      } else {
        setSlidePerview(7);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <TopUls>
        <LiImgs>
          <img src={Logo} alt="Logo-Netflix" />
        </LiImgs>
        <LiImgs>
          <img src={Avatar} alt="avatar-verde" />
        </LiImgs>
      </TopUls>

      <BoxBtnSound>
        <SoundBtn type="button" onClick={toggleSound}>
          {isMuted ? "🔇" : "🔊"}
        </SoundBtn>
      </BoxBtnSound>

      <BoxInfor>
        <Title>
          One Piece
          <br /> Live Action
        </Title>
        <Informations>
          <p>2023 |</p>
          <MiniAge>16</MiniAge>
          <p>| 1 temporada | Ação</p>
        </Informations>
        <Sinopse>
          O jovem pirata Monkey D. Luffy veste o chapéu de palha e, com sua
          tripulação atrapalhada, zarpa em uma jornada épica nesta adaptação em
          live-action do popular mangá.
        </Sinopse>

        <BoxLinks>
          <Links
            href="https://redecanais.ac/browse-one-piece-a-serie-videos-1-date.html"
            target="_blank"
          >
            Assistir
          </Links>
          <BtnInfor onClick={toggleBanner}>Mais Informações</BtnInfor>
        </BoxLinks>
      </BoxInfor>
      {/* Condicional para exibir o banner */}
      {isBannerVisible && (
        <BannerModal className="banner">
          <Banner>
            <h2>One Piece Live Action</h2>
            <p>
              Em One Piece: A Série, os mangás mais vendidos do Japão ganham
              vida no live-action da Netflix. Na série, Monkey D. Luffy (Iñaki
              Godoy) é um garoto de espírito livre que tem energia e coragem de
              sobra. Seu maior sonho é se tornar o Rei dos Piratas e conquistar
              os mares e, para isso, ele tem como missão encontrar o legado de
              Gold Roger. O One Piece é o maior tesouro escondido pelo pirata e
              achá-lo é a única forma de chegar ao seu objetivo. Para essa
              arriscada missão, Luffy reúne uma tripulação habilidosa e pronta
              para enfrentar perigosos rivais e explorar ilhas misteriosas
            </p>
            <p>
              <span>Primeiro episódio:</span> 31 de agosto de 2023 (Brasil)
            </p>
            <p>
              <span>Adaptação de:</span> One Piece Anime
            </p>
            <p>
              <span>Gênero:</span> Ação, Aventura, Fantasia
            </p>
            <ExitBtn type="button" onClick={toggleBanner}>
              ❌
            </ExitBtn>
          </Banner>
        </BannerModal>
      )}

      <Background autoPlay loop muted={isMuted}>
        <source src={VideoBG} type="video/mp4" />
      </Background>
      <CarouselBox>
        <Swiper
          slidesPerView={slidePerview}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselBox>
    </Container>
  );
}

export default App;
