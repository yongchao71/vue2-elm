import headTop from "@components/header/head";
import footGuide from "@components/footer/footGuide.vue";
import ratingStar from "@components/common/ratingStar.vue";
import {getUserList, groupcity } from "../../service/getData";
import alertTip from "@components/common/alertTip";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showAlert: false,
      itemClasses:["AAA"],
      iImage:require("@images/food-img.png"),
      iImages:require("../../images/food-img.png"),
    };
  },
 created() {
     console.log("@src-----111---------");
     console.log("iImage-----11------",this.iImage);
     console.log("iImage----22-------",this.iImages);
 },
  mounted() {
    console.log("@src------222--------");
    // getUserList().then(res=>{
    //   console.log("get user list info----6666-------",res);
    // }).catch(res=>{
    //   console.log("get user list error-----------");
    // });
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
      console.log("this data count--11-----",count);
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
