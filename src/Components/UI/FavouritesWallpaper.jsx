import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import IconButton from "./IconButton"
import FavouritesIcon from "../../assets/icons/FavouritesIcon.svg"
import { changeAction, getFavourites } from "../../store/FavouritesSlice"
import { getWorkspacesInDataBase } from "../../api/Query"

function FavouritesWallpaper({ favourites }) {
   const dispatch = useDispatch()

   const deleteFavourite = (id) => {
      dispatch(changeAction({ id, getWorkspacesInDataBase, getFavourites }))
   }

   return (
      <Container>
         <h3>Favourites </h3>
         {favourites.map((item) => {
            return (
               <Card key={item.id}>
                  {item.url && <Wallpaper src={item.url} />}
                  <TitleBox>
                     <Title>{item.name}</Title>
                     <Name>{item.workspaceOrBoard}</Name>
                  </TitleBox>
                  <IconBox onClick={() => deleteFavourite(item.id)}>
                     <IconButton
                        width="17px"
                        height="17px"
                        iconSvg={FavouritesIcon}
                     />
                  </IconBox>
               </Card>
            )
         })}
      </Container>
   )
}

export default FavouritesWallpaper

const Container = styled.div`
   margin: auto;
   overflow: scroll;
   width: 100%;
   max-height: 600px;
   display: flex;
   flex-direction: column;
   gap: 16px;
   border-radius: 10px;
   box-sizing: border-box;
   padding: 16px;
   h3 {
      margin: 0;
      font-style: normal;
      font-weight: 400;
      color: #000000;
      text-align: center;
   }
`
const Card = styled.div`
   line-height: 16px;
   position: relative;
   width: 321px;
   height: 38px;
   gap: 10px;
   display: flex;
   margin: 0 auto;
   border-radius: 8px;
   background-color: white;
`
const Wallpaper = styled.img`
   width: 84px;
   height: 38px;
   border-radius: 8px;
`
const TitleBox = styled.div`
   width: 227px;
   height: 38px;
   line-height: 20px;
   p {
      margin: 0;
   }
`
const Title = styled.p`
   font-size: 16px;
   box-sizing: border-box;
   font-weight: 400;
   font-style: normal;
`
const Name = styled.p`
   font-size: 14px;
   box-sizing: border-box;
   color: #919191;
`
const IconBox = styled.span`
   position: absolute;
   right: -7px;
   height: 38px;
   img {
      position: absolute;
      top: 10.5px;
   }
`
