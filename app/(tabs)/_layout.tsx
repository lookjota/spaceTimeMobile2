
import { ImageBackground } from "react-native"
import "../../global.css"
import blurBg from '../../assets/images/bg-blur.png'
import NLWLogo from '../../assets/images/nlw-spacetime-logo.png'
import stripes from '../../assets/images/stripes.png'
import { api } from '../lib/api'

// import { styled } from 'nativewind'

export default function Layout() {

  // const StyledStripes = styled(Stripes)
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2 " />
    </ImageBackground>
  )
}