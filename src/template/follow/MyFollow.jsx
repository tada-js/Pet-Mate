import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { AllWrap } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import TabMenu from '../../components/tabMenu/TabMenu'
import { FollowMain } from './followStyle'

function MyFollower() {
  const NavBackTitle = useLocation().state.text;
  const url = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowerList();
    getFollowingList();
  }, []);

  async function getFollowerList() {
    await axios.get(url + `/profile/${accountname}/follower?limit=1000`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setFollowerList(res.data);
    })
  }

  async function getFollowingList() {
    await axios.get(url + `/profile/${accountname}/following?limit=1000`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setFollowingList(res.data);
    })
  }

  return (
    <AllWrap>
      <NavBack
        text={NavBackTitle} />
      <FollowMain>
        {
          NavBackTitle === 'followers' &&
          followerList.map((userInfo, index) => (
            <UserFollow
              key={index}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image} />
          ))
        }
        {
          NavBackTitle === 'followings' &&
          followingList.map((userInfo, index) => (
            <UserFollow
              key={index}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image} />
          ))
        }
      </FollowMain>
      <TabMenu />
    </AllWrap>
  )
}

export default MyFollower