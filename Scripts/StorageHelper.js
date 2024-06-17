const saveItemsInLocalStorage = (keyName, valuesObject) => {
    localStorage.setItem(keyName, JSON.stringify(valuesObject))
};

const getLocalStorageItems = (keyName) => {
    return JSON.parse(localStorage.getItem(keyName));
}