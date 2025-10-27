import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { carouselImages } from '../../data/carouselImages';
import * as S from './styles';
import { Container } from '../../styles/Container';

export function Carousel() {
  return (
    <S.CarouselOuter>
      <S.CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {carouselImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <S.Image src={img.src} alt={`Slide ${idx}`} />
              <S.Overlay>
                <Container>
                  <h2>{img.title}</h2>
                  <p>{img.description}</p>
                </Container>
              </S.Overlay>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselContainer>
    </S.CarouselOuter>
  );
}
