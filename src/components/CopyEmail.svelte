<script>
    let text = "Copy Address";
    const canCopy = Boolean(navigator.clipboard);
    const copyEmail = () => {
        navigator.clipboard
            .writeText("laytanlaats@hotmail.com")
            .then(() => (text = "Copied"));
    };
</script>

{#if canCopy}
    <button class="btn btn-pink" on:click={copyEmail}>{text}</button>
{/if}
