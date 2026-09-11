import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Rolagem suave com easing próprio — mais fluida e consistente entre
// navegadores do que o scroll padrão do navegador (que em alguns
// navegadores/webviews de celular ignora o "scroll-behavior: smooth" do
// CSS e pula direto, de forma seca).
const NAV_OFFSET = 72;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(hash) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + startY - NAV_OFFSET;
  const distance = targetY - startY;
  const duration = Math.min(1000, Math.max(450, Math.abs(distance) * 0.6));
  let startTime = null;

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo({ top: startY + distance * easeInOutCubic(progress), left: 0, behavior: "instant" });
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function handleAnchorClick(e, hash) {
  if (typeof window === "undefined") return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return; // deixa o navegador fazer o salto padrão, sem animação
  e.preventDefault();
  smoothScrollTo(hash);
  window.history.pushState(null, "", hash);
}
