import {makeAutoObservable} from "mobx";

export default class ProdutsStore{
    constructor() {

        this._produts=[
            {
                "id":"1", "name":"Kyocera Тонер-картридж TK-8555M для TASKalfa 5054ci/6054ci/7054ci пурпурный (24000 стр.)"
                ,"price":"26175", "imageUrl":"https://vsklad.isource.ru/cdn/insecure/auto/64/64/no/0/plain/local:///e/a/ea350d7b-dc62-40b7-b91b-ad48f2217b0a"
                ,"comp":"ООО ГРУППА КОМПАНИЙ 'ПОЗИТИВ'"
            },
            {
                "id":"2", "name":"Kyocera Тонер-картридж TK-8555M для TASKalfa 5054ci/6054ci/7054ci пурпурный (24000 стр.)"
                ,"price":"26175", "imageUrl":"https://vsklad.isource.ru/cdn/insecure/auto/64/64/no/0/plain/local:///e/a/ea350d7b-dc62-40b7-b91b-ad48f2217b0a"
                ,"comp":"ООО ГРУППА КОМПАНИЙ 'ПОЗИТИВ'"
            },
            {
                "id":"3"
            },

        ]

        this._selectedComposition={}
        makeAutoObservable(this)
    }

    setComposition(composition) {
        this._produts= composition
    }
    get get_all_produts(){
        return this._produts
    }
    //
    // setSelectedComposition(composition){
    //     this._selectedComposition = composition
    // }
    // get selectedComposition(){
    //     return this._selectedComposition
    // }

}