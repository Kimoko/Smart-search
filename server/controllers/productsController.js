
class ProductsController {

    async getAll(req,res){
        return res.json()


















        // let{typeId, genreId, limit, page} = req.query





    //     page = page ||1
    //     limit = limit ||9
    //     let offset = page * limit - limit
    //     const all_Composition = await Composition.findAndCountAll()
    //
    //     if(typeId == null && genreId == null)
    //     {
    //         const new_el_all_Composition = []
    //         for (const el_all_Composition of all_Composition.rows)
    //         {
    //             const {id, description,img,year1, year2,number_seasons,rating,createdAt,updatedAt,typeId} = el_all_Composition
    //             const all_rating = await Rating.findAll({where:{compositionId: id}})
    //             const count_all_Composition = await Rating.findAndCountAll({where:{compositionId: id}})
    //
    //             let sum_rating = 0
    //             for(const el_all_rating of all_rating)
    //             {
    //                 const {rate}= el_all_rating
    //                 sum_rating += rate
    //             }
    //             const new_rate = `${sum_rating / count_all_Composition.count * 10}`.substring(0, 4)
    //             const one_type = await Type.findOne({where:{id: typeId}})
    //             const {name} = one_type
    //             const new_one_composition = {
    //                 "id": id,
    //                 "name": el_all_Composition.name,
    //                 "img":img,
    //                 "description":description,
    //                 "year1":year1,
    //                 "year2": year2,
    //                 "number_seasons": number_seasons,
    //                 "rating": new_rate,
    //                 "createdAt": createdAt,
    //                 "updatedAt": updatedAt,
    //                 "typeId":typeId,
    //                 "name_type": name
    //             }
    //             new_el_all_Composition.push(new_one_composition)
    //         }
    //         const itog= {
    //             "count": all_Composition.count,
    //             "rows":new_el_all_Composition
    //         }
    //         return res.json(itog)
    //
    //     }
    //     else if(typeId != null && genreId == null)
    //     {
    //         const all_Composition_genre_type = await Composition.findAll({where:{typeId: typeId}})
    //         const itog= {
    //             "count": all_Composition.count,
    //             "rows":all_Composition_genre_type
    //         }
    //         return res.json(itog)
    //     }
    //     else if(typeId == null && genreId != null)
    //     {
    //         const all_Genre = await List_genre.findAll({where:{genreId: genreId}})
    //         const all_Composition_genre_type = []
    //         for (const el_all_Genre of all_Genre)
    //         {
    //             const {compositionId} = el_all_Genre
    //             const one_composition = await Composition.findOne({where:{id: compositionId}})
    //             all_Composition_genre_type.push(one_composition)
    //         }
    //         const itog= {
    //             "count": all_Composition.count,
    //             "rows":all_Composition_genre_type
    //         }
    //         return res.json(itog)
    //     }
    //     else if(typeId != null && genreId != null)
    //     {
    //         const all_Genre = await List_genre.findAll({where:{genreId: genreId}})
    //         const all_Composition_genre_type = []
    //         for (const el_all_Genre of all_Genre)
    //         {
    //             const {compositionId} = el_all_Genre
    //             const one_composition = await Composition.findOne({where:{id: compositionId, typeId: typeId}})
    //             if(one_composition != null)
    //             {
    //                 all_Composition_genre_type.push(one_composition)
    //             }
    //
    //         }
    //         const itog= {
    //             "count": all_Composition.count,
    //             "rows":all_Composition_genre_type
    //         }
    //         return res.json(itog)
    //
    //     }
    //
    //
    //     // const all_Composition = await Composition.findAndCountAll()
    //     //
    //     // // const all_Composition = []
    //     //
    //     // const itog= {
    //     //     "count": all_Composition.count,
    //     //     "rows":new_el_all_Composition
    //     // }
    //     //
    //     //
    }


}

module.exports = new ProductsController()