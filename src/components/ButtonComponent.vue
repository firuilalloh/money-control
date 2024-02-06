<template>
  <button type="button" :class="classButton">{{ Text }}</button>
</template>

<script>
export default {
    data : () => ({

    }),
    props: {
        classButton: {
            type: String,
            default: "btn btn-primary"
        },
        Text: {
            type: String,
            default: "Insert text"
        }
    }
}
</script>

<style>

</style>