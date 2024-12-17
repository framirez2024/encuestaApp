import { School } from "./School"
import { Survey } from "./Survey"

export interface Application {
    id?: number
    date: Date
    school: School
    survey: Survey
}