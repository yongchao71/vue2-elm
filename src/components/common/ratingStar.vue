<template>
  <div class="star-component-ct">
    <div style="" v-for="(starType, index) in aStars" :key="index" :class="['star-item',starType]"></div>
  </div>
</template>
<script>
    export default {
        props:["starCount","maxCount"],
    	data(){
            return{
               aStars:[]
            }
        },
        mounted(){
         
        },
        created(){
             let _This=this;
             let starCount=_This.starCount;
             let aStars=_This.aStars||[];
             let floor=Math.floor(starCount);
             let ceil=Math.ceil(starCount);
             let maxCount=_This.maxCount||5;
            for (let index = 0; index <floor; index++) {
                aStars.push("full-star");    
            }
            if(floor<ceil){
                aStars.push("half-star");
            }
            for (let index=0,nostar=maxCount-ceil; index <nostar; index++) {
                aStars.push("no-star");
            }
        },
        // computed(){

        // }
    }
</script>

<style lang="scss" scoped>
    .star-component-ct{
        display: inline-block;
        .star-item{
            background-repeat: no-repeat;
            background-size:cover;
            display: inline-block;
            width:1rem;
            height:1rem;
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
