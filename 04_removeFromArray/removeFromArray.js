const removeFromArray = function(itemArray, ...args) {
    const items = args;
    const len = items.length;
    if (len == 0)
        return itemArray;
    for (let i = 0; i < len; ++i){
        let ind = itemArray.indexOf(items[i]);
        if (ind == -1)
            continue;
        else {
            itemArray.splice(ind, 1);
        }
    }
    return itemArray;
};

// Do not edit below this line
module.exports = removeFromArray;
