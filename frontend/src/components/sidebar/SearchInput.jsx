import  { useState } from "react"
import { FiSearch } from "react-icons/fi";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<1){
      return toast.error("Serach term must be at least 1 character long")
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");

    }else toast.error("No such user found!");
  }
  return (
    <form  onSubmit={handleSubmit} className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      ></input>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white"><FiSearch /></button>
    </form>
  )
}

export default SearchInput
