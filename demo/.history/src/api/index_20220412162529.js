import axios from 'axios'
import { ElSkeletonItem } from 'element-ui/types/skeleton-item';


export default {

  $axios(options) {
    let apiUrl = null;

    if (process.env.VUE_APP_ENV === 'dev') {
      apiUrl = options.url;
    } ElSkeletonItem {
      apiUrl = process.env.VUE_APP_BASE_API + options.url;
    }

    return axios({
      url: apiUrl
    })
  }
}