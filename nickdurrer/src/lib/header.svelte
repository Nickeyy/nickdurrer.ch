<script>
    import {onMount} from "svelte";

    let themeToggleDarkIcon;
    let themeToggleLightIcon;
    let themeToggleBtn;

    onMount(() => {
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

    });
    })
</script>

<header class="relative z-50 flex flex-col">
    <div class="top-0 z-10 h-16 pt-6">
        <div class="max-w-7xl mx-auto lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="relative flex gap-4">
                        <div class="flex flex-1">
                            <div class="h-10 w-10 rounded-full pt-2">
                                <a href="#home">
                                    <img src="littleMe.ico" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-1 justify-end md:justify-center">

                            <div class="pointer-events-auto md:hidden">
                                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="bg-lightCreme focus:ring-4 focus:outline-none focus:ring-lightBlue font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Menu<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                <!-- Dropdown menu -->
                                <div id="dropdownDivider" class="hidden z-10 w-44 bg-lightCreme rounded divide-y divide-gray-100 shadow">
                                    <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
                                        <li>
                                            <a href="#aboutMe" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                                        </li>
                                        <li>
                                            <a href="#projects" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
                                        </li>
                                        <li>
                                            <a href="#career" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Career</a>
                                        </li>
                                        <li>
                                            <a href="#contact" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav class="pointer-events-auto hidden md:block">
                                <ul class="flex rounded-full bg-darkCreme px-3 text-sm font-medium">
                                    <li><a class="relative block px-3 py-2 transition hover:text-lightBlue" href="#aboutMe">About</a></li>
                                    <li><a class="relative block px-3 py-2 transition hover:text-lightBlue" href="#projects">Projects</a></li>
                                    <li><a class="relative block px-3 py-2 transition hover:text-lightBlue" href="#career">Career</a></li>
                                    <li><a class="relative block px-3 py-2 transition hover:text-lightBlue" href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- Darkmode -->
                        <div class="flex justify-end md:flex-1">
                            <div class="pointer-events-auto">
                                <button bind:this={themeToggleBtn} id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                    <svg bind:this={themeToggleDarkIcon} id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                    <svg bind:this={themeToggleLightIcon} id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
