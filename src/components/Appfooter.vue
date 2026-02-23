<script setup>
const footerCols = [
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "#home", icon: "bi bi-house-fill" },
      { label: "About Us", href: "#about", icon: "bi bi-info-circle-fill" },
      { label: "Services", href: "#services", icon: "bi bi-grid-fill" },
      { label: "Impact", href: "#impact", icon: "bi bi-bar-chart-fill" },
      { label: "Team", href: "#team", icon: "bi bi-people-fill" },
      { label: "Contact", href: "#contact", icon: "bi bi-chat-dots-fill" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Milk Processing" },
      { label: "Beverage Treatment" },
      { label: "Packaging Lines" },
      { label: "SCADA Automation" },
      { label: "After-Sales Support" },
    ],
  },
];

const socials = [
  { icon: "bi bi-facebook" },
  { icon: "bi bi-linkedin" },
  { icon: "bi bi-instagram" },
  { icon: "bi bi-youtube" },
];
</script>

<template>
  <footer class="bg-slate-900 text-slate-400 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center p-1">
              <img src="@/assets/infinity2.png" alt="Infinity Solution Logo" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="block font-bold text-white text-[15px]">Infinity</span>
              <span class="block text-teal-500 text-[10px] font-semibold tracking-widest uppercase">Solution</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed mb-6">
            Industrial leader in beverage &amp; milk treatment and packaging systems. Delivering excellence without limits.
          </p>
          <div class="flex gap-3">
            <a v-for="s in socials" :key="s.icon" href="#"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
              <i :class="s.icon + ' text-sm text-slate-400 hover:text-white'"></i>
            </a>
          </div>
        </div>

        <div v-for="col in footerCols" :key="col.title">
          <h5 class="text-white text-[12px] font-bold tracking-widest uppercase mb-5">{{ col.title }}</h5>
          <ul class="space-y-3">
            <li v-for="item in col.items" :key="item.label">
              <a :href="item.href || '#'" class="text-sm text-slate-500 hover:text-teal-400 transition-colors duration-200 flex items-center gap-1.5">
                <i v-if="item.icon" :class="item.icon + ' text-xs text-teal-600'"></i>
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-white text-[12px] font-bold tracking-widest uppercase mb-5">Certifications</h5>
          <ul class="space-y-3">
            <li v-for="c in ['HACCP Certified','ISO 22000 : 2018','FDA Compliant','CE Marked Systems','DIN / ASME Piping']" :key="c"
              class="text-sm text-slate-500 flex items-center gap-1.5">
              <i class="bi bi-patch-check-fill text-xs text-teal-600"></i>
              {{ c }}
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <span>© 2026 Infinity Solution · All Rights Reserved</span>
        <span class="flex items-center gap-1.5">
          <i class="bi bi-geo-alt-fill text-teal-600"></i> Kurdistan · UAE · Regional Coverage
        </span>
      </div>
    </div>
  </footer>
</template>