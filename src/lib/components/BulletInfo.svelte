<script lang="ts">
    interface Props {
        img: string
        header: string
        body: string
    }

    let { img, header, body }: Props = $props()
</script>

<div class="bullet">
    <figure>
        <img class="icon" src={img} alt="">
        <h4>{header}</h4>
    </figure>
    <p>{body}</p>
</div>

<style>
    div {
        display: flex; flex-direction: column; gap: 10px;
    }

    figure {
        display: flex; gap: 10px;
    }

    img {
        width: 24px; height: 24px;
    }

    h4 {
        font-weight: 700;
        font-size: 16px;
    }
    p {
        font-size: 16px;
    }
</style>