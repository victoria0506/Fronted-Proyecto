
import CarruselHome from '../components/Carrusel'
import ProducCard from '../components/producCard'
import CardProducNv from '../components/CardProducNv'
import Footer from '../components/footer'
import "../css/home.css"

const home = () => {
  return (
    <div>
      <CarruselHome />
      <CardProducNv />
      <ProducCard />
      <Footer/>
    </div>
  )
}

export default home
