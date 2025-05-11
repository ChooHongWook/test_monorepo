'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("next-auth/react");
const react_hook_form_1 = require("react-hook-form");
const react_2 = __importStar(require("react"));
const SignInForm = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, } = (0, react_hook_form_1.useForm)();
    const [customError, setCustomError] = (0, react_2.useState)(null); // 커스텀 에러 메시지 상태
    const email = watch('email');
    const password = watch('password');
    const onSubmit = async (data) => {
        await (0, react_1.signIn)('credentials', {
            username: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: '/',
        });
    };
    return (<div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          {/* 이메일 입력 */}
          <input type="email" placeholder="Email" {...register('email', { required: '이메일을 입력해주세요' })} className="border border-gray-300 p-2" onFocus={() => setCustomError(null)}/>
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          {/* 비밀번호 입력 */}
          <input type="password" placeholder="Password" {...register('password', {
        required: '비밀번호를 입력해주세요',
    })} className="border border-gray-300 p-2" onFocus={() => setCustomError(null)}/>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button type="submit" className={`bg-blue-500 text-white flex items-center justify-center ${!email || !password || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!email || !password || isSubmitting}>
            {/*로그인*/}
            {isSubmitting ? (<>
                로그인중...
              </>) : ('로그인')}
          </button>
        </div>
      </form>

      {/* 서버에서 발생한 커스텀 에러 메시지 표시 */}
      {customError && <p className="text-red-500">{customError}.</p>}
    </div>);
};
exports.default = SignInForm;
