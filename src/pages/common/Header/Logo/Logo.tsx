import React from 'react'
import theme from 'src/themes/styled.theme'
import { Link, Flex, Image } from 'rebass'
import styled from 'styled-components'
import LogoImage from 'src/assets/images/logo.svg'
import LogoBackground from 'src/assets/images/logo-background.svg'

const LogoImageContainer = styled(Flex)`
  width: 45px;
  height: 45px;
  margin-right: 20px;
`

const LogoContainer = styled(Flex)`
  height: 60px;
  background-color: ${theme.colors.yellow};
  align-items: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background-image: url(${LogoBackground});
    width: 250px;
    height: 70px;
    z-index: 999;
    background-size: contain;
    background-repeat: no-repeat;
    top: 0;
    left: 0px;
  }
`

const LogoLink = styled(Link)`
  z-index: 9999;
  display: flex;
  align-items: center;
  padding-left: 25px;
  color: black;
`

export class Header extends React.Component {
  render() {
    return (
      <>
        <LogoContainer>
          <LogoLink href="/">
            <LogoImageContainer>
              <Image src={LogoImage} />
            </LogoImageContainer>
            <Flex>Precious Plastic</Flex>
          </LogoLink>
        </LogoContainer>
      </>
    )
  }
}

export default Header
