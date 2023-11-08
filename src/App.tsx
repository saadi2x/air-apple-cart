import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { AacButton } from './Components/Button';
import Main from './Components/Main';

const aactheme = createTheme({
  palette: {
    primary: {
    /* light: '#757ce8', */
      main: '#38CAB5',
    /* dark: '#002884',  */
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans',
  }


});


function App() {
  return (
    <ThemeProvider theme={aactheme}>
    <div className="App">

      <Main/>


    





      <span>
        {/*
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         </p> 
         
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      */}
      </span>

      


    </div>

    </ThemeProvider>
  );
}

export default App;
