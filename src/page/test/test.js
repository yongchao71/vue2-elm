import headTop from "../../components/header/head";
import footGuide from "../../components/footer/footGuide.vue";
import ratingStar from "../../components/common/ratingStar.vue";
import { cityGuess, hotcity, groupcity } from "../../service/getData";
import alertTip from "src/components/common/alertTip";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showAlert: false,
    };
  },

  mounted() {
  },

  components: {
    headTop,
    footGuide,
    ratingStar,
    alertTip
  },

  computed: {
    ...mapState(["count"])
  },

  methods: {
    ...mapMutations(["CHANGE_COUNT"]),
    fChangeCount(){
      let count=this.count;
      this.CHANGE_COUNT(2);
      console.log("this data count-------",count);
    },
    fShowCount(){
       console.log(this.$store.state);
    }
  },
  watch: {
    count(){
      console.log("change count------",this.count);
    }
  }
};
