import {makeAutoObservable} from "mobx";
export default class HouseStore{
    constructor(){
        this._houses =[]
        makeAutoObservable(this);
    }

    setHouses(houses){
        this._houses = houses;
    }

    get houses(){
        return this._houses;
    }
}