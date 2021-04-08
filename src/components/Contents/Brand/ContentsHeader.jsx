import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import {
  ContentsHeaderContainer,
  ContentsSubHeaderContainer,
  CategoryHeader,
} from '../styled/desktop';
import KakaoShareButton from '../Share/KakaoShareButton';

const BrandHeader = styled.div(
  tw`md:(text-26) font-normal text-20`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const ContentsHeader = (props) => {
  const { categoryName, contentsInfo } = props;

  return (
    <ContentsHeaderContainer>
      <>
        <CategoryHeader>{categoryName?.toUpperCase()}</CategoryHeader>
        <ContentsSubHeaderContainer>
          <BrandHeader>{contentsInfo?.name}</BrandHeader>
          <KakaoShareButton categoryName={categoryName} />
        </ContentsSubHeaderContainer>
      </>
    </ContentsHeaderContainer>
  );
};
export default ContentsHeader;
