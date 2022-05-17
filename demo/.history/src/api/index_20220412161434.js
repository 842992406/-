import axios from 'axios'


export default {

  $axios(options) {
    let apiUrl = null;

    if (process.env.VUE_APP_ENV === 'dev') {
      apiUrl = options.url;
    } else if (process.env.VUE_APP_ENV === 'pro') {
      apiUrl = process.env.VUE_APP_BASE_API + options.url;
    }

    return axios({
      url: apiUrl
    })
  }
}