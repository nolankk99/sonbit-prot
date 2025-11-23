import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직
    console.log("Login:", { email, password, rememberMe });
  };

  const handleSocialLogin = (provider: string) => {
    // 소셜 로그인 로직
    console.log("Social login:", provider);
  };

  return (
    <div className="min-h-[600px] py-12 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--origami-border-default)] overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-[var(--origami-blue)] p-8 text-center text-white">
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
              로그인
            </h1>
            <p className="mt-2 opacity-90" style={{ fontSize: 'var(--text-sm)' }}>
              한국종이접기협회에 오신 것을 환영합니다
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--origami-text-tertiary)]" />
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--origami-text-tertiary)]" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--origami-text-tertiary)] hover:text-[var(--origami-text-secondary)]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-[var(--origami-text-secondary)] cursor-pointer"
                    style={{ fontSize: 'var(--text-sm)' }}
                  >
                    로그인 유지
                  </label>
                </div>
                <a
                  href="#"
                  className="text-[var(--origami-blue)] hover:underline"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  비밀번호 찾기
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-[var(--origami-blue)] hover:bg-[var(--origami-blue)]/90"
                style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}
              >
                로그인
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--origami-border-default)]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-[var(--origami-text-tertiary)]" style={{ fontSize: 'var(--text-sm)' }}>
                  또는 소셜 로그인
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              {/* Google */}
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[var(--origami-border-default)] rounded-[var(--radius-base)] hover:bg-[var(--origami-light-gray)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>
                  Google로 시작하기
                </span>
              </button>

              {/* Kakao */}
              <button
                type="button"
                onClick={() => handleSocialLogin("kakao")}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-[var(--radius-base)] transition-colors"
                style={{ backgroundColor: '#FEE500' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C6.477 3 2 6.477 2 10.8c0 2.797 1.883 5.25 4.7 6.6-.194.7-.728 2.573-.842 2.985-.133.494.181.488.382.354.161-.108 2.598-1.75 3.014-2.032A13.2 13.2 0 0012 18.6c5.523 0 10-3.477 10-7.8S17.523 3 12 3z"
                    fill="#3C1E1E"
                  />
                </svg>
                <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: '#3C1E1E' }}>
                  카카오로 시작하기
                </span>
              </button>

              {/* Naver */}
              <button
                type="button"
                onClick={() => handleSocialLogin("naver")}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-[var(--radius-base)] transition-colors"
                style={{ backgroundColor: '#03C75A' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                <span className="text-white" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>
                  네이버로 시작하기
                </span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <span className="text-[var(--origami-text-tertiary)]" style={{ fontSize: 'var(--text-sm)' }}>
                계정이 없으신가요?{' '}
              </span>
              <a
                href="#"
                className="text-[var(--origami-blue)] hover:underline"
                style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}
              >
                회원가입
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-4 bg-[var(--origami-light-gray)] border-t border-[var(--origami-border-default)]">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--origami-blue)] flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div className="flex-1">
                <p className="text-[var(--origami-text-secondary)] mb-2" style={{ fontSize: 'var(--text-sm)' }}>
                  로그인에 문제가 있으신가요?
                </p>
                <p className="text-[var(--origami-text-tertiary)]" style={{ fontSize: 'var(--text-xs)' }}>
                  고객센터: <span className="text-[var(--origami-blue)]">02-1234-5678</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
