declare type UseNuiEventCallbackResponse<I, R> = [
    (d?: I) => void,
    {
        loading: boolean;
        error: unknown;
        response: R;
    }
];
/**
 * @deprecated use useNuiCallback instead
 * Make a callback to "myEvent" by sending back "myEventSuccess" or "myEventError" from the client
 * @param app {string} needs to be the same here and in the success and error response events
 * @param event {string} the event name which is sent to client
 * @param handler {function} receive the data sent by the client when success
 * @param errHandler {function} receive the data sent by the client when errored
 * @returns {[fetchFn, { loading, error, response }]}
 */
export declare const useNuiEventCallback: <I = unknown, R = unknown>(
    app: string,
    event: string,
    handler?: (res: R) => void,
    errHandler?: (err: unknown) => void
) => UseNuiEventCallbackResponse<I, R>;
export {};
