import { HiOutlineTrash } from "react-icons/hi";

interface RemoveButtonProps{
	id?:number;
}

const RemoveButton = ({id=123}:RemoveButtonProps) => {
	console.log(id)
	return(
		<button className="text-rose-700">
			<HiOutlineTrash size={24} />
		</button>
	)
}


export default RemoveButton;