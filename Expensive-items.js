function findItemsOver20(list){ 
    var itemOver20List = [];
    for (let i = 0; i < list.length; i++){ 
      var itemList = list[i];
      var itemQty = itemList.qty;
      var itemName = itemList.name
      if (itemQty > 20) {
      itemOver20List.push(itemList);}
    }
    return itemOver20List;
  }
  function findItemsOver(list,threshold){ 
    var itemListOver = [];
    for (let i = 0; i < list.length; i++){ 
      var itemList = list[i];
      var itemQty = itemList.qty;
      if(itemQty > threshold){
      itemListOver.push(itemList)}
    }
    return itemListOver
  }