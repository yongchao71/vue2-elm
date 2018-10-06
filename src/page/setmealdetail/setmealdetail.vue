<template src="./setmealdetail.html"></template>
<script src="./setmealdetail.js"></script>
<style lang="scss" scoped>
  @import '../../style/mixin';
  .detail-ct{
    .food-img{
      @include wh(100%,"")
    }
    /******************top start************************/
    .title-outer{
      .f-title-ct{
        .title-ct{
          flex: 1 1 5rem;
          padding-right: 0.3rem;
        }
        .share-ct{
          flex: 0 0 2.4rem;
          border-left: 1px solid #eeeeee;
          .share-img{
            @include wh(1rem,1rem)
          }
        }
      }
      .rating-ct{
        padding: 0.4rem 0;
      }
      .current-info{
        background: #F0F6D4;
        padding: 0.1rem 0.2rem;
      }
    }
      /******************top end************************/
    .shop-info-ct{
      padding: 0.4rem;
      color: #999999;
      .i-b{
        display: inline-block;
      }
      .shop-name{
          width: 3rem;
      }
      .p-icon{
        @include wh(0.7rem,0.7rem);
        margin-right: 0.2rem;
      }
    }
    .purchase-ct{
      .p-price{
         background: #B2D235;
         flex: 0 0 5rem;
        border-radius: 1rem 0 0 1rem;
      }
      .p-discount{
         background: #7AC043;
         flex: 1 1 5rem;
      }
      .p-right-now{
          background: #003F34;
          flex: 0 0 5rem;
          border-radius:0 1rem 1rem 0;
      }
    }    

  }
  .icout{
   @include sc(0.8rem,red);
  }
</style>
