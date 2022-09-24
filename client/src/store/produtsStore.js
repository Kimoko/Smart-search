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

}