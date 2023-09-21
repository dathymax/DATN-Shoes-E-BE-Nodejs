interface IResponse<T> {
    data?: T | T[] | null,
}

export interface IResponseEntity<T> {
    response?: IResponse<T>,
    status?: number,
    message?: string,
}