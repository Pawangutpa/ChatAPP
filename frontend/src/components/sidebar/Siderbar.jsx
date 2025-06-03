import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButtton from "./LogoutButtton"

const Siderbar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <LogoutButtton/>
    </div>
  )
}

export default Siderbar
