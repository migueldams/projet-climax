
import Bannier from './Bannier'
import ContactCom from './ContactCom'
import ScrollAnimation from '@/components/common/ScrollAnimation'

function Contact() {
  return (
    <div>
      <ScrollAnimation><Bannier /></ScrollAnimation>
      <ScrollAnimation><ContactCom /></ScrollAnimation>
    </div>
  )
}

export default Contact