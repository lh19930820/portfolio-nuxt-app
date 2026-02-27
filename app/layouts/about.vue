<template>
    <div class="text-white antialiased">
        <div class="fixed top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/10 blur-[200px] rounded-full -z-10"></div>
        <div class="max-w-6xl mx-auto px-6 lg:px-8 py-16 flex gap-16">
            <slot />
            <LayoutAppBottomNav></LayoutAppBottomNav>
        </div>
    </div>
</template>
