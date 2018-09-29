import headTop from "../../components/header/head";
import footGuide from "../../components/footer/footGuide.vue";
import ratingStar from "../../components/common/ratingStar.vue";
import { cityGuess, hotcity, groupcity } from "../../service/getData";
import alertTip from "src/components/common/alertTip";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showAlert: true,
      loginWay: "",
      guessCity: "", //当前城市
      guessCityid: "", //当前城市id
      hotcity: [], //热门城市列表
      groupcity: {} //所有城市列表
    };
  },

  mounted() {
    // // 获取当前城市
    // cityGuess().then(res => {
    //     this.guessCity = res.name;
    //     this.guessCityid = res.id;
    // })
    // //获取热门城市
    // hotcity().then(res => {
    //     this.hotcity = res;
    // })
    // //获取所有城市
    // groupcity().then(res => {
    //     this.groupcity = res;
    //     console.log(res)
    // })
  },

  components: {
    headTop,
    footGuide,
    ratingStar,
    alertTip
  },

  computed: {
    ...mapState(["userInfo", "addressIndex", "newAddress"]),
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
    ...mapMutations(["CHOOSE_ADDRESS"]),
    //点击图标刷新页面
    reload() {
      window.location.reload();
    },
    //选择地址
    chooseAddress(address, index) {
      this.CHOOSE_ADDRESS({ address, index });
      this.$router.go(-1);
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
    }
  }
};
