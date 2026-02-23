<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-17 overflow-hidden bg-linear-to-br from-slate-50 via-cyan-50 to-teal-50"
  >
    <div class="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-teal-400/10 blob-anim pointer-events-none"></div>
    <div class="absolute -bottom-20 -left-20 w-100 h-100 rounded-full bg-cyan-300/10 blob-anim-slow pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 rounded-full border border-teal-100/60 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 rounded-full border border-teal-100/50 pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div class="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8">
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
          and high-speed packaging — built for scale, compliance, and long-term reliability.
        </p>
        <div class="flex flex-wrap gap-4 mb-10">
          <a href="#contact" class="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[14px] tracking-wide px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200">
            <i class="bi bi-send-fill text-sm"></i> Request Consultation
          </a>
          <a href="#services" class="inline-flex items-center gap-2 border border-slate-300 hover:border-teal-400 text-slate-600 hover:text-teal-600 font-semibold text-[14px] px-7 py-4 rounded-xl transition-all duration-200">
            Our Services <i class="bi bi-arrow-down text-sm"></i>
          </a>
        </div>
        <div class="flex flex-wrap gap-3">
          <span v-for="b in ['HACCP', 'ISO 22000', 'FDA Compliant', 'CE Marked']" :key="b"
            class="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-500 text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-sm">
            <i class="bi bi-shield-fill-check text-teal-500 text-xs"></i>
            {{ b }}
          </span>
        </div>
      </div>

      <div class="relative hidden md:flex items-center justify-center h-105">
        <div class="absolute w-72 h-72 rounded-3xl bg-linear-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-teal-300/40 rotate-6 opacity-20"></div>
        <div class="relative z-10 bg-white rounded-3xl shadow-2xl shadow-slate-200 p-8 w-72">
          <div class="w-16 h-16 rounded-2xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
            <i class="bi bi-droplet-half text-white text-3xl"></i>
          </div>
          <h3 class="font-bold text-slate-800 text-lg mb-2">Processing Systems</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">
            Complete milk &amp; beverage treatment with advanced filtration and sterilization.
          </p>
          <div class="flex gap-2">
            <span class="text-xs bg-teal-50 text-teal-700 font-medium px-2.5 py-1 rounded-lg">UHT</span>
            <span class="text-xs bg-cyan-50 text-cyan-700 font-medium px-2.5 py-1 rounded-lg">CIP Ready</span>
          </div>
        </div>
        <div class="absolute top-6 right-0 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge" style="--fd: 0s">
          <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
            <i class="bi bi-award-fill text-amber-500 text-lg"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-800">ISO 22000</div>
            <div class="text-[10px] text-slate-400">Certified</div>
          </div>
        </div>
        <div class="absolute bottom-10 right-4 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge" style="--fd: 1s">
          <div class="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
            <i class="bi bi-graph-up-arrow text-green-500 text-lg"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-800">98% Uptime</div>
            <div class="text-[10px] text-slate-400">Guaranteed</div>
          </div>
        </div>
        <div class="absolute top-16 left-0 bg-white shadow-xl shadow-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 float-badge" style="--fd: 0.5s">
          <div class="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
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
</template>