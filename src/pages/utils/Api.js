import axios from 'axios';

export default async function callApi({
  url,
  method = 'post',
  params,
  data,
  isLoading = true
}) {
  if(url) {
    try {
      const response = await axios({
        method: method,
        url: url,
        params,
        data,
        isLoading,
        headers: {
          'Content-Type': 'application/json/charset=UTF-8',
          'Access-Control-Allow_origin': '*'
        }
      });
      return {
        isSuccess: true,
        data: response.data,
        resultCode: response.status,
        message: response.statusText,
      };
    } catch (error) {
      alert(error);
    }
  }
}