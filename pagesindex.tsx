import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from '../QuestDesignSystemCopLightTheme';
import Frame7 from '../components/Frame7/Frame7';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Welcome</title>
            <meta name='description' content='desctiption' />
            <link rel='icon' href='/favicon.ico' />
          <Head>
          <main>
            <Frame7 />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
