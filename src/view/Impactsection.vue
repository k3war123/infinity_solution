<script setup>
const stats = [
  { val: 14, suffix: "+", label: "Years Experience" },
  { val: 320, suffix: "+", label: "Projects Delivered" },
  { val: 40, suffix: "+", label: "Countries Served" },
  { val: 98, suffix: "%", label: "Client Satisfaction" },
];
</script>

<template>
  <section id="impact" class="py-20 bg-linear-to-r from-teal-600 to-cyan-600 relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-10 pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px);"
    ></div>
    <div class="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(s, i) in stats" :key="s.label" class="reveal fade-up" :style="`--d:${i * 0.1}s`">
        <div
          class="counter text-5xl font-extrabold text-white mb-2"
          :data-target="s.val"
          :data-suffix="s.suffix"
        >
          {{ "0" + s.suffix }}
        </div>
        <div class="text-cyan-100 text-sm font-medium tracking-wide">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>