import {makeAutoObservable} from "mobx";

export default class ProdutsStore{
    constructor() {

        this._produts=[
            {
                "name":"Бензопилы,Электропилы"
                ,"price":"4 000 руб", "imageUrl":"https://pimg2.supl.biz/media/thumbnails/proposals/9e/e4/supl_9ee42225-fb83-4696-b4dc-c3b7baa40dda_th_220x136.jpg",
                "url": "https://supl.biz/benzopilyi-elektropilyi-p9545004/"
                ,"comp":"Механик, сервисный центр"
            },
            {
                "name":"Мотобур (Бензобур) Hitachi DA200E"
                ,"price":"19 999 руб.", "imageUrl":"https://pimg1.supl.biz/media/thumbnails/proposals/images/19/88/supl_198809c2-f30c-4af6-b0e4-0b7e47fdbda6_th_220x136.jpg",
                "url": "https://supl.biz/motobur-benzobur-hitachi-da200e-p9537952/"
                ,"comp":"ИП Макаренков Никита Игоревич"
            },
            {
                "name":"Мотобур Champion AG243"
                ,"price":"9 990 руб", "imageUrl":"https://pimg2.supl.biz/media/thumbnails/proposals/60/dc/supl_60dcc076-e4dd-45da-aee2-9c6d091e767f_th_220x136.jpg",
                "url": "https://supl.biz/motobur-champion-ag243-p11344308/"
                ,"comp":"Гранд Инструмент"
            },
            {
                "name":"Мотобур Champion AG352"
                ,"price":"8 600 руб", "imageUrl":"https://pimg4.supl.biz/media/thumbnails/proposals/31/7d/supl_317df2dd-e710-4030-a171-e65d0579d1fe_th_220x136.jpg",
                "url": "https://supl.biz/motobur-champion-ag243-p11344308/"
                ,"comp":"Гранд Инструмент"
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