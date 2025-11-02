import { Form } from './components/Form'
import { Home } from './pages/Home'
import { GetForm } from './components/FormGet'
import { Switch, Route } from 'wouter'

export function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/new" component={Form} />
      <Route path="/get" component={GetForm} />
      <Route path="/:slug" component={Home} />
    </Switch>
  )
}
