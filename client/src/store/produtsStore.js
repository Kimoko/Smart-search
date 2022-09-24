import {makeAutoObservable} from "mobx";

export default class ProdutsStore{
    constructor() {

        this._produts=[
            {
                "id":"1"
            },
            {
                "id":"2"
            },
            {
                "id":"3"
            },

        ]


        this._selectedType={}
        this._selectedGenre={}
        this._selectedComposition={}
        makeAutoObservable(this)
    }

    // setComposition(composition) {
    //     this._composition= composition
    // }
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

    setSelectedType(type){
        this._selectedType = type
    }
    get selectedType(){
        return {
            "id":"1"
        }
        // return this._selectedType
    }

    setSelectedGenre(genre){
        this._selectedGenre = genre
    }
    get selectedGenre(){

        return {
            "id":"1"
        }
        // return this._selectedGenre
    }

}