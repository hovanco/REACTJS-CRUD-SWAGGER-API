import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body){
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU5NjYzMDc4OCwiZXhwIjoxNjEyNjkyNzg3fQ.vHfQn_9stPzom_Ku0GiQJhUdH3xOShXOjJK0BFVvx1_MazskWaZfDYPJGZcg2tD0nBwjWRDizM7AS28W5_UetA",
    },
  }).catch(err => {
    console.log(err);
  });
};
