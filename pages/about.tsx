import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from '../QuestDesignSystemCopLightTheme';
import Frame4 from '../components/Frame4/Frame4';

const About: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>about</title>
            <link rel='icon' href='/favicon.ico' />
          <Head>
          <main>
            <Frame4 />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default About;
