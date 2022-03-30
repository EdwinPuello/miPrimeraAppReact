import { useFecthGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ categoria }) => {

  const {data,loading} = useFecthGifs(categoria)
  console.log(data)


  return (
      <>
        <h3>{categoria}</h3>
        {loading && 'LOADING...'}
        <div className="cardGrid">
        
            {
                data.map( img=> (
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                ))
            }
        
        </div>
      </>
  );
};
