import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import Button from '../../../components/Button/Button';
import { ExternalLink } from 'lucide-react';

export default function EnterpriseSection({
  imgProps,
  title,
  type,
}: {
  imgProps: string;
  title: string;
  type: string;
}) {
  const enterpriseData = [
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      name: 'Circle io',
      description: 'US Based Organization Based',
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
        {enterpriseData.map((counsellor, index) => (
          <SwiperSlide key={index}>
            <CounsellorCard data-aos="fade-up" imgProps={imgProps}>
              <div>
                <div className="img-container">
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
                      icon={ExternalLink}
                      label="Visit Organization"
                      bgColor="#105299"
                    />
                  )}
                </div>
              </div>
            </CounsellorCard>
          </SwiperSlide>
        ))}
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
