import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import logoTaskTracker from "../assets/images/LogoTaskTracker.png"
import imageLogin from "../assets/images/ImageLogin.png"
import googleIcon from "../assets/svg/googleIcon.svg"
import CustomIcons from "../Components/UI/TaskCard/CustomIcons"
import arrowDownIcon from "../assets/icons/arrowDown.svg"
import img from "../assets/icons/BlueIconWorkspaces.svg"
import { authWithGoogle } from "../store/AuthSlice"

const AuthorizationPages = () => {
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const IamInRegistration = pathname === "/"

   const authWithGoogleHandler = () => {
      dispatch(authWithGoogle())
   }

   return (
      <AuthorizationContainer>
         <LogoTaskTracker src={logoTaskTracker} alt="Task Tracker" />

         <ContainerForm>
            <Title> {IamInRegistration ? "Sign In" : "Sign Up"} </Title>
            <SignUpGoogleBlock onClick={authWithGoogleHandler}>
               <CustomIcons src={img} />
               <p>Register with google example@gmail.com</p>

               <CustomIcons src={arrowDownIcon} />
               <CustomIcons src={googleIcon} />
            </SignUpGoogleBlock>
            <TextOr>or</TextOr>
            <Outlet />
            <NavigationText>
               {IamInRegistration
                  ? "You already have an account?"
                  : "Not a member?"}
               <Link to={IamInRegistration ? "/login" : "/"}>
                  {IamInRegistration ? "Log in" : "Sign up now"}
               </Link>
            </NavigationText>
         </ContainerForm>
         <BackgroundImage src={imageLogin} alt="Task Tracker" />
      </AuthorizationContainer>
   )
}

export default AuthorizationPages

const AuthorizationContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   height: 600px;
`
const LogoTaskTracker = styled.img`
   width: 167px;
   height: 36px;
   margin: 15px 0 0 30px;
`
const ContainerForm = styled.div`
   width: 37vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-right: 120px;
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
   }
`
const TextOr = styled.p`
   margin: 0;
   font-size: 1.4rem;
   color: #919191;
`
const BackgroundImage = styled.img`
   width: 38vw;
   height: 100vh;
   margin-right: 5rem;
`
const SignUpGoogleBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 23vw;
   height: 6vh;
   background-color: #f0f0f0;
   border-radius: 8px;
   padding: 0.4rem 1rem 0.4rem 1rem;
   img {
      width: 4vw;
      height: 4vh;
   }
   p {
      font-size: 1rem;
      margin: 0;
      color: #919191;
      margin-left: 0.6rem;
   }
`
const Title = styled.h2`
   font-weight: 500;
`
const NavigationText = styled.p`
   margin: 20px 0 0 0;
   a {
      color: #2679bf;
      margin-left: 4px;
   }
`
