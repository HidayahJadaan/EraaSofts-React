export default function UseLocalStorage(){

    const addToLocalStorage = (key, data)=>{

        localStorage.setItem(key, JSON.stringify(data));
    };

    const getFromLocalStorage = (key)=>{
       return JSON.parse( localStorage.getItem(key) || []);
    };

    return{addToLocalStorage, getFromLocalStorage}
}