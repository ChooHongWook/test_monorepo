'use client';

import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [customError, setCustomError] = useState<string | null>(null); // 커스텀 에러 메시지 상태

  const email = watch('email');
  const password = watch('password');

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signIn('credentials', {
      username: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          {/* 이메일 입력 */}
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: '이메일을 입력해주세요' })}
            className="border border-gray-300 p-2"
            onFocus={() => setCustomError(null)}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          {/* 비밀번호 입력 */}
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
            })}
            className="border border-gray-300 p-2"
            onFocus={() => setCustomError(null)}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button
            type="submit"
            className={`bg-blue-500 text-white flex items-center justify-center ${
              !email || !password || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!email || !password || isSubmitting}
          >
            {/*로그인*/}
            {isSubmitting ? (
              <>
                로그인중...
              </>
            ) : (
              '로그인'
            )}
          </button>
        </div>
      </form>

      {/* 서버에서 발생한 커스텀 에러 메시지 표시 */}
      {customError && <p className="text-red-500">{customError}.</p>}
    </div>
  );
};

export default SignInForm;
