import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import {
  Plane,
  Album,
  MapPinHouse,
  BriefcaseBusiness,
  Earth,
  ShieldCheck,
} from 'lucide-react';
import 'swiper/css';

export default function CounsellorSection({ title }: { title: string }) {
  const cardColors = ['#f1fff1', '#FFEBE7', '#FBEFFE', '#FBF5EA', '#F1F1FF'];
  const blobColors = ['#deffde', '#ffd5cc', '#f3b6ff', '#f5deb3', '#dcdcff'];

  const consultations = [
    'Travel Consultations',
    'Scholarships',
    'General Consultations',
    'Abroad Consultations',
    'Travel Consultations',
    'Career Consultations',
  ];

  const icons = [
    Plane,
    Album,
    MapPinHouse,
    BriefcaseBusiness,
    Earth,
    ShieldCheck,
  ];

  return (
    <>
      <Heading className="manrope-semibold heading-color">
        <center>
          {title}
          <a href="#" className="manrope-regular">
            <u>See all</u>
          </a>
        </center>
      </Heading>

      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="mySwiperr"
      >
        {consultations.map((title, index) => {
          const cardColor = cardColors[index % cardColors.length];
          const blobColor = blobColors[index % blobColors.length];
          const IconComponent = icons[index % icons.length];

          return (
            <SwiperSlide key={index}>
              <CounsellorCard
                data-aos="fade-up"
                className="clickable"
                $cardColor={cardColor}
                $blobColor={blobColor}
              >
                <div>
                  <div className="blob">
                    <IconComponent color="black" />
                  </div>
                  <h6 className="manrope-bold">{title}</h6>
                </div>
              </CounsellorCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const Heading = styled.h4`
  font-size: 1.4rem;
  margin: 1.25rem 0rem;
  a {
    font-size: 1rem;
    margin-left: 0.25rem;
  }
`;

const CounsellorCard = styled.div<{ $cardColor: string; $blobColor: string }>`
  background-color: ${(props) => props.$cardColor};
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #d3d3d3;
  overflow: hidden;
  min-height: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h6 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.35rem;
  }

  .blob {
    position: absolute;
    top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.$blobColor};
    height: 200px;
    width: 200px;
    border-radius: 50%;
    svg {
      margin-top: 5.5rem;
      height: 3.55rem;
      width: 3.55rem;
      opacity: 0.2;
    }
  }
`;
