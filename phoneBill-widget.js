document.addEventListener('alpine:init', () => {
    Alpine.data('phoneBill', function () {
        return {
            phoneAction: null,
            totalCount :0,
            bill() {
                this.totalCount = totalPhoneBill(this.phoneAction);
                return totalCount;
            }
        }

    })
})