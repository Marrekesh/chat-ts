
export const errorChanger = (error: string): string => {

    const arr = error.split(' ')
    const len = arr.length
    const str = arr[len - 1].slice(6, arr[len - 1].length - 2).split('-').join(' ')

    return str[0].toUpperCase() + str.slice(1)
}
