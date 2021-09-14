import BaseComponent from "../components/BaseComponent.js";

export default class detail extends BaseComponent{
    
    render(){
        let $img = document.createElement("img");
        $img.src = "/IMG/backgroundDetail.jpg";
        $img.classList.add("form-img");

        return $img;
    }
}