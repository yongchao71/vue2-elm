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
      loginWay: "",
      guessCity: "", //当前城市
      guessCityid: "", //当前城市id
      hotcity: [], //热门城市列表
      groupcity: {} //所有城市列表
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
    ...mapState(["userInfo", "addressIndex", "count"]),
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    }
  },

  methods: {
    ...mapMutations(["CHOOSE_ADDRESS","CHANGE_COUNT"]),
    //点击图标刷新页面
    reload() {
      window.location.reload();
    },
    //选择地址
    chooseAddress(address, index) {
      this.CHOOSE_ADDRESS({ address, index });
      this.$router.go(-1);
    },
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
    userInfo: function(value) {
      if (value && value.user_id) {
        this.initData();
      }
    },
    newAddress: function(value) {
      this.initData();
    },
    count(){
      console.log("change count------",this.count);
    }
  }
};
