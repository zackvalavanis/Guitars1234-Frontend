import { Header } from './Header';
import { Footer } from './Footer';
import { GuitarsPage } from './GuitarsPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';

function App () { 
  return (
    <main>
      <Header />
      <SignupPage />
      <LoginPage />
      <GuitarsPage />
      <Footer />
    </main>
  )
}

export default App