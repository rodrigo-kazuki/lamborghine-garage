import { fetchGetCarData } from "../../api/getCar";
import { CarModel } from "./props";

//fazer uma solicitação pra api
export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    //implemento regras de negocio
    await fetchGetCarData(id, setCarData);
  } catch (error) {
    console.error("Erro ao buscar dados da api:", error);
  }
};

export const handlePreviousItem = async(
  carData: CarModel|null, 
  setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>
)=>{
  try{
    if(carData && carData?.id>1){
      const response = await fetchGetCarData(carData.id-1,setCarData);

    }
  }catch(error){
    console.log("erro ao chamar a api",error);
  }
};

export const handleNextItem = async(
  carData: CarModel|null, 
  setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>
)=>{
  try{
    if(carData && carData?.id<10){
      const response = await fetchGetCarData(carData.id+1,setCarData);

    }
  }catch(error){
    console.log("erro ao chamar a api",error);
  }
};
