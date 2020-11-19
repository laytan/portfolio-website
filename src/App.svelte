<script>
    import Logo from "./components/Logo.svelte";
    import EnbiggenBox from "./components/EnbiggenBox.svelte";
    import CopyEmail from "./components/CopyEmail.svelte";
    import Project from "./components/Project.svelte";
    import Badge from "./components/Badge.svelte";
    import { onMount } from "svelte";

    let loadedClass = "";
    onMount(() =>
        setTimeout(() => (loadedClass = "scale-y-100 md:scale-x-100"))
    );

    const scrollTo = (id) => () =>
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
</script>

<main id="main" class="text-white bg-black font-body">
    <header class="container flex items-center justify-between p-3 mx-auto">
        <div class="flex items-center">
            <div class="h-8 pr-3">
                <Logo />
            </div>
            <ul class="flex">
                <li class="pr-3">
                    <button on:click={scrollTo('projects')}>Projects</button>
                </li>
                <li>
                    <a href="/resume-laytan-laats.pdf" target="_BLANK" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </div>
        <ul class="flex items-end text-blue md:text-pink">
            <li class="pr-3">
                <button name="Scroll to email" class="block w-6" on:click={scrollTo('email-me')}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="envelope"
                        class="svg-inline--fa fa-envelope fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><path
                            fill="currentColor"
                            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                </button>
            </li>
            <li class="pr-3">
                <a
                    class="block w-6"
                    href="https://github.com/laytan"
                    target="_BLANK"
                    rel="noopener noreferrer">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        class="svg-inline--fa fa-github fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"><path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                </a>
            </li>
            <li>
                <a
                    class="block w-6"
                    href="https://www.linkedin.com/in/laytan"
                    target="_BLANK"
                    rel="noopener noreferrer">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        class="svg-inline--fa fa-linkedin-in fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                </a>
            </li>
        </ul>
    </header>
    <div
        class="relative grid grid-cols-1 grid-rows-2 h-screen-4/5 md:grid-cols-2 md:grid-rows-1">
        <EnbiggenBox
            className={`${loadedClass} bg-pink origin-top md:origin-left`} />
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="z-10 flex items-center p-3 bg-black">
                <div class="h-16 pr-2 md:h-24">
                    <Logo />
                </div>
                <h1 class="text-3xl leading-tight md:text-5xl font-display">
                    LAYTAN<br />LAATS
                </h1>
            </div>
        </div>
        <EnbiggenBox
            className={`${loadedClass} bg-blue origin-bottom md:origin-right`} />
        <div class="absolute inset-0 flex items-end justify-center">
            <button name="Skip to content" on:click={scrollTo('content')}>
                <img
                    class="hidden md:block animate-bounce"
                    src="chevron-multicolor.png"
                    alt="" />
                <div class="w-10 h-10 text-pink md:hidden animate-bounce">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-down"
                        class="svg-inline--fa fa-chevron-down fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><path
                            fill="currentColor"
                            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" /></svg>
                </div>
            </button>
        </div>
    </div>
    <div id="content" class="container px-3 mx-auto">
        <div class="py-6">
            <h2 id="projects" class="text-3xl font-display">Projects</h2>
            <p>
                Here is an overview of a selection of personal projects I have done, see my
                <a class="text-blue" target="_BLANK" rel="noopener noreferrer" href="https://github.com/laytan">GitHub</a> for more.<br>
                <button class="text-blue" on:click={scrollTo('email-me')}>Contact me</button> for info about my proffesional experience.
            </p>
            <Project title="Shortnr" code="https://github.com/laytan/shortnr" deployed="https://shortnr.laytanlaats.com" left={false}>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="shortnr/shortnr-dashboard.png"
                    alt="Shortnr dashboard with all links, a new link form and statistics" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="shortnr/shortnr-home.png"
                    alt="Shortnr homepage with an introduction" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                        src="shortnr/shortnr-login.png"
                        alt="Shortnr login page" />
                </div>
                <span slot="badges">
                    <Badge className="bg-tech-vuejs">VueJS</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-golang">Golang</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-sql">MySQL</Badge>
                </span>
                <div slot="description">
                    <p class="pb-3">
                        URL shortener in VueJS on the front-end and Go on the back-end.
                    </p>
                    <p class="pb-3">
                        Writing this i learned a lot about implementing token based authentication and golang in general.
                    </p>
                    <p>
                        Try it out below!
                    </p>
                </div>
            </Project>
            <Project
            title="Todo Collab"
            code="https://github.com/laytan/todo-collab"
            left={true}>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="todo-collab/home.png"
                    alt="Home page" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="todo-collab/login.png"
                    alt="Login page" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="todo-collab/register.png"
                    alt="Register page" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="todo-collab/empty-list.png"
                    alt="An empty list" />
                </div>
                <span slot="badges">
                    <Badge className="bg-tech-vuejs">Vue</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-nodejs">Node</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-feathers">Feathers</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-sql">MySQL</Badge>
                </span>
                <div slot="description">
                    <p class="pb-3">
                        Fully realtime multi-user todo app. 
                        Create a todo list and give access to other users. All changes are made realtime.
                    </p>
                    <p class="pb-3">
                        This project also has full API documentation available on
                        <a class="text-blue" target="_BLANK" rel="noopener noreferrer" href="https://github.com/laytan/todo-collab/tree/master/server">the GitHub page</a>
                        and url.com/docs if the project was deployed.

                        Only the Front-End Vue app is not finished and therefore it is not deployed.<br>
                        I do plan on finishing it someday.
                    </p>
                </div>
            </Project>
            <Project
            title="Portfolio"
            code="https://github.com/laytan/personal-site"
            deployed="https://laytanlaats.com"
            left={false}
            controlColorClass="text-white">
                <div class="slide-content" slot="slide-content">
                    <img
                    src="personal-site/personal-site-top.png"
                    alt="The starting view of my personal website" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img 
                    src="personal-site/personal-site-projects.png"
                    alt="A view after scrolling a little with projects header and one project: shortnr" />
                </div>
                <span slot="badges">
                    <Badge className="bg-tech-svelte">Svelte</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-tailwind">Tailwind</Badge>
                </span>
                <div slot="description">
                    <p class="pb-3">
                        Inception! My portfolio site aka the site you are looking at right now.
                    </p>
                    <p>
                        The project introduced me to Svelte which was very similair to VueJS but more lightweight so it was perfect for this small site.
                    </p>
                </div>
            </Project>
            <Project
            title="Get of that damn island"
            code="https://github.com/laytan/Get-of-that-damn-island-LD-42"
            deployed="https://laytanl.itch.io/get-of-that-damn-island"
            left={true}
            controlColorClass="text-white">
                <div class="slide-content" slot="slide-content">
                    <img
                    src="get-of-that-damn-island/title-screen.png"
                    alt="The title screen" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="get-of-that-damn-island/tutorial.png"
                    alt="The first tutorial level with the text: The island is unstable! Get out by pushing the spaceship to the airstrip." />
                </div>
                <span slot="badges">
                    <Badge className="bg-gray-800">Unity</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-csharp">C#</Badge>
                </span>
                <div slot="description">
                    <p class="pb-3">
                        My submission to the Ludum Dare 42 Game Jam:
                    </p>
                    <p class="pb-3 italic">
                        A puzzle game where you need to get your ship to the landing strip before the whole world is gone.
                    </p>
                    <p>
                        This is achieved by pushing around blocks and using the world being destroyed to your advantage.
                    </p>
                </div>
            </Project>
            <Project
            title="Crammed Defense"
            code="https://github.com/laytan/Crammed-defense-GMTKJam2018"
            deployed="https://laytanl.itch.io/crammed-defense"
            left={false}>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="crammed-defense/tall.png"
                    alt="Tower of snipers, machinge guns and heal blocks" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="crammed-defense/falling.png"
                    alt="Tower falling over because of inbalance" />
                </div>
                <div class="slide-content" slot="slide-content">
                    <img
                    src="crammed-defense/taller.png"
                    alt="Very tall tower of snipers" />
                </div>
                <span slot="badges">
                    <Badge className="bg-gray-800">Unity</Badge>
                </span>
                <span slot="badges">
                    <Badge className="bg-tech-csharp">C#</Badge>
                </span>
                <div slot="description">
                    <p class="pb-3">
                        My submission to the Game Makers Toolkit Jam 2018:
                    </p>
                    <p class="pb-3 italic">
                        A Tower Defence game restricted to a single 1 wide tile where all your towers stack on top of.
                    </p>
                </div>
            </Project>
            <h3 class="text-2xl font-display">More!</h3>
            <p>
                View my less complete and other projects on <a class="text-blue" target="_BLANK" rel="noreferrer noopener" href="https://github.com/laytan">GitHub.</a>
            </p>
        </div>
        <div class="py-6 mb-8">
            <h2 id="email-me" class="text-3xl font-display">E-Mail</h2>
            <p class="pb-2 leading-tight">
                My E-Mail is open for conversations at LaytanLaats@hotmail.com
            </p>
            <div>
                <a
                    target="_BLANK"
                    href="mailto:laytanlaats@hotmail.com"
                    class="btn btn-blue">E-Mail me</a>
                <CopyEmail />
            </div>
        </div>
    </div>
    <div class="border-t-8 bg-blue border-blue-dark">
        <div class="container px-3 py-4 mx-auto">
            <ul class="flex justify-center gap-6 text-pink">
                <li class="flex items-center justify-center p-2 align-middle rounded-full bg-blue-dark">
                    <a href="mailto:laytanlaats@hotmail.com" target="_BLANK" class="block w-6">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="envelope"
                            class="svg-inline--fa fa-envelope fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><path
                                fill="currentColor"
                                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                    </a>
                </li>
                <li class="flex items-center justify-center p-2 align-middle rounded-full bg-blue-dark">
                    <a
                    class="block w-6"
                    href="https://github.com/laytan"
                    target="_BLANK"
                    rel="noopener noreferrer">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        class="svg-inline--fa fa-github fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"><path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                </a>
                </li>
                <li class="flex items-center justify-center p-2 align-middle rounded-full bg-blue-dark">
                    <a
                    class="block w-6"
                    href="https://www.linkedin.com/in/laytan"
                    target="_BLANK"
                    rel="noopener noreferrer">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        class="svg-inline--fa fa-linkedin-in fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                </a> 
                </li>
            </ul>
            <ul class="flex justify-center gap-2 py-2 list-inside">
                <li>
                    <button on:click={scrollTo('projects')}>
                        Projects
                    </button>
                </li>
                <li class="list-disc">
                    <button on:click={scrollTo('main')}>
                        Back to top
                    </button>
                </li>
                <li class="list-disc">
                    <a href="/resume-laytan-laats.pdf" target="_BLANK" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
            <p class="flex justify-center text-sm text-gray-400">&copy; 2020 {new Date().getFullYear() == '2020' ? '' : ' - ' + new Date().getFullYear()} Laytan Laats</p>
        </div>
    </div>
</main>
