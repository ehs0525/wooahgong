import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProgressBar from '@ramonak/react-progress-bar';
import { toast } from 'react-toastify';
import UserApi from 'common/api/UserApi';
import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { ReducerType } from '../../app/rootReducer';

const Img = styled.img`
  width: 65px;
  height: 65px;
  margin-top: 155px;
  margin-left: 147px;
  margin-bottom: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Progress = styled.div`
  margin-top: 55px;
  margin-left: 61px;
`;
const Title = styled.h3`
  text-align: left;
  margin-left: 58px;
  margin-top: 35px;
  margin-bottom: 2px;
  font-family: 'NotoSansKR';
  font-size: 22px;
`;
const Input = styled.input`
  font-family: 'NotoSansKR';
  font-size: 11px;
  width: 200px;
  height: 31px;
  margin-left: 58px;
  margin-bottom: 20px;
  padding-left: 3px;
  padding-bottom: 0px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: #d7d7d7 1px solid;
`;
const ActiveButton = styled.button`
  background: #80b2fe;
  border-style: none;
  border-radius: 10px;
  width: 240px;
  height: 40px;
  font-family: 'NotoSansKR';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 61px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: 0rem 0.5rem 2rem rgba(179, 161, 224, 0.4);
    transform: translateY(-7px);
  }
`;
const KaKao = styled.button`
  // color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease 0s;
  position: absolute;
  color: #3A1D1D;
  background: #F7E600;
  font-weight:700;
  border: none;
  border-radius: 5px;
  font-family: 'NotoSansKR';
  font-size: 3px;
  top: 310px;
  left: 0px;
  margin-left: 61px;
`;
const Wooahgong = styled.button`
  // color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease 0s;
  position: absolute;
  color: white;
  background-color : rgba(144, 136, 243, 1);
  font-weight:700;
  border: none;
  border-radius: 5px;
  font-family: 'NotoSansKR';
  font-size: 3px;
  top: 310px;
  left: 0px;
  margin-left: 61px;
`;
const Desc = styled.span`
  display: block;
  text-align: left;
  margin-left: 60px;
  margin-top: 10px;
  margin-bottom: 18px;
  font-family: 'NotoSansKR';
  font-size: 11px;
`;
const FindPwd = styled.a`
  display: block;
  text-align: left;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 18px;
  font-family: 'NotoSansKR';
  font-size: 11px;
`;
const DescBold = styled.span`
  display: block;
  text-align: left;
  margin-left: 60px;
  margin-bottom: 18px;
  font-family: 'NotoSansKR';
  font-size: 15px;
`;
// type MyProps = {
//   progress: number;
// };
interface Location {
  email: string,
  userId: string,
  provider: boolean
}

function EmailRes() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const regist = useSelector<ReducerType, Register>((state) => state.registerReducer);
  const dispatch = useDispatch();
  const state = location.state as Location;
  console.log(state)


  useEffect(() => {
    // 카카오 로그인
    if (state.provider === true) {
      setIsOk(true);
    }
  }, [])

  const onClickGotoLoginPage = () => {
    navigate('/login');
  }
  const onClickGotoFindPwd = () => {
    navigate('/find/pwd');
  }

  return (
    <main>
      <article>
        <div>
          <div>
            <Img src={Logo} alt="Logo" />
          </div>
          <Title>아이디 찾기</Title>
          <Desc>{state.email} 이메일로 가입된 아이디는</Desc>
          {isOk ? (
            <KaKao>카카오</KaKao>
          ) : (
            <Wooahgong>우아공</Wooahgong>
          )}
          <DescBold>{state.userId}입니다.</DescBold>
          <ActiveButton onClick={onClickGotoLoginPage}>로그인</ActiveButton>
          <FindPwd onClick={onClickGotoFindPwd}>비밀번호 찾기</FindPwd>

        </div>
      </article>
    </main>
  );
}

export default EmailRes;
