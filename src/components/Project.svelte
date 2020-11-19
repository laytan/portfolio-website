<script>
    import Carousel from "@beyonk/svelte-carousel/src/Carousel.svelte";

    export let title;
    export let code;
    export let deployed;
    export let className = '';
    export let controlColorClass = 'text-black';
    export let left = true;
</script>

<div class={`py-8 flex flex-col gap-6 md:gap-4 md:flex-row ${className}`}>
    <div class={`order-2 md:w-2/3 ${left == false ? 'md:order-1' : ''}`}>
        <Carousel perPage={1} autoplay={5000}>
            <span
                class={`block w-4 h-4 control ${controlColorClass}`}
                slot="left-control">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    class="svg-inline--fa fa-chevron-left fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"><path
                        fill="currentColor"
                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
            </span>
            <span
                class={`block w-4 h-4 control ${controlColorClass}`}
                slot="right-control">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    class="svg-inline--fa fa-chevron-right fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"><path
                        fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
            </span>
            <slot name="slide-content"></slot>
        </Carousel>
    </div>
    <div class={`order-1 md:w-1/3 ${left == false ? 'md-order-2' : ''}`}>
        <div class="flex items-center">
            <h3 class="mr-2 text-2xl font-display">{title}</h3>
            <slot name="badges"></slot>
        </div>
        <div class="pb-3">
            <slot name="description"></slot>
        </div>
        <div class="flex flex-wrap gap-2">
            <a
                href="{code}"
                target="_BLANK"
                rel="noopener noreferrer"
                class="btn btn-blue">View code</a>
            {#if deployed?.length}    
            <a
                href="{deployed}"
                target="_BLANK"
                rel="noopener noreferrer"
                class="btn btn-pink">View deployed app</a>
            {/if}
        </div>
    </div>
</div>