 <template>
	<div class="loading-ct" v-if="isShowLoading">
	    <div class="load-img" :style="{backgroundImage:'url('+(bkImage||'src/images/full-star.png')+')'}"></div>
    	<svg class="load-ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
			<ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#dddddd;stroke:none;"></ellipse>
		</svg>
	</div>
</template>

<script>
    export default {
		props: ["isShowLoading","bkImage"],
    	data(){
            return{
				innerIsShowLoading:this.isShowLoading
            }
        },
        mounted(){
        },
        watch: {
			innerIsShowLoading: function(val) {},
			isShowLoading: function(value) {
			this.innerIsShowLoading = value;
			}
       },
    }
</script>

<style lang="scss" scoped>
	.loading-ct{
		z-index: 100;
    	position: fixed;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
		width: 2.5rem;
		height: 2.5rem;
	}
	.load-img{
		width: 100%;
		height: 100%;
    	background: url(../../images/full-star.png) no-repeat 0 0;
    	background-size: cover;
    	animation: aniload .8s infinite ease-in-out;
    }
	.load-ellipse{
		position: absolute;
		width: 2.5rem;
		height: 2rem;
		top: 2.2rem;
        left: 0.2rem;
		animation: ellipse .8s infinite ease-in-out;
	}
	@keyframes aniload{
		0%   {transform: translateY(0px);}
		50%  {transform: translateY(-50px);}
		100% {transform: translateY(0px);}
	}
	@keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.4);}
		100% {transform: scale(1);}
	}
</style>
