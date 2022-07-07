document.addEventListener('alpine:init', () => {
    Alpine.data('returnFee', function(){
        return{
            fee(shift){
                alert('Transport fee: '+''+transportFee(shift));     
            }
        }
        
    })
})