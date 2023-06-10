import { withTheme, ThemeProps } from 'styled-components'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return <>Home</>
})
