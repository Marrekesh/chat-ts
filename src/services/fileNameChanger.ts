
export function imgNameChange(str: string) {

    if (str && str.length > 12) {
       let startStr = str.slice(0,6)
       let dots = '..'
       let endStr = str.split('.')[1]       
       return startStr + dots + '.' + endStr

    } else if(str) {
        return str
    }

}