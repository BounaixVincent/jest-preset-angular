"use strict";
var createStorageMock = function () {
    var storage = {};
    return {
        getItem: function (key) { return key in storage ? storage[key] : null; },
        setItem: function (key, value) { return storage[key] = value || ''; },
        removeItem: function (key) { return delete storage[key]; },
        clear: function () { return storage = {}; },
    };
};
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'localStorage', { value: createStorageMock() });
Object.defineProperty(window, 'sessionStorage', { value: createStorageMock() });
Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
    value: function () {
        return {
            display: 'none',
            appearance: ['-webkit-appearance']
        };
    }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
    value: function () {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});
