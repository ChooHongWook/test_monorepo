"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const value = process.env;
// TODO: 값이 없으면 에러가 나오는 코드 추가 필요
// TODO: root에 있는 env 값들을 가져오는 코드 추가 필요
exports.env = {
    NODE_ENV: value.NODE_ENV,
    //   API_URL: value.API_URL as string,
    API_URL: 'http://localhost:8000',
    CDN_URL: value.CDN_URL,
};
