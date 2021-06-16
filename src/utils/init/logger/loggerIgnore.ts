const loggerIgnore = [
    // a chrome bug with no influence on the application or user experience
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications.',
    // inconsequential bugs in the tobit-websocket-service-client
    "null is not an object (evaluating 'a.socket.close')",
    "Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.",
    'a.socket is null',
    "Cannot read property 'close' of null",
    "Unable to get property 'close' of undefined or null reference",
];

export default loggerIgnore;
