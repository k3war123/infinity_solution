<script setup>
const aboutCards = [
  {
    title: "HACCP Certified",
    desc: "Full food safety hazard management at every stage.",
    bg: "bg-green-50",
    icon: "bi bi-shield-fill-check",
    color: "#16a34a",
  },
  {
    title: "ISO 22000",
    desc: "International food safety management system.",
    bg: "bg-blue-50",
    icon: "bi bi-award-fill",
    color: "#2563eb",
  },
  {
    title: "Turnkey Projects",
    desc: "Design through commissioning — one partner, zero gaps.",
    bg: "bg-teal-50",
    icon: "bi bi-tools",
    color: "#0d9488",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance and spares supply.",
    bg: "bg-amber-50",
    icon: "bi bi-headset",
    color: "#d97706",
  },
];
</script>

<template>
  <section id="about" class="py-28 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-10">
        <span class="w-8 h-px bg-teal-400 inline-block"></span> Who We Are
      </div>
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal fade-left">
          <h2 class="section-title text-slate-800 leading-[1.15] mb-6">
            Precision Engineering for Food &amp; Beverage Industry
          </h2>
          <p class="text-slate-500 text-base leading-relaxed mb-5">
            Infinity Solution was founded to bridge the gap between cutting-edge industrial engineering
            and the demanding world of food &amp; beverage production. We design, install, and commission
            complete processing lines that meet international hygiene and safety standards.
          </p>
          <p class="text-slate-500 text-base leading-relaxed">
            From single-skid pasteurizers to fully integrated dairy plants, we deliver turnkey projects
            and long-term service partnerships across the region.
          </p>
        </div>
        <div class="reveal fade-right grid grid-cols-2 gap-4">
          <div
            v-for="item in aboutCards" :key="item.title"
            class="bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-5 transition-all duration-300 cursor-default group"
          >
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" :class="item.bg">
              <i :class="item.icon + ' text-xl'" :style="{ color: item.color }"></i>
            </div>
            <h4 class="font-bold text-slate-800 text-sm mb-1">{{ item.title }}</h4>
            <p class="text-slate-500 text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>