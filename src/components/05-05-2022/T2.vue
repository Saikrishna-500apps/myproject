<template>
  <b-row>
    <b-col cols="5">
      
      <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
        <b-navbar-brand href="#">Items</b-navbar-brand>
        <b-nav pills>
          <b-nav-item href="#item-1">Item 1</b-nav-item>
          <b-nav pills>
            <b-nav-item href="#item-1-1">Item 1-1</b-nav-item>
            <b-nav-item href="#item-1-2">Item 1-2</b-nav-item>
          </b-nav>
          <b-nav-item href="#item-2">Item 2</b-nav-item>
          <b-nav-item href="#item-3">Item 3</b-nav-item>
          <b-nav pills>
            <b-nav-item href="#item-3-1">Item 3-1</b-nav-item>
            <b-nav-item href="#item-3-2">Item 3-2</b-nav-item>
          </b-nav>
        </b-nav>
      </b-navbar>
    </b-col>

    <b-col cols="5">
      <div
        id="scrollspy-nested"
        style="position: relative; height: 350px; overflow-y: auto"
      >
        <h4 id="item-1" style="">Item 1</h4>
        <p>{{ text }}</p>
        <h5 id="item-1-1" style="">Item 1-1</h5>
        <p>{{ text }}</p>
        <h5 id="item-1-2" style="">Item 2-2</h5>
        <p>{{ text }}</p>
        <h4 id="item-2" style="">Item 2</h4>
        <p>{{ text }}</p>
        <h4 id="item-3" style="">Item 3</h4>
        <p>{{ text }}</p>
        <h5 id="item-3-1" style="">Item 3-1</h5>
        <p>{{ text }}</p>
        <h5 id="item-3-2" style="">Item 3-2</h5>
        <p>{{ text }}</p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SaI",
  data() {
    return {
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
        `,
    };
  },
};
</script>
