export const paginate = (arr) => {
    const nestedArr = Array.from({ length: arr?.length }, (_, index) => {
        const start = arr[index]
        return [start]
    })
    return nestedArr
}