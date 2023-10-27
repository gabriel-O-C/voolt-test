export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const response = await fetch(
    "https://dev-api.voolt.com/api/cmsv2/industries"
  );
  const industries = await response.json();
  return {
    industries: industries.data.industries,
  };
};


// export const actions =  {
//   default: async ({ request }) => {
//     const data = await request.formData();
//     const search = data.get('search')

//     const response = await fetch(`https://dev-api.voolt.com/api/cmsv2/industries/${search}`)
//     const filteredIndustries = await response.json()

//     return {
//       filteredIndustries
//     }
//   }
// }