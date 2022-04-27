declare type UseNuiCallbackFetchOptions = {
    timeout: number | false;
};
declare type UseNuiCallbackFetch<I> = (input?: I, options?: UseNuiCallbackFetchOptions) => void;
declare type UseNuiCallbackResponse<I, R> = [
    UseNuiCallbackFetch<I>,
    {
        loading: boolean;
        error: unknown;
        response: R;
    }
];
/**
 * Make a callback to "myEvent" by sending back "myEventSuccess" or "myEventError" from the client
 * @param app {string} needs to be the same here and in the success and error response events
 * @param event {string} the event name which is sent to client
 * @param handler {function} receive the data sent by the client when success
 * @param errHandler {function} receive the data sent by the client when errored
 * @returns {[fetchFn, { loading, error, response }]} [fetchFn, { loading, error, response }]
 * @example
 * const [fetchUser, { loading, error, response }] = useNuiCallback<number, IUser>("appname", "fetchUser");
 * useEffect(() => {
 *     fetchUser(11);
 * }, [fetchUser]);
 */
export declare const useNuiCallback: <I = unknown, R = unknown>(
    app: string,
    event: string,
    handler?: (res: R) => void,
    errHandler?: (err: unknown) => void
) => UseNuiCallbackResponse<I, R>;
export {};
