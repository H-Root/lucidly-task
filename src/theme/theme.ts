/* eslint-disable @typescript-eslint/no-unused-vars */
// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './button'
import { colors } from './colors'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    buttons: `'Montserrat', sans-serif`,
    input: `'Roboto', sans-serif`
  },
  components: {
    Button: buttonTheme
  },
  colors,
})

export default theme