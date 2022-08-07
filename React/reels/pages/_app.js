import '../styles/globals.css'
import './signup/signup.css'
import './login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Feed.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
