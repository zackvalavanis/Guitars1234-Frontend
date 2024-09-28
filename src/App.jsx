import { Header } from './Header';
import { Footer } from './Footer';
import { GuitarsPage } from './GuitarsPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { LogoutLink } from './LogoutLink'
function App () { 
  return (
    <main>
      <LogoutLink />
      <Header />
      <SignupPage />
      <LoginPage />
      <GuitarsPage />
      <Footer />
    </main>
  )
}

export default App