import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

// Context
import { PageTitleContext } from './Context/PageTitle'

// Screen Imports
import Home from './Components/Screens/Home'
import Creators from './Components/Screens/Creators'

// Tech Screen Imports
import TechWeekly from './Components/Screens/Tech/TechWeekly'
import ProgrammingRush from './Components/Screens/Tech/ProgrammingRush'
import HardwareFlu from './Components/Screens/Tech/HardwareFlu'
import MonthlyCrackhead from './Components/Screens/Tech/MonthlyCrackhead'

// Component Imports
import Header from './Components/UI/Header/Header'

const App = () => {

  const [title] = useContext(PageTitleContext);

  return (
    <div style={{display: 'flex'}}>
      <Header title={title} />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/techweekly' exact component={TechWeekly} />
            <Route path='/programmingrush' exact component={ProgrammingRush} />
            <Route path='/hardwareflu' exact component={HardwareFlu} />
            <Route path='/monthlycrackhead' exact component={MonthlyCrackhead} />
            <Route path='/techweekly/:id' exact component={TechWeekly} />
            <Route path='/programmingrush/:id' exact component={ProgrammingRush} />
            <Route path='/hardwareflu/:id' exact component={HardwareFlu} />
            <Route path='/monthlycrackhead/:id' exact component={MonthlyCrackhead} />
            <Route path='/creators' exact component={Creators} />
            <Route path='/' render={() => <div>404</div>} />
        </Switch>
    </div>
  );
}

export default App