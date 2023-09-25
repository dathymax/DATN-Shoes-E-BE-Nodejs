export interface IResponseEntity<T> {
    data?: T | T[] | null,
    status?: number,
    message?: string,
}