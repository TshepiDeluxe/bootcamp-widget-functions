document.addEventListener('alpine:init', () => {
    Alpine.data('wordGame', function () {
        return {
            long:null,
            short:null,
            inputText:null,
            totalWord:0,
            output(){
                this.long = longestWord(this.inputText);
                this.short = shortestWord(this.inputText);
                this.totalWord = wordLengths(this.inputText);
            }
        }

    })
})