<template>
  <div>
    <div class="main-associations">
      <div class="associations-containter">
        <div v-for="(item,index) in catagory" :key="index">
          <p class="associations-class">{{item}}</p>
          <ul>
            <li class="associations-item" v-for="(item,index) in associations[index]" :key="index">
              <a ref="item" class="item" @click="gotoAssociationDetail(item.id)">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catagory: [],
      associations: []
    };
  },
  mounted() {
    this.$api.association.getAssociationPage().then(async res => {
      this.catagory = res.data.catagory;
      this.associations = res.data.association;
      this.$nextTick(() => {
        this.checkWordSize();
      });
    });
  },
  methods: {
    checkWordSize() {
      var re = /[\u4E00-\u9FA5]/g;
      var associationsItem = this.$refs.item;
      var associationsLength = this.$refs.item.length;
      for (var i = 0; i < associationsLength; i++) {
        if (associationsItem[i].innerHTML.match(re).length > 10) {
          associationsItem[i].classList.add("small-size");
        }
      }
    },
    gotoAssociationDetail(id) {
      this.$router.push({
        path: `/association/${id}`
      });
    }
  }
};
</script>   
<style>
.main-associations {
  width: 100%;
  height: 1400px;
}

.associations-containter {
  width: 1200px;
  height: 1400px;
  margin: 0 auto;
}

.associations-containter ul {
  display: block;
  /*height: 160px;*/
  overflow: auto;
}

.associations-class {
  font-size: 30px;
  margin: 40px 0 40px 10px;
  display: block;
}

.associations-item {
  width: 165px;
  height: 48px;
  line-height: 48px;
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 4px;
  margin-left: 5px;
  margin-bottom: 5px;
}

.associations-item a {
  display: block;
  width: 165px;
  height: 48px;
  color: black;
  text-decoration: none;
  transition: 0.2s;
  border-radius: 4px;
  cursor: pointer;
}

.associations-item a:hover {
  color: white;
  background-color: #11a5eb;
}

.small-size {
  font-size: 14px;
}
</style>