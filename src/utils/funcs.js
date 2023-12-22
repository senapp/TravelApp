"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElementArray = void 0;
const removeElementArray = (arr, ele) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == ele) {
            arr.splice(i, 1);
        }
    }
};
exports.removeElementArray = removeElementArray;
//# sourceMappingURL=funcs.js.map