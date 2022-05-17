import http from "../src/http-common.js";
class UploadFilesService {
  // POST 数据到后端，再加一个上传进度的回调，可以放个上传进度条。
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  getFiles() {
    return http.get("/files");
  }
}
export default new UploadFilesService();
