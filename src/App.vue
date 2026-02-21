<template>
  <router-view />
</template>
<style>
/* ── FONTS ── */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap");

.font-dm {
  font-family: "DM Sans", sans-serif;
}
.hero-title {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(40px, 5.5vw, 68px);
}
.section-title {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(30px, 3.5vw, 48px);
}

/* ── SCROLL REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.75s ease,
    transform 0.75s ease;
  transition-delay: var(--d, 0s);
}
.reveal.fade-left {
  transform: translateX(-28px);
}
.reveal.fade-right {
  transform: translateX(28px);
}
.reveal.revealed {
  opacity: 1 !important;
  transform: none !important;
}

html {
  scroll-behavior: smooth;
}

/* ── BLOB KEYFRAMES ── */
@keyframes blobDrift {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.1) translate(20px, -30px);
  }
}
@keyframes blobDriftSlow {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.08) translate(-15px, 20px);
  }
}
.blob-anim {
  animation: blobDrift 10s ease-in-out infinite;
}
.blob-anim-slow {
  animation: blobDriftSlow 14s ease-in-out infinite;
}

/* ── FLOAT BADGES ── */
@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.float-badge {
  animation: floatBadge 4s ease-in-out infinite;
  animation-delay: var(--fd, 0s);
}
</style>