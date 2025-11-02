import { HomePage } from './pages/Home'
import { SlugPage } from './pages/Slug'
import { FormPost } from './components/FormPost'
import { GetForm } from './components/FormGet'
import { Switch, Route } from 'wouter'

export function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/new" component={FormPost} />
      <Route path="/get" component={GetForm} />
      <Route path="/:slug" component={SlugPage} />
    </Switch>
  )
}
