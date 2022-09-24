

class ProductsController {

    async getAll(req,res) {

        let jsonData = require('../Big_data/ReserveParsAll.json');

        // console.log(jsonData);
        // for (let [key, value] of Object.entries(jsonData)) {
        //     return res.json(`${key}:${value}`);
        // }
        return res.json(jsonData);
    }




}

module.exports = new ProductsController()