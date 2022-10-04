import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'HelloWorldSystemLightTheme';
import Frame4Comp from 'components/Frame4/Frame4';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Test</title>
            <meta name='description' content='Hahahahha' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <Frame4Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
