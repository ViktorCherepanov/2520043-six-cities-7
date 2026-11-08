import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page.tsx';
import LoginPage from '../pages/login-page/login-page.tsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../const';

type AppProps = {
  placesCount: number;
};

function App({placesCount}: AppProps){
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesCount={placesCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
