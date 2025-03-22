import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button/Button';
import { Telescope, PhoneCall, CalendarDays } from 'lucide-react';

export default function CounsellorSection({
  imgProps,
  title,
  type,
}: {
  imgProps: string;
  title: string;
  type: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); // Mobile breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const counsellorData = [
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2FeoQugaNcj1ygYEVBnqSMce.jpg&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Sahil Shrestha',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2Fkm3AZ8FthkDtorR8hy4uSQ.jpg&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Kristina Acharya',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2Fa7USjnNu4Dn4xnssGkaij7.png&w=256&q=60&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Prakriti Sehgal',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2F49HSGa3Mw4K6ceHBD7Mh74.png&w=256&q=60&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Ritesh Niraula',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F2HXHgWhGHwK2V7ZwNRpM26.png&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Sonia Joshi',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-profile-pics.s3.ap-south-1.amazonaws.com%2Fprofile_pic_2e5c3b3c-2094-49f5-bd04-18e07a1dc93a.jpeg&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Thythm Sehgal',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2FpQDdWidwLsKExikMqE4vh6.jpg&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Thythm Sehgal',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FgKAUQ8NAY6g1Zr5zdLPjkD.png&w=256&q=60&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Thythm Sehgal',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
    {
      imageUrl:
        'https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2Fatkhk5tesgrgQXEMqRgE7J.jpeg&w=384&q=65&dpl=dpl_77n67n6BgFb3oLNnydhcvcr18hbb',
      name: 'Thythm Sehgal',
      description: 'Software Engineer at Questionpro || Ex-strage',
    },
  ];

  return (
    <>
      <Heading className="manrope-semibold heading-color">
        <center>
          {title}.
          <a href="#" className="manrope-regular">
            <u>See all</u>
          </a>
        </center>
      </Heading>

      {isMobile ? (
        <VerticalStack>
          {counsellorData.map((counsellor, index) => (
            <CounsellorCard imgProps={imgProps}>
              <div>
                <div className="img-container">
                  {imgProps !== 'full' && (
                    <div>
                      <span className="manrope-regular">
                        <div className="circular-blob">
                          <div className="inner-blob"></div>
                        </div>
                        <div>available</div>
                      </span>
                    </div>
                  )}
                  <img src={counsellor.imageUrl} alt="" />
                </div>
                <h6 className="manrope-bold">
                  <center>{counsellor.name}</center>
                </h6>
                <p className="manrope-regular">
                  <center>{counsellor.description}</center>
                </p>
                <div className="btn-container">
                  {type === 'profile' && (
                    <Button
                      variant="icon"
                      icon={Telescope}
                      label="View Profile"
                      bgColor="#105299"
                    />
                  )}
                  {type === 'ctoCard' && (
                    <>
                      <Button
                        variant="icon"
                        icon={PhoneCall}
                        label="Call now"
                        bgColor="#105299"
                      />
                      {/* <Button
                    variant="icon"
                    icon={CalendarDays}
                    bgColor="#919191"
                  /> */}
                    </>
                  )}
                </div>
              </div>
            </CounsellorCard>
          ))}
        </VerticalStack>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="mySwiperrr"
        >
          {counsellorData.map((counsellor, index) => (
            <SwiperSlide key={index}>
              <CounsellorCard imgProps={imgProps}>
                <div>
                  <div className="img-container">
                    {imgProps !== 'full' && (
                      <div>
                        <span className="manrope-regular">
                          <div className="circular-blob">
                            <div className="inner-blob"></div>
                          </div>
                          <div>available</div>
                        </span>
                      </div>
                    )}
                    <img src={counsellor.imageUrl} alt="" />
                  </div>
                  <h6 className="manrope-bold">
                    <center>{counsellor.name}</center>
                  </h6>
                  <p className="manrope-regular">
                    <center>{counsellor.description}</center>
                  </p>
                  <div className="btn-container">
                    {type === 'profile' && (
                      <Button
                        variant="icon"
                        icon={Telescope}
                        label="View Profile"
                        bgColor="#105299"
                      />
                    )}
                    {type === 'ctoCard' && (
                      <>
                        <Button
                          variant="icon"
                          icon={PhoneCall}
                          label="Call now"
                          bgColor="#105299"
                        />
                        {/* <Button
                        variant="icon"
                        icon={CalendarDays}
                        bgColor="#919191"
                      /> */}
                      </>
                    )}
                  </div>
                </div>
              </CounsellorCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Heading = styled.h4`
  font-size: 1.4rem;
  margin: 1.25rem 0rem;
  a {
    font-size: 1rem;
    margin-left: 0.25rem;
  }
`;

const CounsellorCard = styled.div<{ imgProps: string }>`
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #d3d3d3d3;
  overflow: hidden;
  padding: 0.55rem 0.35rem;

  h6 {
    font-size: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
  img {
    border-radius: ${(props) =>
      props.imgProps === 'full' ? '.45rem' : '100%'};
    width: ${(props) => (props.imgProps === 'full' ? '100%' : '8.5rem')};
    max-width: ${(props) => (props.imgProps === 'full' ? '12rem' : '8.5rem')};
    margin: ${(props) => (props.imgProps === 'full' ? '0' : '0.85rem')};
  }
  .img-container {
    display: flex;
    justify-content: center;
    span {
      position: absolute;
      display: flex;
      align-items: center;
      padding: 0 0.25rem 0 0;
      font-size: 0.65rem;
      border-radius: 0.5rem;
      border: 1px solid #c2d8b5;
      background: #dbffc6;
      color: #91af80;

      .circular-blob {
        margin: 0.25rem;
        height: 12px;
        width: 12px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #9be471;
        .inner-blob {
          height: 4px;
          width: 4px;
          border-radius: 100%;
          background-color: green;
        }
      }
    }
  }

  .btn-container {
    display: flex;
    button {
      margin-bottom: 0;
      width: 100%;
    }
  }
`;
