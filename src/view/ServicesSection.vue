<script setup>
const services = [
  {
    title: "Milk Processing Plants",
    desc: "Complete pasteurization, homogenization, and UHT systems. Fully automated and CIP-ready from raw milk to final product.",
    icon: "bi bi-droplet-half",
    bg: "bg-teal-50",
    color: "#0d9488",
    tags: ["UHT", "Pasteurization", "Homogenization"],
  },
  {
    title: "Beverage Treatment",
    desc: "Multi-stage filtration, deaeration, carbonation, and blending systems for juices, soft drinks, and RTD beverages.",
    icon: "bi bi-moisture",
    bg: "bg-cyan-50",
    color: "#0891b2",
    tags: ["Filtration", "Carbonation", "Blending"],
  },
  {
    title: "Hygienic Piping Networks",
    desc: "Stainless steel process piping, valve manifolds, and CIP/SIP circuit design. Pressure-tested to DIN and ASME standards.",
    icon: "bi bi-diagram-3-fill",
    bg: "bg-sky-50",
    color: "#0284c7",
    tags: ["SS316L", "CIP/SIP", "Orbital Weld"],
  },
  {
    title: "Packaging Automation",
    desc: "High-speed filling, capping, labeling, and cartoning lines. Aseptic and hot-fill for Tetra, PET, glass, and pouch formats.",
    icon: "bi bi-box-seam-fill",
    bg: "bg-violet-50",
    color: "#7c3aed",
    tags: ["Aseptic", "Hot-fill", "High Speed"],
  },
  {
    title: "SCADA & PLC Control",
    desc: "Integrated SCADA, PLC automation, and inline analytics for real-time process monitoring, alarming, and compliance reporting.",
    icon: "bi bi-cpu-fill",
    bg: "bg-emerald-50",
    color: "#059669",
    tags: ["SCADA", "PLC", "Inline Analytics"],
  },
  {
    title: "After-Sales & Training",
    desc: "Preventive maintenance contracts, spare-parts management, operator training, and 24/7 technical support to maximize uptime.",
    icon: "bi bi-people-fill",
    bg: "bg-amber-50",
    color: "#d97706",
    tags: ["Maintenance", "Spares", "Training"],
  },
];
</script>

<template>
  <section id="services" class="py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4">
          <span class="w-8 h-px bg-teal-400 inline-block"></span> What We Do
          <span class="w-8 h-px bg-teal-400 inline-block"></span>
        </div>
        <h2 class="reveal fade-up section-title text-slate-800">End-to-End Solutions</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(s, i) in services" :key="s.title"
          class="reveal fade-up bg-white rounded-2xl p-7 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300 group cursor-default"
          :style="`--d:${i * 0.08}s`"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" :class="s.bg">
              <i :class="s.icon + ' text-2xl'" :style="{ color: s.color }"></i>
            </div>
            <span class="text-[11px] font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-300">
              {{ String(i + 1).padStart(2, "0") }}
            </span>
          </div>
          <h3 class="font-bold text-slate-800 text-[17px] mb-3 leading-snug">{{ s.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-5">{{ s.desc }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in s.tags" :key="t" class="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500">
              {{ t }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>