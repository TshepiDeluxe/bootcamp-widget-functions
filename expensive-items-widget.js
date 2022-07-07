document.addEventListener('alpine:init', () => {
    Alpine.data('expensiveItem', function () {
        return {
            newFruit:"",
            newQty:0,
            fruitList:"",
            over20: "",
            over: "",
            threshold: 0,
            randId(){
                return (Math.random()*100).toFixed(0);
            },
            addRemove(){
                this.fruitList = [].concat({
                    id: this.randId(),
                    name: this.newFruit,
                    qty: this.newQty,
                },this.fruitList); this.newFruit = "", this.newQty = ""; 
            },
            greater20(){ 
                this.over20 = findItemsOver20(this.fruitList);              
            },
            greater(){
                this.over = findItemsOver(this.fruitList,this.threshold);
            }
        }

    })
})