export interface IAlertBLock {
    children: React.ReactNode
}


export interface IButton {
    props?: string[]
    children: React.ReactNode
    className: string,
    onClick?: (e: any) => void
}

export interface IForm {
    props?: any[],
    title?: string
    children: React.ReactNode
}