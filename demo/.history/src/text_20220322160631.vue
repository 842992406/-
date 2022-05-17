<template>
  <div class="form-group">
    <label class="control-label">上传图片</label>
    <div class="control-form">
      <p class="help-block">
        (建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M，最多可上传4张)
      </p>
      <ul class="upload-imgs">
        <li v-if="imgLen >= 4 ? false : true">
          <input
            type="file"
            class="upload"
            @change="addImg"
            ref="inputer"
            multiple
            accept="image/png,image/jpeg,image/gif,image/jpg"
          />
          <a class="add"
            ><i class="iconfont icon-plus"></i>
            <p>点击上传</p></a
          >
        </li>
        <li v-for="(value, key) in imgs" :key="key">
          <p class="img">
            <img :src="getObjectURL(value)" /><a
              class="close"
              @click="delImg(key)"
              >×</a
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.upload-imgs {
  margin: 10px 0 30px 0;
  overflow: hidden;
  font-size: 0;
}
.upload-imgs li {
  position: relative;
  width: 118px;
  height: 118px;
  font-size: 14px;
  display: inline-block;
  padding: 10px;
  margin-right: 25px;
  border: 2px dashed #ccc;
  text-align: center;
  vertical-align: middle;
}
.upload-imgs li:hover {
  border-color: $them-color;
}
.upload-imgs .add {
  display: block;
  background-color: #ccc;
  color: #ffffff;
  height: 94px;
  padding: 8px 0;
}
.upload-imgs .add .iconfont {
  padding: 10px 0;
  font-size: 40px;
}
.upload-imgs li:hover .add {
  background-color: $them-color;
}
.upload-imgs li .upload {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 118px;
  height: 118px;
}
.upload-imgs .img {
  position: relative;
  width: 94px;
  height: 94px;
  line-height: 94px;
}
.upload-imgs .img img {
  vertical-align: middle;
}
.upload-imgs .img .close {
  display: none;
}
.upload-imgs li:hover .img .close {
  display: block;
  position: absolute;
  right: -6px;
  top: -10px;
  line-height: 1;
  font-size: 22px;
  color: #aaa;
}
</style>