 <template>
	<div class="count-ct" v-if="isShowLoading">
	  <div class="count-outer">
		  <div class="flex-c" @click.stop.prevent="fBeforeClick">-</div>
		  <div class="flex-c">4</div>
		  <div class="flex-c" @click.stop.prevent="fNextClick">+</div>
	  </div>
	</div>
</template>

<script>
export default {
  props: ["isShowLoading", "bkImage"],
  data() {
    return {
      innerIsShowLoading: this.isShowLoading
    };
  },
  mounted() {},
  methods: {
    fBeforeClick() {
		let _This=this;
		console.log("ffffffffffffff before");
		 _This.$emit("submit", _This);
	},
    fNextClick() {
		let _This=this;
		console.log("ffffffffffffff next");
		 _This.$emit("submit", _This);
	}
  },
  watch: {
    innerIsShowLoading: function(val) {},
    isShowLoading: function(value) {
      this.innerIsShowLoading = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.count-ct {
  display: inline-block;
  .count-outer {
    display: flex;
    .flex-c {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #dddddd;
      padding: 0.4rem;
      box-sizing: border-box;
      height: 1.5rem;
    }
    div:not(:nth-child(2)) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
