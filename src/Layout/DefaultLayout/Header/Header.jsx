import { useMediaQuery } from '@mui/material'
import React from 'react'

const Header = () => {
    const match = useMediaQuery((theme) => theme.breakpoints.down("md"))
  return (
    <>
        {match ? <HeaderMobile /> : <HeaderDesktop />}
    </>
    
  )
}

export default Header