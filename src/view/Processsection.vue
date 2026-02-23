<script setup>
const steps = [
  {
    title: "Discovery & Audit",
    desc: "Assess production requirements, site conditions, utilities, and compliance targets.",
    icon: "bi bi-search",
    bg: "bg-teal-50 border-2 border-teal-200",
    color: "#0d9488",
  },
  {
    title: "Engineering Design",
    desc: "P&IDs, 3D layouts, equipment selection, and detailed BOM submitted for approval.",
    icon: "bi bi-rulers",
    bg: "bg-blue-50 border-2 border-blue-200",
    color: "#2563eb",
  },
  {
    title: "Fabrication & FAT",
    desc: "Manufacturing, Factory Acceptance Testing, and documentation package before shipment.",
    icon: "bi bi-gear-wide-connected",
    bg: "bg-violet-50 border-2 border-violet-200",
    color: "#7c3aed",
  },
  {
    title: "Commissioning & SAT",
    desc: "On-site installation, commissioning, Site Acceptance Testing, and operator handover.",
    icon: "bi bi-check2-circle",
    bg: "bg-green-50 border-2 border-green-200",
    color: "#16a34a",
  },
];
</script>

<template>
  <section class="py-28 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4">
          <span class="w-8 h-px bg-teal-400 inline-block"></span> How We Work
          <span class="w-8 h-px bg-teal-400 inline-block"></span>
        </div>
        <h2 class="reveal fade-up section-title text-slate-800">Our Process</h2>
      </div>
      <div class="grid md:grid-cols-4 gap-6 relative">
        <div class="hidden md:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-teal-200 via-teal-400 to-teal-200"></div>
        <div
          v-for="(step, i) in steps" :key="step.title"
          class="reveal fade-up text-center relative"
          :style="`--d:${i * 0.15}s`"
        >
          <div
            class="w-24 h-24 rounded-full mx-auto mb-6 flex flex-col items-center justify-center relative z-10 shadow-lg transition-transform duration-300 hover:scale-105"
            :class="step.bg"
          >
            <i :class="step.icon + ' text-2xl mb-1'" :style="{ color: step.color }"></i>
            <span class="text-[10px] font-bold" :style="{ color: step.color }">Step {{ i + 1 }}</span>
          </div>
          <h4 class="font-bold text-slate-800 text-[15px] mb-2">{{ step.title }}</h4>
          <p class="text-slate-500 text-sm leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>