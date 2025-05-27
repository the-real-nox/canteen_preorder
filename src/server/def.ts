import { ValidationError } from 'express-validator';
import { DateTime } from 'luxon';

export class Payload {
    private successful: boolean;
    private data: any;

    constructor(successful: boolean, data: any) {
        this.successful = successful;
        this.data = data;
    }

    public build() {
        return {
            successful: this.successful,
            time: DateTime.now().toISO(),
            data: {
                ...this.data
            }
        }
    }
}

export interface ErrorType {
    code: number,
    message: string,
}

export enum ErrorID {
    NOT_FOUND
}

const RequestErrors: Record<ErrorID, ErrorType> = {
    [ErrorID.NOT_FOUND]: {
        code: 1,
        message: "Wasn't found"
    }
}

// const RequestError = (array: ValidationError[]) => {
//     return array.map((v) => ({
//         field: v.,
//         reason: v.msg
//     }))
// }