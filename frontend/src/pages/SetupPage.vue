<template>
    <div class="min-h-screen md:flex">
        <aside class="flex w-full shrink-0 flex-col border-b border-slate-200 bg-white md:min-h-screen md:w-64 md:border-r md:border-b-0">
            <div class="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
                <span class="flex size-9 items-center justify-center bg-blue-600 text-sm font-semibold text-white">H</span>
                <span>
                    <strong class="block text-sm font-semibold tracking-tight text-neutral-900">HRM</strong>
                    <span class="block text-xs text-slate-500">People operations</span>
                </span>
            </div>
            <nav aria-label="Main navigation" class="p-4">
                <p class="px-3 pb-2 text-[11px] font-semibold tracking-[0.12em] text-slate-500">WORKSPACE</p>
                <RouterLink
                    to="/"
                    class="flex items-center border-l-2 border-blue-600 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                    aria-current="page"
                >
                    Overview
                </RouterLink>
            </nav>
            <div class="mt-auto hidden border-t border-slate-200 p-5 text-xs leading-5 text-slate-500 md:block">
                The HRM foundation is being built in tested phases.
            </div>
        </aside>

        <div class="min-w-0 flex-1">
            <header class="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
                <p class="text-sm text-slate-600">People operations <span class="px-1 text-slate-400">/</span> Workspace</p>
                <span class="border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">Phase 3 · Setup</span>
            </header>

            <main class="mx-auto max-w-5xl px-6 py-10 lg:px-10">
                <p class="text-xs font-semibold tracking-[0.14em] text-blue-700">SYSTEM FOUNDATION</p>
                <h1 class="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">A considered workspace for people operations.</h1>
                <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    The HRM architecture and database design are in place. Application setup is underway;
                    employee records, access, and HR workflows will be added in their planned phases.
                </p>

                <section aria-label="Application components" class="mt-8 grid gap-4 md:grid-cols-2">
                    <article class="border border-slate-200 bg-white p-5">
                        <p class="text-xs font-medium tracking-wide text-slate-500">API</p>
                        <h2 class="mt-3 text-base font-semibold text-neutral-900">Laravel backend</h2>
                        <p class="mt-2 text-sm leading-6 text-slate-600">The API foundation is being configured for versioned, server-validated HR operations.</p>
                    </article>
                    <article class="border border-slate-200 bg-white p-5">
                        <p class="text-xs font-medium tracking-wide text-slate-500">WEB APPLICATION</p>
                        <h2 class="mt-3 text-base font-semibold text-neutral-900">Vue 3 frontend</h2>
                        <p class="mt-2 text-sm leading-6 text-slate-600">The application shell is ready for authenticated, role-aware workflows.</p>
                    </article>
                </section>
            </main>
        </div>
    </div>
</template>
