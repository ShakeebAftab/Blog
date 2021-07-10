import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

// Context
import { PageTitleContext } from './Context/PageTitle'

// Screen Imports
import Home from './Components/Screens/Home'
import Creators from './Components/Screens/Creators'

// Component Imports
import Header from './Components/UI/Header/Header'

// Post Screen Import
import Post from './Components/Screens/Post'

const App = () => {

  const [title] = useContext(PageTitleContext);

  return (
    <div style={{display: 'flex'}}>
      <Header title={title} />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:category' exact component={Home} />
            <Route path='/:category/:id' exact component={Post} />
            <Route path='/creators' exact component={Creators} />
            <Route path='/' render={() => <div>404</div>} />
        </Switch>
    </div>
  );
}

export default App