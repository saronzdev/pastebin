import { HomePage } from './pages/Home'
import { SlugPage } from './pages/Slug'
import { PostForm } from './components/PostForm'
import { GetForm } from './components/FormGet'
import { Switch, Route } from 'wouter'

export function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/new" component={PostForm} />
      <Route path="/get" component={GetForm} />
      <Route path="/:slug" component={SlugPage} />
    </Switch>
  )
}
