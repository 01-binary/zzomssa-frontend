import React, { useState, useContext } from 'react';
import PromotionContext from '../../../context/PromotionContext';
import MenuContext from '../../../context/MenuContext';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

import { getSelectedBrandInfo } from '../../../lib/Util';
import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
  LastItem,
} from '../styled/mobile';

const AllContentsMobileCardList = () => {
  const { promotions, setItemSize, loading } = useContext(PromotionContext);
  const { menu } = useContext(MenuContext);
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (loading === false) setItemSize((prevSize) => prevSize + 20);
      }
    },
  });

  return (
    <>
      <CardListContainer>
        {promotions?.data?.map((promotion) => {
          const { id, description, image, title, url, BrandId } = promotion;
          const selectedBrandInfo = getSelectedBrandInfo(menu, BrandId);
          return (
            <>
              <CustomCard key={id}>
                <CustomCardImg
                  src={image}
                  alt="Card image cap"
                  onClick={() => window.open(url, '_blank')}
                />
                <CustomCardBody>
                  <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDuration>{description}</CardDuration>
                  </CardContent>
                  <CardBrandInfo>{selectedBrandInfo?.name}</CardBrandInfo>
                </CustomCardBody>
              </CustomCard>
            </>
          );
        })}
      </CardListContainer>
      <LastItem ref={setTarget} />
    </>
  );
};

export default AllContentsMobileCardList;
