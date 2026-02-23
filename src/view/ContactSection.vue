<script setup>
const channels = [
  {
    label: "Email Us",
    href: "mailto:info@infinity-solution.com",
    icon: "bi bi-envelope-fill",
    bg: "bg-teal-50",
    value: "info@infinity-solution.com",
  },
  {
    label: "Call Us",
    href: "tel:+9647000000000",
    icon: "bi bi-telephone-fill",
    bg: "bg-blue-50",
    value: "+964 700 000 0000",
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: "bi bi-whatsapp",
    bg: "bg-green-50",
    value: "Quick Chat Available",
  },
];
</script>

<template>
  <section id="contact" class="py-28 bg-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
      <div class="reveal fade-left">
        <div class="inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5">
          <span class="w-8 h-px bg-teal-400 inline-block"></span> Let's Talk
        </div>
        <h2 class="section-title text-slate-800 leading-tight mb-6">
          Ready to Build<br />Your Next Line?
        </h2>
        <p class="text-slate-500 text-base leading-relaxed mb-10">
          Reach out with your project scope and we'll respond within one business day
          with a preliminary assessment and engineering consultation.
        </p>
        <div class="space-y-4">
          <a v-for="ch in channels" :key="ch.label" :href="ch.href"
            class="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-300 hover:shadow-md transition-all duration-300 group">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-colors duration-300" :class="ch.bg">
              <i :class="ch.icon + ' text-lg text-teal-600 group-hover:text-white transition-colors duration-200'"></i>
            </div>
            <div>
              <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{{ ch.label }}</div>
              <div class="text-sm font-medium text-slate-700">{{ ch.value }}</div>
            </div>
          </a>
        </div>
      </div>

      <form class="reveal fade-right bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100" @submit.prevent>
        <h3 class="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
          <i class="bi bi-send-fill text-teal-500 text-base"></i> Send an Inquiry
        </h3>
        <div class="space-y-5">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Full Name</label>
              <input type="text" placeholder="Ahmed Al-Rashid" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Company</label>
              <input type="text" placeholder="Your Company" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Email Address</label>
            <input type="email" placeholder="you@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Service Needed</label>
            <select class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all bg-white">
              <option>Milk Processing Plant</option>
              <option>Beverage Treatment System</option>
              <option>Packaging Automation Line</option>
              <option>SCADA / Automation</option>
              <option>After-Sales Support</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Project Description</label>
            <textarea rows="4" placeholder="Describe your processing or packaging requirement…" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all resize-none"></textarea>
          </div>
          <button type="submit" class="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[14px] tracking-wide py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-200">
            <i class="bi bi-send-fill text-sm"></i> Send Inquiry
          </button>
        </div>
      </form>
    </div>
  </section>
</template>