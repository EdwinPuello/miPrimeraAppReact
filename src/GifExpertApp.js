import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExperApp = () =>{

   const [categorias, setfirst] = useState(['Dragon Ball'])

    // const handleAdd = () =>{
    //     setfirst(['NARUTO',...categorias]);
    // }

    return(
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setfirst}/>
            <hr />


            <ol>
                {
                    categorias.map(res=>(
                        <GifGrid 
                            key={res}
                            categoria={res}
                        />
                    ))
                }
            </ol>
        </>
    )


}
