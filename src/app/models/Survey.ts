import { SurveyQuestion } from "./SurveyQuestion"

export interface Survey {
    id?: number
    name: string
    description?: string
    questions?: SurveyQuestion[]
}