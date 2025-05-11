"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const next_auth_1 = __importDefault(require("next-auth"));
const credentials_1 = __importDefault(require("next-auth/providers/credentials"));
const handler = (0, next_auth_1.default)({
    providers: [
        (0, credentials_1.default)({
            name: 'Credentials',
            credentials: {
                username: { label: 'Email', type: 'email', placeholder: '이메일 입력' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('@#@#  credentials:', credentials);
                const bodyData = {
                    email: credentials?.username,
                    password: credentials?.password,
                };
                return { 'id': 'user.id' };
                // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login/email`, {
                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify(bodyData),
                // });
                // const data = await res.json();
                // if (data && data.data && data.data.user) {
                //   const user = data.data.user;
                //   // 사용자 데이터 반환 (JWT와 세션에 저장됨)
                //   return {
                //     // id: user.id,
                //     id: 'user.id',
                //   };
                // } else {
                //   // 로그인 실패 시 null 반환 → Unauthorized
                //   return null;
                // }
            },
        }),
    ],
    callbacks: {
        // JWT 생성 및 사용자 정보 추가
        async jwt({ token, user }) {
            console.log('@#@# jwt token:', token);
            return { ...token, ...user };
            // if (user) {
            //   token.id = user.id;
            //   token.email = user.email;
            //   token.name = user.name;
            //   token.type = user.type;
            //   token.mobile = user.mobile;
            //   token.teamId = user.teamId;
            //   token.isApproved = user.isApproved;
            //   token.agreeService = user.agreeService;
            //   token.agreeInfo = user.agreeInfo;
            //   token.apiToken = user.token; // 서버에서 받은 JWT 토큰 포함
            // }
            //
            // return token;
        },
        // 세션 생성 시 사용자 정보 클라이언트에 전달
        async session({ session, token }) {
            console.log('@#@# sesstion session:', session);
            session.user = token;
            return session;
            // if (token) {
            //   session.user = {
            //     id: token.id,
            //     email: token.email,
            //     name: token.name,
            //     type: token.type,
            //     mobile: token.mobile,
            //     teamId: token.teamId,
            //     isApproved: token.isApproved,
            //     agreeService: token.agreeService,
            //     agreeInfo: token.agreeInfo,
            //   };
            //
            //   // API 토큰도 세션에 포함 (원하는 경우 클라이언트에서 사용 가능)
            //   session.apiToken = token.apiToken;
            // }
            //
            // return session;
        },
    },
    pages: {
        signIn: '/signin', // 로그인 페이지
    },
});
exports.GET = handler;
exports.POST = handler;
