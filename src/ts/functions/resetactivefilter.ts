//Function that remove class "activeFilter" for elements
export function removeActivefilter (index:number, someList:HTMLDivElement []) {
    for (let i=0; i<someList.length; i++){
        for(let j=0; j<someList[i].children.length; j++){
            if (i===index){
                someList[index].children[j].classList.remove("activeFilter");   
            }
        }
    }
}