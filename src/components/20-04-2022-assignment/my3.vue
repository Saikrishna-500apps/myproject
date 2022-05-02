<template>
  <div>
    <h2>"Clicking in link will generate no action"</h2>

    <a v-bind:href="url" class="nav-link">
      <slot>
        <navigation-link url="/profile">
          <span class="fa fa-user"></span>
          <font-awesome-icon name="user"></font-awesome-icon>
        </navigation-link>
      </slot>
    </a>
  </div>
</template>
<script>
export default {
  name: "TaT",
  data() {
    return {
      name: "user",
    };
  },
};
</script>