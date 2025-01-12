import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SearchMessageStyle } from '../../components/errorMessage/errorStyle'
import { NavTxtSearch } from '../../components/navBack/NavBack'
import TabMenu from '../../components/tabMenu/TabMenu'
import { User } from '../../components/user/User'
import { AllWrap, Heading } from '../../style/commonStyle'
import { FollowMain } from '../follow/followStyle'

function AccountSearch() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const accountname = JSON.parse(localStorage.getItem("accountname"));

  useEffect(() => {
    if (keyword) {
      const search = async () => {
        const URL = 'https://mandarin.api.weniv.co.kr';
        const token = JSON.parse(localStorage.getItem('token'));
        const searchReqPath = '/user/searchuser/?keyword=' + keyword;
        // keyword에 검색어 입력과 accountname, username을 검색할 수 있음

        const response = await axios.get(URL + searchReqPath, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': "application/json"
          }
        });
        setSearchResult(response.data);
      }
      search();
    }
  }, [keyword]);

  return (
    <AllWrap>
      <Helmet>
        <title>유저 검색 - 산책가까?</title>
      </Helmet>
      <header>
        <Heading>유저 검색 페이지</Heading>
        <NavTxtSearch
          placeholder={"계정 검색"}
          onChange={(e) => setKeyword(e.target.value)} />
      </header>
      <FollowMain>
        {keyword.length === 0
          ?
          // 입력된 keyword가 0이면 메시지 출력
          <SearchMessageStyle>사용자 계정 또는 이름을 입력해 주세요.</SearchMessageStyle>
          :
          // 입력된 keyword가 있으면 결괏값 출력
          searchResult.map((user) => {
            let linkName = '';
            accountname === user.accountname ? linkName = '/profilepage' : linkName = '/userprofile';
            return (
              <Link
                key={user._id}
                to={linkName}
                state={{ userId: user.accountname }}>
                <User
                  userName={user.username}
                  userId={user.accountname}
                  img={user.image}
                  keyword={keyword} />
              </Link>
            )
          })
        }
        {/* 검색된 계정이 0개, 입력된 keyword가 1개 이상이면 출력 */}
        {
          searchResult.length === 0 && keyword.length >= 1 &&
          <SearchMessageStyle>검색된 결과가 없습니다.</SearchMessageStyle>
        }
      </FollowMain>
      <TabMenu />
    </AllWrap>
  )
}

export default AccountSearch