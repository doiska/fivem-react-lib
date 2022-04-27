"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNuiEvent = void 0;
var react_1 = require("react");
var eventNameFactory_1 = require("../utils/eventNameFactory");
function addEventListener(element, type, handler) {
    element.addEventListener(type, handler);
}
/**
 * A hook to receive data from the client in the following schema:
 *
 * {
 *     "app": "app-name",
 *     "method": "method-name",
 *     "data": { anyValue: 1 }
 * }
 *
 * @param app {string} The app name which the client will emit to
 * @param event {string} The specific `method` field that should be listened for.
 * @param handler {function} The callback function that will handle data received from the client
 * @returns {void} void
 * @example
 * const [dataState, setDataState] = useState<boolean>();
 * useNuiEvent<boolean>("appname", "methodname", setDataState);
 **/
var useNuiEvent = function (app, event, handler) {
    var savedHandler = react_1.useRef();
    // When handler value changes set mutable ref to handler val
    react_1.useEffect(
        function () {
            savedHandler.current = handler;
        },
        [handler]
    );
    react_1.useEffect(
        function () {
            var eventName = eventNameFactory_1.eventNameFactory(app, event);
            var eventListener = function (event) {
                if (savedHandler.current && savedHandler.current.call) {
                    var data = event.data;
                    var newData = data;
                    savedHandler.current(newData);
                }
            };
            addEventListener(window, eventName, eventListener);
            // Remove Event Listener on component cleanup
            return function () {
                return window.removeEventListener(eventName, eventListener);
            };
        },
        [app, event]
    );
};
exports.useNuiEvent = useNuiEvent;
