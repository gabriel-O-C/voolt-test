<script lang="ts">
  export let label: string
  export let disabled: boolean
</script>

<button class="min-w-[200px] text-white bg-[#4253FF] py-[10px] px-10 rounded disabled:bg-[#ECEDEF] disabled:text-[#8D939A]" disabled={disabled}>{label}</button>