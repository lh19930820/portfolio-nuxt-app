<template>
    <aside class="lg:w-72 lg:sticky top-20 self-start mb-16">
        <div class="space-y-6">
            <img src="/assets/images/avatar.avif" alt="Frontend Engineer" class="w-24 h-24 rounded-2xl object-cover border border-white/10" />
            <div>
                <h2 class="text-xl font-semibold">Hien Le</h2>
                <p class="text-purple-400 text-sm mt-1">
                    Frontend Engineer • Fullstack
                </p>
            </div>
            <div class="text-sm text-gray-400 space-y-1 leading-relaxed">
                <p>Vue • React • TypeScript • Node • Laravel </p>
                <p>8+ years building production web applications.</p>
            </div>
            <div class="space-y-4 text-sm">
                
                <div>
                    <p class="text-gray-400">Location</p>
                    <p class="text-white">Da Nang, Vietnam</p>
                </div>
                <div>
                    <p class="text-gray-400">Phone</p>
                    <a href="tel:0962309147" class="text-white hover:underline">
                        0962309147
                    </a>
                </div>
                <div>
                    <p class="text-gray-400">Email</p>
                    <a href="mailto:lehien0893@gmail.com" class="text-white hover:underline">
                        lehien0893@gmail.com
                    </a>
                </div>

            </div>
            <!-- TODO: get value from .env -->
            <div class="flex gap-4 text-sm text-gray-500">
                <a href="https://github.com/lh19930820" target="_blank" class="hover:text-white transition">GitHub</a>
                <a href="https://www.linkedin.com/in/hien-le-6a90aa217/" target="_blank" class="hover:text-white transition">LinkedIn</a>
                <a href="/cv-hien-le__frontend.pdf" download="cv-hien-le__frontend.pdf" class="hover:text-white transition">Download CV</a>
            </div>
        </div>
    </aside>
</template>

