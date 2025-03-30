import { css } from '@emotion/react';

export const lightTheme = {
  glassBg: 'rgba(255, 255, 255, 0.1)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  glassShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  primaryColor: '#ff6b6b',
  secondaryColor: '#4ecdc4',
  textColor: '#2d3436',
  backgroundColor: '#f5f6fa',
  backgroundGradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
};

export const darkTheme = {
  glassBg: 'rgba(0, 0, 0, 0.2)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
  glassShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  primaryColor: '#ff6b6b',
  secondaryColor: '#4ecdc4',
  textColor: '#ffffff',
  backgroundColor: '#1a1a1a',
  backgroundGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
};

export const globalStyles = css`
  :root {
    --glass-bg: ${lightTheme.glassBg};
    --glass-border: ${lightTheme.glassBorder};
    --glass-shadow: ${lightTheme.glassShadow};
    --primary-color: ${lightTheme.primaryColor};
    --secondary-color: ${lightTheme.secondaryColor};
    --text-color: ${lightTheme.textColor};
    --background-color: ${lightTheme.backgroundColor};
    --background-gradient: ${lightTheme.backgroundGradient};
  }

  [data-theme='dark'] {
    --glass-bg: ${darkTheme.glassBg};
    --glass-border: ${darkTheme.glassBorder};
    --glass-shadow: ${darkTheme.glassShadow};
    --primary-color: ${darkTheme.primaryColor};
    --secondary-color: ${darkTheme.secondaryColor};
    --text-color: ${darkTheme.textColor};
    --background-color: ${darkTheme.backgroundColor};
    --background-gradient: ${darkTheme.backgroundGradient};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--background-gradient);
    color: var(--text-color);
    min-height: 100vh;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .glass-container {
    background: var(--glass-bg);
    backdrop-filter: blur(4px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    border-radius: 20px;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0;
  }

  /* Center all page containers */
  main > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Center all sections within pages */
  main > div > section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Center all content within sections */
  main > div > section > * {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Ensure grid layouts are centered */
  main > div > div[class*="grid"] {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  /* Center all styled components */
  [class*="Container"] {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Center all hero sections */
  [class*="Hero"] {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Center all content sections */
  [class*="Content"] {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Center all cards and grid items */
  [class*="Card"], [class*="Grid"] {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`; 