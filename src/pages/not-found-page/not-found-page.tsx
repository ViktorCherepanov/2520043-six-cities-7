import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundPage() {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg"
                  alt="6 cities logo" width="81" height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 Not Found.</b>
              <p className="favorites__status-description">
                Запрашиваемая страница не существует.
              </p>
              <Link className="favorites__status-description" to={AppRoute.Main}>
                Вернуться на главную
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg"
            alt="6 cities logo" width="64" height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default NotFoundPage;
