import Siderbar from "../../components/sidebar/Siderbar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
    <Siderbar/>
    <MessageContainer/>
      
    </div>
  )
}

export default Home
