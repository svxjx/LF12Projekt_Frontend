//{ "id": 1, "groupId": 1, "question": "wer ist toll?", "answers": "[\"te\",\"da\",\"tp\",\"dad\"]", "solution": 2 }

export interface Question {
    id: number,
    groupId: number,
    question: string,
    answers:string[],
    solution: number
}