export const saveItemToLocalStorage = (item) => {
    if (!item) return;
    return localStorage.setItem('earthnoveluser', JSON.stringify(item))
}

export const getItemFromLocalStorage = () => {
    const user = localStorage.getItem('earthnoveluser')
    if (user) {
        return JSON.parse(user)
    } else {
        return null;
    }
}

export const clearLocalStorage = () => {
    return localStorage.removeItem('earthnoveluser')
}