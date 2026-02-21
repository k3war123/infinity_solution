<script setup>
import { onMounted, ref } from "vue";

const menuOpen = ref(false);

/* ── Scroll Reveal ── */
const initReveal = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
};

/* ── Animated Counters ── */
const initCounters = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = target / 70;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current) + suffix;
          }, 18);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll(".counter").forEach((el) => io.observe(el));
};

onMounted(() => {
  initReveal();
  initCounters();
});

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

const stats = [
  { val: 14, suffix: "+", label: "Years Experience" },
  { val: 320, suffix: "+", label: "Projects Delivered" },
  { val: 40, suffix: "+", label: "Countries Served" },
  { val: 98, suffix: "%", label: "Client Satisfaction" },
];

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

const socials = [
  { icon: "bi bi-facebook" },
  { icon: "bi bi-linkedin" },
  { icon: "bi bi-instagram" },
  { icon: "bi bi-youtube" },
];

const footerCols = [
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "#home", icon: "bi bi-house-fill" },
      { label: "About Us", href: "#about", icon: "bi bi-info-circle-fill" },
      { label: "Services", href: "#services", icon: "bi bi-grid-fill" },
      { label: "Impact", href: "#impact", icon: "bi bi-bar-chart-fill" },
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
</script>

<template>
  <div class="font-dm text-slate-700 bg-white overflow-x-hidden">
    <!-- ══════════════ NAVBAR ══════════════ -->
    <nav
      class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-6 h-17 flex items-center gap-8">
        <a href="#home" class="flex items-center gap-3 shrink-0">
          <div
            class="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md shadow-teal-200 p-1"
          >
            <img
              src="@/assets/infinity2.png"
              alt="Infinity Solution Logo"
              class="w-full h-full object-contain"
            />
          </div>

          <div class="leading-tight">
            <span
              class="block font-bold text-slate-800 text-[15px] tracking-tight"
              >Infinity</span
            >
            <span
              class="block text-teal-600 text-[10px] font-semibold tracking-[0.12em] uppercase"
              >Solution</span
            >
          </div>
        </a>

        <ul class="hidden md:flex gap-7 ml-auto list-none">
          <li
            v-for="link in ['Home', 'About', 'Services', 'Impact', 'Contact']"
            :key="link"
          >
            <a
              :href="`#${link.toLowerCase()}`"
              class="text-[13px] font-medium text-slate-500 hover:text-teal-600 tracking-wide transition-colors duration-200"
            >
              {{ link }}
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          class="hidden md:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-[13px] font-semibold tracking-wide px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
        >
          <i class="bi bi-chat-dots-fill text-sm"></i> Get a Quote
        </a>

        <button
          class="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
          @click="menuOpen = !menuOpen"
        >
          <i
            :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"
            class="text-xl"
          ></i>
        </button>
      </div>

      <div
        v-if="menuOpen"
        class="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4"
      >
        <a
          v-for="link in ['Home', 'About', 'Services', 'Impact', 'Contact']"
          :key="link"
          :href="`#${link.toLowerCase()}`"
          class="text-sm font-medium text-slate-600 hover:text-teal-600 py-1"
          @click="menuOpen = false"
        >
          {{ link }}
        </a>
      </div>
    </nav>

    <!-- ══════════════ HERO ══════════════ -->
    <section
      id="home"
      class="relative min-h-screen flex items-center pt-17 overflow-hidden bg-linear-to-br from-slate-50 via-cyan-50 to-teal-50"
    >
      <!-- Blobs -->
      <div
        class="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-teal-400/10 blob-anim pointer-events-none"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 w-100 h-100 rounded-full bg-cyan-300/10 blob-anim-slow pointer-events-none"
      ></div>
      <!-- Rings -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 rounded-full border border-teal-100/60 pointer-events-none"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 rounded-full border border-teal-100/50 pointer-events-none"
      ></div>

      <div
        class="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center"
      >
        <!-- Text -->
        <div>
          <div
            class="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <i class="bi bi-patch-check-fill text-teal-500"></i>
            Industrial Grade · Est. 2010
          </div>

          <h1 class="hero-title text-slate-800 leading-[1.1] mb-6">
            Beverage &amp; Dairy<br />
            <em class="text-teal-600 not-italic">Treatment &amp;</em><br />
            Packaging Systems
          </h1>

          <p class="text-[17px] leading-relaxed text-slate-500 mb-10 max-w-125">
            Engineering-first solutions for milk processing, fluid treatment,
            and high-speed packaging — built for scale, compliance, and
            long-term reliability.
          </p>

          <div class="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[14px] tracking-wide px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200"
            >
              <i class="bi bi-send-fill text-sm"></i> Request Consultation
            </a>
            <a
              href="#services"
              class="inline-flex items-center gap-2 border border-slate-300 hover:border-teal-400 text-slate-600 hover:text-teal-600 font-semibold text-[14px] px-7 py-4 rounded-xl transition-all duration-200"
            >
              Our Services <i class="bi bi-arrow-down text-sm"></i>
            </a>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap gap-3">
            <span
              v-for="b in ['HACCP', 'ISO 22000', 'FDA Compliant', 'CE Marked']"
              :key="b"
              class="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-500 text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-sm"
            >
              <i class="bi bi-shield-fill-check text-teal-500 text-xs"></i>
              {{ b }}
            </span>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative hidden md:flex items-center justify-center h-105">
          <!-- Back glow card -->
          <div
            class="absolute w-72 h-72 rounded-3xl bg-linear-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-teal-300/40 rotate-6 opacity-20"
          ></div>
          <!-- Main card -->
          <div
            class="relative z-10 bg-white rounded-3xl shadow-2xl shadow-slate-200 p-8 w-72"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-200"
            >
              <i class="bi bi-droplet-half text-white text-3xl"></i>
            </div>
            <h3 class="font-bold text-slate-800 text-lg mb-2">
              Processing Systems
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-4">
              Complete milk &amp; beverage treatment with advanced filtration
              and sterilization.
            </p>
            <div class="flex gap-2">
              <span
                class="text-xs bg-teal-50 text-teal-700 font-medium px-2.5 py-1 rounded-lg"
                >UHT</span
              >
              <span
                class="text-xs bg-cyan-50 text-cyan-700 font-medium px-2.5 py-1 rounded-lg"
                >CIP Ready</span
              >
            </div>
          </div>
          <!-- Floating badges -->
          <div
            class="absolute top-6 right-0 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge"
            style="--fd: 0s"
          >
            <div
              class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center"
            >
              <i class="bi bi-award-fill text-amber-500 text-lg"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-800">ISO 22000</div>
              <div class="text-[10px] text-slate-400">Certified</div>
            </div>
          </div>
          <div
            class="absolute bottom-10 right-4 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge"
            style="--fd: 1s"
          >
            <div
              class="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center"
            >
              <i class="bi bi-graph-up-arrow text-green-500 text-lg"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-800">98% Uptime</div>
              <div class="text-[10px] text-slate-400">Guaranteed</div>
            </div>
          </div>
          <div
            class="absolute top-16 left-0 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge"
            style="--fd: 0.5s"
          >
            <div
              class="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center"
            >
              <i class="bi bi-people-fill text-teal-500 text-lg"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-800">320+ Projects</div>
              <div class="text-[10px] text-slate-400">Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════ ABOUT ══════════════ -->
    <section id="about" class="py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div
          class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-10"
        >
          <span class="w-8 h-px bg-teal-400 inline-block"></span> Who We Are
        </div>
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="reveal fade-left">
            <h2 class="section-title text-slate-800 leading-[1.15] mb-6">
              Precision Engineering for Food &amp; Beverage Industry
            </h2>
            <p class="text-slate-500 text-base leading-relaxed mb-5">
              Infinity Solution was founded to bridge the gap between
              cutting-edge industrial engineering and the demanding world of
              food &amp; beverage production. We design, install, and commission
              complete processing lines that meet international hygiene and
              safety standards.
            </p>
            <p class="text-slate-500 text-base leading-relaxed">
              From single-skid pasteurizers to fully integrated dairy plants, we
              deliver turnkey projects and long-term service partnerships across
              the region.
            </p>
          </div>
          <div class="reveal fade-right grid grid-cols-2 gap-4">
            <div
              v-for="item in aboutCards"
              :key="item.title"
              class="bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl p-5 transition-all duration-300 cursor-default group"
            >
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                :class="item.bg"
              >
                <i
                  :class="item.icon + ' text-xl'"
                  :style="{ color: item.color }"
                ></i>
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">
                {{ item.title }}
              </h4>
              <p class="text-slate-500 text-xs leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════ SERVICES ══════════════ -->
    <section id="services" class="py-28 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div
            class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4"
          >
            <span class="w-8 h-px bg-teal-400 inline-block"></span> What We Do
            <span class="w-8 h-px bg-teal-400 inline-block"></span>
          </div>
          <h2 class="reveal fade-up section-title text-slate-800">
            End-to-End Solutions
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(s, i) in services"
            :key="s.title"
            class="reveal fade-up bg-white rounded-2xl p-7 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300 group cursor-default"
            :style="`--d:${i * 0.08}s`"
          >
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                :class="s.bg"
              >
                <i
                  :class="s.icon + ' text-2xl'"
                  :style="{ color: s.color }"
                ></i>
              </div>
              <span
                class="text-[11px] font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-300"
              >
                {{ String(i + 1).padStart(2, "0") }}
              </span>
            </div>
            <h3 class="font-bold text-slate-800 text-[17px] mb-3 leading-snug">
              {{ s.title }}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-5">
              {{ s.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in s.tags"
                :key="t"
                class="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════ STATS / IMPACT ══════════════ -->
    <section
      id="impact"
      class="py-20 bg-linear-to-r from-teal-600 to-cyan-600 relative overflow-hidden"
    >
      <!-- Grid overlay -->
      <div
        class="absolute inset-0 opacity-10 pointer-events-none"
        style="
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255, 255, 255, 0.3) 40px,
              rgba(255, 255, 255, 0.3) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255, 255, 255, 0.3) 40px,
              rgba(255, 255, 255, 0.3) 41px
            );
        "
      ></div>
      <div
        class="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="reveal fade-up"
          :style="`--d:${i * 0.1}s`"
        >
          <div
            class="counter text-5xl font-extrabold text-white mb-2"
            :data-target="s.val"
            :data-suffix="s.suffix"
          >
            {{ "0" + s.suffix }}
          </div>
          <div class="text-cyan-100 text-sm font-medium tracking-wide">
            {{ s.label }}
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════ PROCESS ══════════════ -->
    <section class="py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <div
            class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4"
          >
            <span class="w-8 h-px bg-teal-400 inline-block"></span> How We Work
            <span class="w-8 h-px bg-teal-400 inline-block"></span>
          </div>
          <h2 class="reveal fade-up section-title text-slate-800">
            Our Process
          </h2>
        </div>
        <div class="grid md:grid-cols-4 gap-6 relative">
          <!-- Connector line -->
          <div
            class="hidden md:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-teal-200 via-teal-400 to-teal-200"
          ></div>
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="reveal fade-up text-center relative"
            :style="`--d:${i * 0.15}s`"
          >
            <div
              class="w-24 h-24 rounded-full mx-auto mb-6 flex flex-col items-center justify-center relative z-10 shadow-lg transition-transform duration-300 hover:scale-105"
              :class="step.bg"
            >
              <i
                :class="step.icon + ' text-2xl mb-1'"
                :style="{ color: step.color }"
              ></i>
              <span class="text-[10px] font-bold" :style="{ color: step.color }"
                >Step {{ i + 1 }}</span
              >
            </div>
            <h4 class="font-bold text-slate-800 text-[15px] mb-2">
              {{ step.title }}
            </h4>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════ CONTACT ══════════════ -->
    <section id="contact" class="py-28 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"
      >
        <!-- Info left -->
        <div class="reveal fade-left">
          <div
            class="inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-5"
          >
            <span class="w-8 h-px bg-teal-400 inline-block"></span> Let's Talk
          </div>
          <h2 class="section-title text-slate-800 leading-tight mb-6">
            Ready to Build<br />Your Next Line?
          </h2>
          <p class="text-slate-500 text-base leading-relaxed mb-10">
            Reach out with your project scope and we'll respond within one
            business day with a preliminary assessment and engineering
            consultation.
          </p>
          <div class="space-y-4">
            <a
              v-for="ch in channels"
              :key="ch.label"
              :href="ch.href"
              class="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-teal-300 hover:shadow-md transition-all duration-700 group"
            >
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-colors duration-700"
                :class="ch.bg"
              >
                <i
                  :class="
                    ch.icon +
                    ' text-lg text-teal-600 group-hover:text-white transition-colors duration-200'
                  "
                ></i>
              </div>
              <div>
                <div
                  class="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5"
                >
                  {{ ch.label }}
                </div>
                <div class="text-sm font-medium text-slate-700">
                  {{ ch.value }}
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Form right -->
        <form
          class="reveal fade-right bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100"
          @submit.prevent
        >
          <h3
            class="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2"
          >
            <i class="bi bi-send-fill text-teal-500 text-base"></i> Send an
            Inquiry
          </h3>
          <div class="space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                  >Full Name</label
                >
                <input
                  type="text"
                  placeholder="Ahmed Al-Rashid"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                  >Company</label
                >
                <input
                  type="text"
                  placeholder="Your Company"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all"
                />
              </div>
            </div>
            <div>
              <label
                class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                >Email Address</label
              >
              <input
                type="email"
                placeholder="you@company.com"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all"
              />
            </div>
            <div>
              <label
                class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                >Service Needed</label
              >
              <select
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all bg-white"
              >
                <option>Milk Processing Plant</option>
                <option>Beverage Treatment System</option>
                <option>Packaging Automation Line</option>
                <option>SCADA / Automation</option>
                <option>After-Sales Support</option>
              </select>
            </div>
            <div>
              <label
                class="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                >Project Description</label
              >
              <textarea
                rows="4"
                placeholder="Describe your processing or packaging requirement…"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-50 outline-none text-sm text-slate-700 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[14px] tracking-wide py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-200"
            >
              <i class="bi bi-send-fill text-sm"></i> Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- ══════════════ FOOTER ══════════════ -->
    <footer class="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center p-1"
              >
                <img
                  src="@/assets/infinity2.png"
                  alt="Infinity Solution Logo"
                  class="w-full h-full object-contain"
                />
              </div>

              <div>
                <span class="block font-bold text-white text-[15px]"
                  >Infinity</span
                >
                <span
                  class="block text-teal-500 text-[10px] font-semibold tracking-widest uppercase"
                  >Solution</span
                >
              </div>
            </div>
            <p class="text-sm leading-relaxed mb-6">
              Industrial leader in beverage &amp; milk treatment and packaging
              systems. Delivering excellence without limits.
            </p>
            <div class="flex gap-3">
              <a
                v-for="s in socials"
                :key="s.icon"
                href="#"
                class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <i
                  :class="s.icon + ' text-sm text-slate-400 hover:text-white'"
                ></i>
              </a>
            </div>
          </div>

          <!-- Cols -->
          <div v-for="col in footerCols" :key="col.title">
            <h5
              class="text-white text-[12px] font-bold tracking-widest uppercase mb-5"
            >
              {{ col.title }}
            </h5>
            <ul class="space-y-3">
              <li v-for="item in col.items" :key="item.label">
                <a
                  :href="item.href || '#'"
                  class="text-sm text-slate-500 hover:text-teal-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <i
                    v-if="item.icon"
                    :class="item.icon + ' text-xs text-teal-600'"
                  ></i>
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Certifications col -->
          <div>
            <h5
              class="text-white text-[12px] font-bold tracking-widest uppercase mb-5"
            >
              Certifications
            </h5>
            <ul class="space-y-3">
              <li
                v-for="c in [
                  'HACCP Certified',
                  'ISO 22000 : 2018',
                  'FDA Compliant',
                  'CE Marked Systems',
                  'DIN / ASME Piping',
                ]"
                :key="c"
                class="text-sm text-slate-500 flex items-center gap-1.5"
              >
                <i class="bi bi-patch-check-fill text-xs text-teal-600"></i>
                {{ c }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600"
        >
          <span>© 2026 Infinity Solution · All Rights Reserved</span>
          <span class="flex items-center gap-1.5">
            <i class="bi bi-geo-alt-fill text-teal-600"></i> Kurdistan · UAE ·
            Regional Coverage
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
