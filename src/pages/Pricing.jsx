import Pagetop from "../components/pagetop/Pagetop"
import Container from "../components/Container"
import Prices from "../components/pricing/prices/Prices"
import banner from '../assets/img/pricingBanner.png'


const Pricing = () => {
  return (
    <>
      <Pagetop breadcrumb="Pricing" title="Pricing & Plan" imgUrl={banner}/>
      <Container>
        <Prices />
      </Container>
    </>
  )
}

export default Pricing
