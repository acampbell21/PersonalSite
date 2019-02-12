import axios from 'axios'
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const handleUpload = (image, callback) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(image.name, image)
    axios.post('/api/images/user_image', data)
      .then( res => {
        const { data: image, headers } = res;
        dispatch(setFlash('Successfully Uploaded User Image!', 'green'));
        dispatch({type: 'SET_IMAGE', image, headers });
        callback();
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
        dispatch(setHeaders(res.headers));
    });
  }
}

export const uploadResumeImage = (resume_image, callback) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(resume_image.name, resume_image)
    axios.post('/api/images/resume_image', data)
      .then( res => {
        const { data: resume_image, headers } = res;
        dispatch(setFlash('Successfully Uploaded Resume Image!', 'green'));
        dispatch({type: 'SET_RESUME_IMAGE', resume_image, headers });
        callback();
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
        dispatch(setHeaders(res.headers));
    });
  }
}
