export const saveDataToLocalStorage = (n={}) => {
    return localStorage.setItem(n.title, JSON.stringify(n.data))
}

export const removeDataFromLocalStorage = (dataName) => {
    localStorage.removeItem(dataName);
}


export const retrieveDataFromLocalStorage = ( resourceKey ) => {
    if ( localStorage.getItem( resourceKey ) !== null ) {
        return JSON.parse( localStorage.getItem( resourceKey ) );
    } else {
        return null;
    }
  }
  
export const checkUserDataInStorage = (dataName) => {
    if(dataName === JSON.parse(localStorage.getItem(dataName))){
        console.log('User exists');
    }
    else{
        console.log('User does not exist');
    }
}