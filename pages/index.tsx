import type { NextPage } from 'next';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystemCopLightTheme';
import Card18Comp from 'components/Card18/Card18';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <Card18Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
