import HomePage from '../pages/home-page/home-page.tsx';

type AppProps = {
  placesCount: number;
};

function App({placesCount}: AppProps){
  return (
    <HomePage placesCount={placesCount}/>
  );
}

export default App;
