import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, Library, SignIn } from './components'
import './styles.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const temp_props = "This is my Personal Library"

ReactDOM.render(
  <React.StrictMode>
        <React.Suspense fallback={<>...</>}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/library'>
          <Library></Library>
        </Route>
        <Route path='/contact'>
          <Contact title={temp_props}></Contact>
        </Route>
        <Route path='/about'>
          <About title="About"></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);