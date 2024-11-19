import { Role } from "./Role"

export interface User {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    roleId: number
}