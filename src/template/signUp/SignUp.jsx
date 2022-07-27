import React from 'react'
import { EmailInput, PasswordInput } from '../../components/input/Input'
import { NextBtn } from '../../components/button/Button'
import { AllWrap, FormStyle, PaddingMain, Title } from '../../style/commonStyle'
import { SignUpErrorMessage } from '../../components/errorMessage/errorMessage'
import { LoginFormStyle } from '../login/loginStyle.js';

function SignUp({
  disabled,
  nextClick,
  userEmail,
  setEmail,
  userPassword,
  setPassword,
  message,
  emailCheck,
  register,
  errors
}) {
  return (
    <AllWrap>
      <PaddingMain>
        <Title>이메일로 회원가입</Title>
        <LoginFormStyle>
          <EmailInput
            userEmail={userEmail}
            setEmail={setEmail}
            emailCheck={emailCheck}
            register={register}
          ></EmailInput>
          {errors.email && <SignUpErrorMessage message={errors.email.message} />}
          {message && <SignUpErrorMessage message={message} />}
          <PasswordInput
            userPassword={userPassword}
            setPassword={setPassword}
            register={register}
          ></PasswordInput>
          {errors.password && <SignUpErrorMessage message={errors.password.message} />}
        </LoginFormStyle>
        <NextBtn
          nextClick={nextClick}
          disabled={disabled}
          message={message}
        ></NextBtn>
      </PaddingMain>
    </AllWrap>
  )
}

export default SignUp