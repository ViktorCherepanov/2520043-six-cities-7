import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page.tsx';
import LoginPage from '../pages/login-page/login-page.tsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';

type AppProps = {
  offers: Offer[];
};

function App({offers}: AppProps){
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={offers}/>
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
