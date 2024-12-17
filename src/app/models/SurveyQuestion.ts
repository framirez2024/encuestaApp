export interface SurveyQuestion {
    id?: number
    type: string
    name: string
    isRequired: boolean
    options?: string[]
}