import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystemCopLightTheme';
import Frame7Comp from 'components/Frame7/Frame7';

const Welcome: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Frame 7</title>
            <meta name='description' content='desctiption' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <Frame7Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Welcome;
