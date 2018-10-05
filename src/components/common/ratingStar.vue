<template>
  <div class="star-component-ct">
    <div style="" v-for="(starType, index) in aStars" :key="index" :class="['star-item full-star',starType]"></div>
    <img src="../../images/full-star.png" />
    <span>{{starCount}}</span>
  </div>
</template>
<script>
    export default {
        props:["rating","starCount"],
    	data(){
            return{
               aStars:[]
            }
        },
        mounted(){
         
        },
        created(){
            console.log("star start---------");
             console.log(this.starCount);
             let _This=this;
             let starCount=_This.starCount;
             let aStars=_This.aStars||[];
             let floor=Math.floor(starCount);
             let ceil=Math.ceil(starCount);
             console.log("floor ceil------------",floor,ceil);
            for (let index = 0; index <floor; index++) {
                aStars.push("full-star");
                
            }
            if(floor!=ceil){
                aStars.push("half-star");
            }
            let nostar=5-ceil;
            for (let index = 0; index <nostar; index++) {
                aStars.push("no-star");
                
            }

        },
        // computed(){

        // }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .star-component-ct{
        .star-item{
            background-repeat: no-repeat;
            background-size:cover;
            display: inline-block;
            border: 1px solid rebeccapurple;
            width: 40px;
            height: 40px;
        }
        .full-star{
         background-image: url('./../../images/full-star.png');
        }
        .half-star{
         background-image: url('./../../images/half-star.png');
        }
        .no-star{
          background-image: url('./../../images/no-star.png');
        }
    }
</style>
