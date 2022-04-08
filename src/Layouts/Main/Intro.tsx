import Button from "../../Components/Button"
import LazyImage from "../../Components/LazyImage"
import P from "../../Components/Paragraph"
export default function Intro(){
  return (
  <div className="text-center">
    <LazyImage className="inline-block -mt-16" src="logo-mastercraft.svg" alt="Mastercraft Logo"/>
    <h1 className="font-bold text-xl px-6 my-4">Mastercraft Bamboo Monitor Riser</h1>
    <P>A beautiful {"\&"} handcrafted monitor stand to reduce neck and eye strain.</P>

    <div className="flex justify-between">
      <Button className="flex-1">Back this project</Button>
      <button className="rounded-full align-middle ml-2"><LazyImage src="icon-bookmark.svg" alt="Bookmark" /></button>
    </div>
  </div>
  )
}