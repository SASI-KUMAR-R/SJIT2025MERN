import { useState } from "react"

export default function DropDown({children,trigger }){

    const [show,setShow] = useState(false) // menu state ,,,
    return(
        <div className="w-fit relative" onClick={()=> setShow((curr)=>!curr)}>
            <div>{trigger}</div>
            {show && <ul className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-grey-100 rounded-lg shadow overflow-hidden" >{children}</ul>}
        </div>
    )
}

export function DropDownItem({children})
{
    return(
        <li 
        className="flex gap-3 items-center px-4 py-2 
        text-gray-800 hover:bg-gray-50 cursor-pointer"
        >
        {children}
        </li>
    )
}