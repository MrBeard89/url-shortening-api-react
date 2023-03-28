import { Boost } from '../components/Boost/Boost'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/Navbar/Navbar'
import { ShortenLink } from '../components/ShortenLink/ShortenLink'
import { Statics } from '../components/Statics/Statics'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ShortenLink />
      <Statics />
      <Boost />
      <Footer />
    </>
  )
}
