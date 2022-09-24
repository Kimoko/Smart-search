import {$authHost, $host} from "./index";


export  const fetchCompositionAPI = async (typeId, genreId) =>{
    const {data} = await $host.get('api/composition', {params: {typeId, genreId}})
    return data
}