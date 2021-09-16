import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SlideTitle = styled.h2`
  //padding: 60px 0px 50px 0px;
  height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  // border: 1px solid #444444;
`;

const Container = styled.div`
  //border: 1px solid #444444;
  margin-right: 25px;
  width: 500px;
  //border: 1px solid #444444;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  .slick-slider {
  }
  .slick-list {
    width: 500px;
    height: 220px;
    text-align: center;
    margin: 0 auto;
  }

  .slick-slide {
    cursor: pointer;
    //border: 1px solid #444444;
  }

  .slick-dots {
    bottom: 10px;
    //margin-top: 200px;
  }

  .slick-track {
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 300px;
  height: 200px;
  margin-top: 5px;
  margin-right: auto;
  margin-left: auto;
  //border: 1px solid #444444;
`;

const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
// const Wrap = styled.div`
//   opacity: 1;
//   width: 100%;
//   .slick-prev:before {
//     // 기존에 숨어있던 화살표 버튼이 보이게
//     color: black; // 버튼 색은 검은색으로
//     left: 0;
//   }
//   .slick-next:before {
//     opacity: 1;
//     color: black;
//   }
// `;
const ImageSlide = () => {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    arrows: true,
    infinite: true, // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000, // 넘어가는 속도
    slidesToShow: 1, //몇장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <Container>
      <SlideTitle> 삥빵빵뽕</SlideTitle>
      <StyledSlider {...settings}>
        <CardBox>
          <Link to="/Community/Notice">
            <CardImg src="https://w.namu.la/s/bbff81cb4fd4d3f97d245a28a360b5cb665745b2cb434287f9cbd3423978919ce5377ef034f150277564c1798660ae95825fe2bfda50baa970f97d999a81c3148ed215124e7eac555c5699618f8e1d03" />
          </Link>
        </CardBox>
        <CardBox>
          <CardImg src="https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-sky-blue-solid-color-background-wallpaper-image_396578.jpg" />
        </CardBox>
        <CardBox>
          <CardImg src="https://thumb.mt.co.kr/06/2021/02/2021020215463840671_1.jpg/dims/optimize/" />
        </CardBox>
      </StyledSlider>
    </Container>
  );
};

export default ImageSlide;
