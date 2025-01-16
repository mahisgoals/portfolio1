import Contact from "./components/contact"
import IntroSection from "./components/intro"
import Portfolio from "./components/portfolio"

export default function Home() {
  return (
    <main>
        <IntroSection/>
        <Portfolio/>
        <Contact/>
    </main>
  )
}
