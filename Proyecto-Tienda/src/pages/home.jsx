
import CarruselHome from '../components/Carrusel'
import ProducCard from '../components/producCard'
import CardProducNv from '../components/CardProducNv'
import "../css/home.css"

const home = () => {
  return (
    <div>
      <CarruselHome />
      <CardProducNv />
      <ProducCard />
    </div>
  )
}

export default home
