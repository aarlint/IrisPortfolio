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

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    min-height: 100vh;
    transition: color 0.3s ease;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
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

  .main-wrapper {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
  }

  /* Section spacing */
  .main-content > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
  }

  /* Last section should not have bottom margin */
  .main-content > div:last-child {
    margin-bottom: 0;
  }

  /* Center all page containers */
  .main-content > div > section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Center all content within sections */
  .main-content > div > section > * {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Ensure grid layouts are centered */
  .main-content > div > div[class*="grid"] {
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

  /* Mobile Responsive Styles */
  @media (max-width: 768px) {
    .app-container {
      padding: 0 10px;
    }

    .main-content {
      padding: 10px 0;
    }

    /* Adjust section padding for mobile */
    .main-content > div > section {
      padding: 1rem;
    }

    /* Adjust grid layouts for mobile */
    .main-content > div > div[class*="grid"] {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    /* Adjust hero sections for mobile */
    [class*="Hero"] {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    /* Adjust content sections for mobile */
    [class*="Content"] {
      padding: 1rem;
    }

    /* Adjust cards for mobile */
    [class*="Card"] {
      padding: 1rem;
    }

    /* Adjust headings for mobile */
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    /* Adjust text for mobile */
    p {
      font-size: 1rem;
    }

    /* Adjust buttons for mobile */
    button {
      padding: 0.8em 1.5em;
      font-size: 1rem;
    }

    /* Adjust form elements for mobile */
    input, textarea {
      font-size: 16px; /* Prevent zoom on iOS */
      padding: 0.8rem;
    }

    /* Adjust tables for mobile */
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    /* Adjust spacing for mobile */
    .section-title {
      margin-bottom: 1.5rem;
    }

    /* Adjust container padding for mobile */
    .container {
      padding: 0 1rem;
    }
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    .app-container {
      padding: 0 5px;
    }

    .main-content > div > section {
      padding: 0.5rem;
    }
  }
`; 