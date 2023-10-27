<script lang="ts">
  import { page } from "$app/stores";
  import CancelButton from "$lib/components/CancelButton.svelte";
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/PrimaryButton.svelte";
  import showcase from "$lib/images/home.png";
  import notFound from "$lib/images/icon.svg";
  import logo from "$lib/images/logo.svg";
  import arrowDown from "$lib/images/nav-arrow-down.svg";
  import searchIcon from "$lib/images/search.svg";

  export let data;
  let search: string = "";
  let filteredIndustries: unknown[] = [];

  function getFilteredIndustries(search: string) {
    const industries = data.industries;

    const industriesByNameAndSynonyms = industries.filter(
      (industry: { name: string; synonyms: string | string[] }) =>
        industry.name.toLowerCase().includes(search) ||
        industry.synonyms.includes(search)
    );
    filteredIndustries = filteredIndustries.concat(industriesByNameAndSynonyms);
    return industriesByNameAndSynonyms;
  }
</script>

<img src={showcase} alt="showcase" class="min-h-screen" />
<section class="ml-[100px] mt-[35px] max-w-[640px]">
  <img src={logo} alt="logo" class="h-8 mb-40 w-28" />
  <h1 class="text-[32px] font-semibold max-w-[420px] text-[#202123]">
    What type of business is the website for?
  </h1>
  <div class="flex items-center my-10">
    <div class="relative">
      <form method="get" on:submit={getFilteredIndustries(search)}>
        <input
          type="text"
          bind:value={search}
          name="search"
          class="border border-[#D8DBDE] min-w-[640px] py-[10px] px-8 rounded"
          placeholder="Search for your industry"
          autocomplete="off"
        />
      </form>

      {#if filteredIndustries.length !== 0}
        <div class="z-10 w-full p-1 mt-2 bg-white rounded shadow-md">
          {#each filteredIndustries as industry}
            <p class="hover:bg-[#F9FAFA] cursor-pointer">{industry.name}</p>
          {/each}
        </div>
      {:else if filteredIndustries.length === 0 && $page.url
          .toString()
          .includes("?search=")}
        <div class="z-10 flex flex-col items-center w-full gap-4 p-4 mt-2 bg-white rounded shadow-md">
          <img src={notFound} alt="not found" />
          <p>
            Oops... We can’t find similar service in our list. Try another
            keyword to search
          </p>
        </div>
      {/if}

      <img
        src={searchIcon}
        alt="search-icon"
        class="absolute w-5 left-2 top-3 aspect-square"
      />
      <img
        src={arrowDown}
        alt="arrow-down"
        class="absolute w-6 right-4 top-3 aspect-square"
      />
    </div>
  </div>
  <h2 class="font-medium text-sm text-[#202123] mb-5">
    Or select from the most popular:
  </h2>
  <div class="mb-36">
    <div class="grid grid-cols-5 gap-2">
      {#each data.industries.slice(0, 17) as industry}
        <Card name={industry.name} />
      {/each}
    </div>
  </div>

  <div class="flex justify-between">
    <CancelButton label="Back" />
    <Button label="Continue" disabled={false} />
  </div>
</section>
