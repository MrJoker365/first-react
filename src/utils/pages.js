export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit) // округлює до більшого значення
}
export const getPagedArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }

    return result;

}