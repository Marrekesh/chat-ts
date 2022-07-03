import { useMemo } from "react"
import { Iarray } from "../store/reducers/UsersListSlice"

export const useFilterUsers = (users: Iarray, term: string) => {

    const filteredUsers = useMemo(() => {

        if (term) {
            return users.filter(item => {
                return item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
            })
        }

        return users

    }, [users, term])

    return filteredUsers
}