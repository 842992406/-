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
</style>