import { DateTime } from 'luxon';

class Payload {
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

export enum ErrorID

const RequestErrors: Record<any, ErrorType> = {
    NOT_FOUND: {
        code: 1,
        message: "Test"
    }
}
