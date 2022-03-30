import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { BsGrid3X3, BsHeart, BsBookmarkHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from 'app/rootReducer';
import styled from 'styled-components';
import ProfileApi from 'common/api/ProfileApi';
import { FeedsAndPlacesWrapper } from '../styles/StyledFeedsAndPlaces';
import ProfileFeeds from './ProfileFeeds';
import ProfilePlaces from './ProfilePlaces';
import { setFeeds } from '../reducers/profileFeedReducer';
import { setPlaces } from '../reducers/profilePlaceReducer';

const { TabPane } = Tabs;

const dummyFeeds = [
  {
    feedSeq: 1,
    imageUrl: 'https://picsum.photos/640/300',
  },
  {
    feedSeq: 2,
    imageUrl: 'https://picsum.photos/640/340',
  },
  {
    feedSeq: 3,
    imageUrl: 'https://picsum.photos/640/380',
  },
  {
    feedSeq: 4,
    imageUrl: 'https://picsum.photos/640/420',
  },
];

const dummyPlaces = [
  {
    placeSeq: 1,
    thumbnail: 'https://picsum.photos/640/280',
  },
  {
    placeSeq: 2,
    thumbnail: 'https://picsum.photos/640/320',
  },
  {
    placeSeq: 3,
    thumbnail: 'https://picsum.photos/640/360',
  },
  {
    placeSeq: 4,
    thumbnail: 'https://picsum.photos/640/400',
  },
  {
    placeSeq: 5,
    thumbnail: 'https://picsum.photos/640/440',
  },
];

function FeedsAndPlaces() {
  const { nickname } = useParams<string>();
  const { feeds } = useSelector((state: ReducerType) => state.profileFeed);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getMyFeedsApi = async () => {
    if (nickname !== undefined) {
      const result = await ProfileApi.getMyFeeds(nickname);

      if (result.status === 200) {
        dispatch(setFeeds(result.data));
      } else {
        navigate('/not-found');
      }
    }
  };

  const getLikedFeedsApi = async () => {
    if (nickname !== undefined) {
      const result = await ProfileApi.getLikedFeeds(nickname);

      if (result.status === 200) {
        dispatch(setFeeds(result.data));
      } else {
        navigate('/not-found');
      }
    }
  };

  const getWishedFeedsApi = async () => {
    if (nickname !== undefined) {
      const result = await ProfileApi.getWishedFeeds(nickname);

      if (result.status === 200) {
        dispatch(setFeeds(result.data));
      } else {
        navigate('/not-found');
      }
    }
  };

  const setFeedsOrPlaces = (key: string) => {
    switch (key) {
      case '1':
        getMyFeedsApi();
        // dispatch(setFeeds(dummyFeeds));
        break;
      case '2':
        getLikedFeedsApi();
        // dispatch(setFeeds(dummyFeeds));
        break;
      case '3':
        getWishedFeedsApi();
        // dispatch(setPlaces(dummyPlaces));
        break;
      default:
        break;
    }
  };

  return (
    <FeedsAndPlacesWrapper>
      <Tabs defaultActiveKey="1" centered onChange={setFeedsOrPlaces}>
        <TabPane
          tab={
            <span>
              <BsGrid3X3 />
              &nbsp;올린 피드
            </span>
          }
          key="1"
        >
          <ProfileFeeds />
        </TabPane>
        <TabPane
          tab={
            <span>
              <BsHeart />
              &nbsp;좋아한 피드
            </span>
          }
          key="2"
        >
          <ProfileFeeds />
        </TabPane>
        <TabPane
          tab={
            <span>
              <BsBookmarkHeart />
              &nbsp; 찜한 장소
            </span>
          }
          key="3"
        >
          <ProfilePlaces />
        </TabPane>
      </Tabs>
    </FeedsAndPlacesWrapper>
  );
}

export default FeedsAndPlaces;
