import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './QuestDesignSystemCopLightTheme';
import Frame7 from ./components/Frame7/Frame7
import Frame4 from ./components/Frame4/Frame4

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Frame7/>} />
          <Route path="about" element={<Frame4/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;