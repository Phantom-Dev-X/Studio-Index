import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "../components/publicComponets/LandingHeader";

// 3 Dummy registered accounts with passwords
const DUMMY_REGISTERED_USERS = [
  { email: "user@brand.com", password: "Password123!" },
  { email: "lola@studio.com", password: "Password123!" },
  { email: "admin@index.com", password: "Password123!" },
];

export default function LoginPage() {
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<number>(1);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);

  // Email form state
  const [inputValue, setInputValue] = useState<string>("");
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");

  // Returning user login state
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  // New user signup state
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [hasSignupError, setHasSignupError] = useState<boolean>(false);
  const [signupErrorMessage, setSignupErrorMessage] = useState<string>("");

  // Page 3 Studio Name & Instagram state
  const [studioName, setStudioName] = useState<string>("");
  const [hasStudioError, setHasStudioError] = useState<boolean>(false);
  const [studioErrorMessage, setStudioErrorMessage] = useState<string>("");

  const [instagramHandle, setInstagramHandle] = useState<string>("");
  const [hasInstagramError, setHasInstagramError] = useState<boolean>(false);
  const [instagramErrorMessage, setInstagramErrorMessage] = useState<string>("");

  // Canvas particle ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/~`]/;

  // Calculate password strength for create-password input
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { level: "empty", color: "border-white/[0.16]" };

    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = symbolRegex.test(pass);
    const isLongEnough = pass.length >= 8;

    // Very Strong: 8+ chars, upper, lower, number, and symbol
    if (isLongEnough && hasLower && hasUpper && (hasNumber || hasSymbol) && hasSymbol) {
      return { level: "strong", color: "border-emerald-500" };
    }

    // Medium: has upper & lower, or 8+ chars with upper
    if (hasUpper && (hasLower || isLongEnough)) {
      return { level: "medium", color: "border-[#f5b82e]" };
    }

    // Weak / basic text
    return { level: "weak", color: "border-white/[0.16]" };
  };

  const strength = getPasswordStrength(newPassword);

  const handleContinue = () => {
    const trimmedEmail = inputValue.trim().toLowerCase();
    if (!trimmedEmail) {
      setEmailErrorMessage("Please enter your email address.");
      setHasEmailError(true);
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      setHasEmailError(true);
      return;
    }

    // Email is valid
    setHasEmailError(false);
    setEmailErrorMessage("");

    // Check if email exists in registered accounts
    const exists = DUMMY_REGISTERED_USERS.some(
      (user) => user.email.toLowerCase() === trimmedEmail
    );
    setIsRegistered(exists);
    setPageState(2);
  };

  const handleSignIn = () => {
    const trimmedEmail = inputValue.trim().toLowerCase();
    const user = DUMMY_REGISTERED_USERS.find(
      (u) => u.email.toLowerCase() === trimmedEmail
    );

    if (user && user.password === passwordValue) {
      setHasPasswordError(false);
      setPasswordErrorMessage("");
      setShowWelcome(true);
    } else {
      setHasPasswordError(true);
      setPasswordErrorMessage("Password or email is not correct");
    }
  };

  const handleCreateAccount = () => {
    if (!newPassword || newPassword.length < 8) {
      setHasSignupError(true);
      setSignupErrorMessage("Password must be at least 8 characters.");
      return;
    }

    const hasUpper = /[A-Z]/.test(newPassword);
    if (!hasUpper) {
      setHasSignupError(true);
      setSignupErrorMessage("Password must contain at least one uppercase letter.");
      return;
    }

    const hasSymbol = symbolRegex.test(newPassword);
    if (!hasSymbol) {
      setHasSignupError(true);
      setSignupErrorMessage("Password must contain at least one symbol (e.g. @, ., #, $, !).");
      return;
    }

    if (newPassword !== confirmPassword) {
      setHasSignupError(true);
      setSignupErrorMessage("Passwords don't match.");
      return;
    }

    setHasSignupError(false);
    setSignupErrorMessage("");
    // Move on to Step 3: Name your studio
    setPageState(3);
  };

  const handleOpenStudio = () => {
    let hasError = false;

    // Check studio name: at least 5 letters
    const trimmedStudio = studioName.trim();
    if (trimmedStudio.length < 5) {
      setHasStudioError(true);
      setStudioErrorMessage("Studio name must be at least 5 characters long.");
      hasError = true;
    } else {
      setHasStudioError(false);
      setStudioErrorMessage("");
    }

    // Check Instagram handle: cannot be empty
    const trimmedInstagram = instagramHandle.trim();
    if (!trimmedInstagram) {
      setHasInstagramError(true);
      setInstagramErrorMessage("Instagram handle cannot be empty.");
      hasError = true;
    } else {
      setHasInstagramError(false);
      setInstagramErrorMessage("");
    }

    if (!hasError) {
      setShowWelcome(true);
    }
  };

  const goToStore = () => {
    navigate("/stores");
  };

  // Welcome sequence particles & redirect timer
  useEffect(() => {
    if (!showWelcome) return;

    let rafId: number;
    let goTimerId: number;
    const startTime = performance.now();

    // Auto-navigate after sequence finishes (~4.6s)
    goTimerId = window.setTimeout(goToStore, 4600);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;

      const resize = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      window.addEventListener("resize", resize);

      const cx = () => window.innerWidth / 2;
      const cy = () => window.innerHeight / 2 - 60;
      const N = 160;

      const parts = Array.from({ length: N }, () => {
        const a = Math.random() * Math.PI * 2;
        const sp = 2 + Math.random() * 7;
        return {
          x: cx(),
          y: cy(),
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          r: 0.8 + Math.random() * 2.2,
          delay: Math.random() * 0.4,
        };
      });

      const frame = (now: number) => {
        if (!ctx) return;
        const t = (now - startTime) / 1000;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (const p of parts) {
          if (t < p.delay) continue;
          if (t < 1.4) {
            // burst outward
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.94;
            p.vy *= 0.94;
          } else {
            // pull toward the ring center
            const dx = cx() - p.x;
            const dy = cy() - p.y;
            p.x += dx * 0.06;
            p.y += dy * 0.06;
          }

          const fade = t > 2.6 ? Math.max(0, 1 - (t - 2.6) * 1.5) : 1;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 217, 118, ${0.85 * fade})`;
          ctx.shadowColor = "rgba(245, 184, 46, 0.9)";
          ctx.shadowBlur = 10;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0;

        if (t < 3.4) {
          rafId = requestAnimationFrame(frame);
        } else {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
      };

      rafId = requestAnimationFrame(frame);

      return () => {
        clearTimeout(goTimerId);
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
      };
    }

    return () => {
      clearTimeout(goTimerId);
    };
  }, [showWelcome]);

  const handleBack = () => {
    if (pageState > 1) {
      setPageState((prev) => prev - 1);
      // Reset errors on back
      setHasPasswordError(false);
      setPasswordErrorMessage("");
      setHasSignupError(false);
      setSignupErrorMessage("");
      setHasStudioError(false);
      setStudioErrorMessage("");
      setHasInstagramError(false);
      setInstagramErrorMessage("");
    }
  };

  const resetToEmail = () => {
    setPageState(1);
    setInputValue("");
    setPasswordValue("");
    setNewPassword("");
    setConfirmPassword("");
    setStudioName("");
    setInstagramHandle("");
    setHasEmailError(false);
    setEmailErrorMessage("");
    setHasPasswordError(false);
    setPasswordErrorMessage("");
    setHasSignupError(false);
    setSignupErrorMessage("");
    setHasStudioError(false);
    setStudioErrorMessage("");
    setHasInstagramError(false);
    setInstagramErrorMessage("");
  };

  const welcomeLetters = [
    { char: "Y", gold: false, delay: "1.6s" },
    { char: "o", gold: false, delay: "1.66s" },
    { char: "u", gold: false, delay: "1.72s" },
    { char: "'", gold: false, delay: "1.78s" },
    { char: "r", gold: false, delay: "1.84s" },
    { char: "e", gold: false, delay: "1.9s" },
    { char: "\u00A0", gold: false, delay: "1.93s" },
    { char: "i", gold: true, delay: "1.96s" },
    { char: "n", gold: true, delay: "2.02s" },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#f5f5f5] relative overflow-x-hidden font-['Poppins',system-ui,sans-serif]">
      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Ambient Glows */}
      <div
        className="fixed w-[520px] h-[520px] rounded-full pointer-events-none blur-[40px] -top-40 -left-36"
        style={{ background: "radial-gradient(circle, rgba(245, 184, 46, 0.22), transparent 65%)" }}
      />
      <div
        className="fixed w-[520px] h-[520px] rounded-full pointer-events-none blur-[40px] -bottom-48 -right-28 opacity-70"
        style={{ background: "radial-gradient(circle, rgba(245, 184, 46, 0.22), transparent 65%)" }}
      />

      {/* Header */}
      <LandingHeader />

      {/* Main Content Shell */}
      <main className="relative z-10 max-w-[1180px] mx-auto px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-12 min-h-[calc(100vh-80px)]">
        {/* Left: Brand and Steps */}
        <section className="flex flex-col gap-7">
          <div className="flex items-center gap-2.5 font-bold text-xl">
            <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-[#f5b82e] to-[#b8801a] grid place-items-center text-black text-base font-bold shadow-sm">
              ✦
            </div>
            <span>
              Studio <span className="text-[#f5b82e]">Index</span>
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#f5b82e]">
            <span className="w-7 h-[1px] bg-[#f5b82e]" />
            Your storefront
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.06] tracking-[-0.02em]">
            Your followers,
            <br />
            <em className="not-italic text-[#f5b82e]">one step away</em>
            <br />
            from buying.
          </h1>

          <p className="text-[#9a9a9a] text-base leading-relaxed max-w-[440px]">
            Studio Index gives you one shareable link for your products. Customers add to cart, and orders arrive on WhatsApp.
          </p>

          <ol className="flex flex-col gap-3.5 max-w-[420px] mt-2">
            <li className="flex items-start gap-4 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-4 sm:p-[18px]">
              <span className="shrink-0 w-[30px] h-[30px] rounded-full border border-[#f5b82e] text-[#f5b82e] grid place-items-center text-[13px] font-semibold">
                1
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-white">Add your products</h3>
                <p className="text-[13px] text-[#9a9a9a] mt-0.5 leading-relaxed">
                  Upload photos, set prices, and mark what&apos;s in stock.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-4 sm:p-[18px]">
              <span className="shrink-0 w-[30px] h-[30px] rounded-full border border-[#f5b82e] text-[#f5b82e] grid place-items-center text-[13px] font-semibold">
                2
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-white">Share your link</h3>
                <p className="text-[13px] text-[#9a9a9a] mt-0.5 leading-relaxed">
                  Put it in your Instagram bio and in your stories.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-4 sm:p-[18px]">
              <span className="shrink-0 w-[30px] h-[30px] rounded-full border border-[#f5b82e] text-[#f5b82e] grid place-items-center text-[13px] font-semibold">
                3
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-white">Get orders on WhatsApp</h3>
                <p className="text-[13px] text-[#9a9a9a] mt-0.5 leading-relaxed">
                  Each order arrives with the customer&apos;s details, ready to confirm.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Right: The Login/Signup Door Panel */}
        <section className="bg-[#0d0d0d] border border-white/[0.16] rounded-3xl p-8 sm:p-10 shadow-[0_30px_80px_-30px_rgba(245,184,46,0.25)] transition-all">
          {/* Top Panel Bar */}
          <div className="flex justify-between items-center mb-7 min-h-[20px]">
            {pageState > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="text-[#9a9a9a] hover:text-white text-[13px] transition-colors cursor-pointer"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {/* Step dots indicator */}
            <div className="flex items-center gap-1.5 ml-auto">
              <span
                className={`w-6 h-[3px] rounded-full transition-colors duration-300 ${
                  pageState >= 1 ? "bg-[#f5b82e]" : "bg-white/[0.16]"
                }`}
              />
              <span
                className={`w-6 h-[3px] rounded-full transition-colors duration-300 ${
                  pageState >= 2 ? "bg-[#f5b82e]" : "bg-white/[0.16]"
                }`}
              />
              <span
                className={`w-6 h-[3px] rounded-full transition-colors duration-300 ${
                  pageState >= 3 ? "bg-[#f5b82e]" : "bg-white/[0.16]"
                }`}
              />
            </div>
          </div>

          {/* PAGE STATE 1: Email Form */}
          {pageState === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-white">
                Welcome to Studio Index
              </h2>
              <p className="text-[#9a9a9a] text-sm mt-2 leading-relaxed">
                Enter your email to sign in, or to create a new studio.
              </p>

              <div className="mt-6 relative">
                <label
                  htmlFor="email"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  Email
                </label>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (hasEmailError) {
                        setHasEmailError(false);
                        setEmailErrorMessage("");
                      }
                    }}
                    placeholder="name@brand.com"
                    autoComplete="email"
                    className="w-full bg-transparent border-0 border-b border-white/[0.16] py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none focus:border-[#f5b82e] transition-colors"
                  />

                  {/* Red error underline indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b6b] origin-left transition-transform duration-300 ease-out pointer-events-none ${
                      hasEmailError ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                <div className="text-xs text-[#ff6b6b] mt-2 min-h-[16px] leading-relaxed transition-opacity">
                  {hasEmailError && emailErrorMessage}
                </div>
              </div>

              <button
                id="continue"
                type="button"
                onClick={handleContinue}
                className="w-full mt-7 cursor-pointer bg-[#f5b82e] text-black font-semibold text-[15px] py-3.5 px-5 rounded-full shadow-[0_10px_30px_-10px_rgba(245,184,46,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(245,184,46,0.75)] active:scale-[0.98] transition-all"
              >
                Continue →
              </button>

              <div className="mt-6 text-center text-[13px] text-[#9a9a9a]">
                Different account?{" "}
                <button
                  type="button"
                  onClick={resetToEmail}
                  className="bg-transparent border-none text-[#f5b82e] font-semibold cursor-pointer hover:underline ml-1"
                >
                  Use another email
                </button>
              </div>
            </div>
          )}

          {/* PAGE STATE 2a: Returning Registered User (Sign In) */}
          {pageState === 2 && isRegistered && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-white">
                Welcome back
              </h2>
              <p className="text-[#9a9a9a] text-sm mt-2 leading-relaxed">
                Signing in as <strong className="text-white font-medium">{inputValue}</strong>
              </p>

              <div className="mt-6 relative">
                <label
                  htmlFor="password"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  <span>Password</span>
                  <a href="#" className="text-[#f5b82e] hover:underline">
                    Forgot?
                  </a>
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={passwordValue}
                    onChange={(e) => {
                      setPasswordValue(e.target.value);
                      if (hasPasswordError) {
                        setHasPasswordError(false);
                        setPasswordErrorMessage("");
                      }
                    }}
                    placeholder="Your password"
                    autoComplete="current-password"
                    className="w-full bg-transparent border-0 border-b border-white/[0.16] py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none focus:border-[#f5b82e] transition-colors"
                  />

                  {/* Red error underline indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b6b] origin-left transition-transform duration-300 ease-out pointer-events-none ${
                      hasPasswordError ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                <div className="text-xs text-[#ff6b6b] mt-2 min-h-[16px] leading-relaxed transition-opacity">
                  {hasPasswordError && passwordErrorMessage}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSignIn}
                className="w-full mt-7 cursor-pointer bg-[#f5b82e] text-black font-semibold text-[15px] py-3.5 px-5 rounded-full shadow-[0_10px_30px_-10px_rgba(245,184,46,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(245,184,46,0.75)] active:scale-[0.98] transition-all"
              >
                Sign in
              </button>

              <div className="mt-6 text-center text-[13px] text-[#9a9a9a]">
                Different account?{" "}
                <button
                  type="button"
                  onClick={resetToEmail}
                  className="bg-transparent border-none text-[#f5b82e] font-semibold cursor-pointer hover:underline ml-1"
                >
                  Use another email
                </button>
              </div>
            </div>
          )}

          {/* PAGE STATE 2b: New Unregistered User (Create Password) */}
          {pageState === 2 && !isRegistered && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-white">
                Create your password
              </h2>
              <p className="text-[#9a9a9a] text-sm mt-2 leading-relaxed">
                This email isn&apos;t registered yet. Set a password to create your studio.
              </p>

              {/* Password Input with Dynamic Strength Border */}
              <div className="mt-6 relative">
                <label
                  htmlFor="newPw"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="newPw"
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (hasSignupError) {
                        setHasSignupError(false);
                        setSignupErrorMessage("");
                      }
                    }}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    className={`w-full bg-transparent border-0 border-b py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none transition-colors duration-300 ${strength.color}`}
                  />
                </div>
              </div>

              {/* Confirm Password Input with Animated Red Error Underline */}
              <div className="mt-6 relative">
                <label
                  htmlFor="confirmPw"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPw"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (hasSignupError) {
                        setHasSignupError(false);
                        setSignupErrorMessage("");
                      }
                    }}
                    placeholder="Type it again"
                    autoComplete="new-password"
                    className="w-full bg-transparent border-0 border-b border-white/[0.16] py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none focus:border-[#f5b82e] transition-colors"
                  />

                  {/* Red error underline indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b6b] origin-left transition-transform duration-300 ease-out pointer-events-none ${
                      hasSignupError ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>

                <div className="text-xs text-[#ff6b6b] mt-2 min-h-[16px] leading-relaxed transition-opacity">
                  {hasSignupError && signupErrorMessage}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCreateAccount}
                className="w-full mt-7 cursor-pointer bg-[#f5b82e] text-black font-semibold text-[15px] py-3.5 px-5 rounded-full shadow-[0_10px_30px_-10px_rgba(245,184,46,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(245,184,46,0.75)] active:scale-[0.98] transition-all"
              >
                Create account
              </button>

              <ul className="mt-5 flex flex-col gap-2 text-[13px] text-[#9a9a9a]">
                <li className="flex items-center gap-2">
                  <span className={newPassword.length >= 8 ? "text-emerald-500 font-bold" : "text-[#f5b82e]"}>
                    ✓
                  </span>{" "}
                  At least 8 characters
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[A-Z]/.test(newPassword) ? "text-emerald-500 font-bold" : "text-[#f5b82e]"}>
                    ✓
                  </span>{" "}
                  At least one uppercase letter (A-Z)
                </li>
                <li className="flex items-center gap-2">
                  <span className={symbolRegex.test(newPassword) ? "text-emerald-500 font-bold" : "text-[#f5b82e]"}>
                    ✓
                  </span>{" "}
                  At least one symbol (e.g. ., @, #, $, !)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f5b82e]">✓</span> Used only for signing in to Studio Index
                </li>
              </ul>

              <div className="mt-6 text-center text-[13px] text-[#9a9a9a]">
                Different account?{" "}
                <button
                  type="button"
                  onClick={resetToEmail}
                  className="bg-transparent border-none text-[#f5b82e] font-semibold cursor-pointer hover:underline ml-1"
                >
                  Use another email
                </button>
              </div>
            </div>
          )}

          {/* PAGE STATE 3: Name Your Studio */}
          {pageState === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-white">
                Name your studio
              </h2>
              <p className="text-[#9a9a9a] text-sm mt-2 leading-relaxed">
                This is how customers will see your store. You can change it later.
              </p>

              {/* Studio Name Input */}
              <div className="mt-6 relative">
                <label
                  htmlFor="studioName"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  Studio name
                </label>
                <div className="relative">
                  <input
                    id="studioName"
                    value={studioName}
                    onChange={(e) => {
                      setStudioName(e.target.value);
                      if (hasStudioError) {
                        setHasStudioError(false);
                        setStudioErrorMessage("");
                      }
                    }}
                    placeholder="e.g. Lola's Closet"
                    className="w-full bg-transparent border-0 border-b border-white/[0.16] py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none focus:border-[#f5b82e] transition-colors"
                  />
                  {/* Red error underline indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b6b] origin-left transition-transform duration-300 ease-out pointer-events-none ${
                      hasStudioError ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
                <div className="text-xs text-[#ff6b6b] mt-2 min-h-[16px] leading-relaxed transition-opacity">
                  {hasStudioError && studioErrorMessage}
                </div>
              </div>

              {/* Instagram Handle Input */}
              <div className="mt-6 relative">
                <label
                  htmlFor="instagramHandle"
                  className="flex justify-between text-xs text-[#9a9a9a] tracking-wider mb-1"
                >
                  Instagram handle
                </label>
                <div className="relative">
                  <input
                    id="instagramHandle"
                    value={instagramHandle}
                    onChange={(e) => {
                      setInstagramHandle(e.target.value);
                      if (hasInstagramError) {
                        setHasInstagramError(false);
                        setInstagramErrorMessage("");
                      }
                    }}
                    placeholder="@yourhandle"
                    className="w-full bg-transparent border-0 border-b border-white/[0.16] py-2.5 text-lg text-white placeholder-[#5c5c5c] focus:outline-none focus:border-[#f5b82e] transition-colors"
                  />
                  {/* Red error underline indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b6b] origin-left transition-transform duration-300 ease-out pointer-events-none ${
                      hasInstagramError ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
                <div className="text-xs text-[#ff6b6b] mt-2 min-h-[16px] leading-relaxed transition-opacity">
                  {hasInstagramError && instagramErrorMessage}
                </div>
              </div>

              <button
                type="button"
                onClick={handleOpenStudio}
                className="w-full mt-7 cursor-pointer bg-[#f5b82e] text-black font-semibold text-[15px] py-3.5 px-5 rounded-full shadow-[0_10px_30px_-10px_rgba(245,184,46,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(245,184,46,0.75)] active:scale-[0.98] transition-all"
              >
                Open my studio →
              </button>
            </div>
          )}
        </section>
      </main>

      {/* ---------- Welcome Sequence Overlay ---------- */}
      {showWelcome && (
        <div
          role="region"
          aria-live="polite"
          onClick={() => {
            if (performance.now() > 1500) goToStore();
          }}
          className="fixed inset-0 z-50 bg-[#070707] flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-500 cursor-pointer"
        >
          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Animated Ring & Checkmark */}
          <div className="relative w-[150px] h-[150px] mb-8 pointer-events-none">
            {/* Glowing radial halo */}
            <div
              className="absolute -inset-[30px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(245,184,46,.45), transparent 62%)",
                animation: "haloIn 1.6s ease-out 1.5s forwards",
                opacity: 0,
                transform: "scale(0.4)",
              }}
            />

            <svg viewBox="0 0 150 150" className="w-full h-full overflow-visible">
              {/* Track */}
              <circle
                cx="75"
                cy="75"
                r="70"
                fill="none"
                stroke="rgba(245,184,46,0.18)"
                strokeWidth="1.5"
              />
              {/* Animated outer ring */}
              <circle
                cx="75"
                cy="75"
                r="70"
                fill="none"
                stroke="#f5b82e"
                strokeWidth="2.5"
                strokeLinecap="round"
                transform="rotate(-90 75 75)"
                style={{
                  strokeDasharray: 440,
                  strokeDashoffset: 440,
                  animation: "drawRing 1.1s cubic-bezier(.65,0,.35,1) 0.35s forwards",
                }}
              />
              {/* Animated checkmark tick */}
              <path
                d="M48 78 L67 97 L104 58"
                fill="none"
                stroke="#ffd976"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 70,
                  strokeDashoffset: 70,
                  animation: "drawTick 0.6s cubic-bezier(.65,0,.35,1) 1.35s forwards",
                }}
              />
            </svg>
          </div>

          {/* Letter-by-letter reveal: "You're in" */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none flex gap-[0.02em] select-none">
            {welcomeLetters.map((item, idx) => (
              <span
                key={idx}
                className={`inline-block ${
                  item.gold
                    ? "bg-gradient-to-r from-[#b8801a] via-[#f5b82e] to-[#fff3c4] bg-[length:220%_100%] bg-clip-text text-transparent"
                    : "text-white"
                }`}
                style={{
                  opacity: 0,
                  transform: "translateY(24px) scale(0.96)",
                  filter: "blur(10px)",
                  animation: `charIn 0.9s cubic-bezier(.2,.8,.2,1) ${item.delay} forwards${
                    item.gold ? ", shimmer 2.4s linear 2.9s infinite" : ""
                  }`,
                }}
              >
                {item.char}
              </span>
            ))}
          </h2>

          <p
            className="mt-4 text-[#9a9a9a] text-base select-none"
            style={{
              opacity: 0,
              transform: "translateY(10px)",
              animation: "charIn 0.8s ease 2.4s forwards",
            }}
          >
            Your studio is ready. Opening your store.
          </p>

          {/* Countdown Progress Bar */}
          <div className="w-[min(340px,72vw)] h-0.5 bg-white/[0.16] rounded-full mt-10 overflow-hidden">
            <i
              className="block h-full bg-gradient-to-r from-[#b8801a] to-[#ffd976] shadow-[0_0_14px_#f5b82e]"
              style={{
                width: 0,
                animation: "fillProgress 3.6s cubic-bezier(.4,0,.2,1) 1.2s forwards",
              }}
            />
          </div>

          {/* Skip Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToStore();
            }}
            className="absolute bottom-7 right-7 bg-transparent border-none text-[#5c5c5c] hover:text-[#9a9a9a] text-sm cursor-pointer transition-colors"
            style={{
              opacity: 0,
              animation: "charIn 0.6s ease 1s forwards",
            }}
          >
            Skip
          </button>
        </div>
      )}

      {/* Global Embedded Animations */}
      <style>{`
        @keyframes drawRing {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawTick {
          to { stroke-dashoffset: 0; }
        }
        @keyframes haloIn {
          0% { opacity: 0; transform: scale(0.4); }
          40% { opacity: 1; }
          100% { opacity: 0.35; transform: scale(1.15); }
        }
        @keyframes charIn {
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes shimmer {
          from { background-position: 100% 0; }
          to { background-position: -100% 0; }
        }
        @keyframes fillProgress {
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
