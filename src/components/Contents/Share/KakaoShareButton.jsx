/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import tw from 'twin.macro';

import { kakaoShareLogo } from '../../../constants/shareItem';

const CustomButton = styled(Button)(tw`outline-none border-0 m-0 p-0 clickable`);
const KakaoImg = styled.img(tw`w-6 h-6`);
const KakaoShareButton = (props) => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    console.log(process.env.REACT_APP_KAKAO_KEY);

    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <CustomButton id="kakao-link-btn">
      <KakaoImg src={kakaoShareLogo} alt="kakao-share-icon" />
    </CustomButton>
  );
};
export default KakaoShareButton;
