<script lang="ts">
  import arrow from "$lib/images/nav-arrow-down.svg";
  export let label: string
</script>

<div class="relative flex items-center w-full">
  <button class="min-w-[80px] py-[10px p-3 rounded border border-[#ECEDEF] ">{label}</button>
  
  <img src="{arrow}" alt="arrow" class="absolute left-1 top-4 aspect-square w-5 rotate-90">
</div>