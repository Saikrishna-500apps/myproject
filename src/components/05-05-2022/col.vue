<template>
  <div>
    <div
      :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
      style="height: 85px; overflow-y: scroll;"
    >
      <p>{{ text }}</p>
      <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
      <p>{{ text }}</p>
    </div>
    <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
  </div>
</template>

<script>
  export default {
      name: "SaI",
    data() {
        
      return {
        isVisible: false,
        text: `
           Investments in nature conservation have long been neglected, and as a result, nature across Europe is now in a terrible state. 
          Biodiversity conservation projects can address this by providing cost-effective ways to restore nature and sustainably manage ecosystems; 
          tackle climate change; and deliver environmental, social and economic benefits at the same time.
          Member States are about to invest unprecedented amounts of EU public funds and resources through both the EU budget and recovery fund.
          There has therefore never been a better time to transition away from investments in grey infrastructure that led to the current status of biodiversity loss,
          instead choosing to finance the transformative changes needed to halt biodiversity loss.
          We can now choose to create long-term value and this means realigning investments to work for, not against, nature. 
          The following cases demonstrate just some of the many ways EU funds can and should be used to build a greener, fairer future.
          By investing strategically in nature we can both ensure a swift and resilient economic recovery that works for the environment and fully realise climate and biodiversity objectives.
        `
      }
    },
    methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
  }
</script>