<script lang="ts">
    interface Props {
        header: string
        body: string
        note?: string
    }
    let { header, body, note }: Props = $props()
</script>

<div class="bullet">
    <header>
        <h3>{header}</h3>
        <span>{note}</span>
    </header>
    <hr>
    <h2>{body}</h2>
</div>

<style>
    .bullet {
        display: flex; flex-direction: column; gap: 2px;
    }
    
    h3 {
        font-size: 16px;
        line-height: 120%;
    }

    hr {
        height: .8px;
        border: none;
        background-color: #75778B;
    }

    h2 {
        font-size: 64px;
        color: var(--primary-color);
        line-height: 100%;
    }
</style>