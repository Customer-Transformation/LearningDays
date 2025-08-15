<script lang="ts">
    let { imgUrl, name } = $props()
</script>

<figure>
    <img src={imgUrl} alt="">
    <label for="">{name}</label>
</figure>

<style>
    figure {
        display: flex; flex-direction: column; gap: 12px;

        img {
            width: 115px; height: 144px;
            border: 1px dotted;
        }

        label {
            font-size: 12px;
            text-align: center;
        }
    }
</style>