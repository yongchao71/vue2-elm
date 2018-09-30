<template src="./test.html"></template>

<script src="./test.js"></script>


<style lang="scss" scoped>
  @import '../../style/mixin';
  .color{
      color: rebeccapurple;
  }
  .icout{
   @include sc(0.8rem,red);
  }
</style>
