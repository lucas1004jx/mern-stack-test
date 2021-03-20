import fetch from 'isomorphic-fetch';

const URL = 'https://api.cloudinary.com/v1_1/dup7efxhj/image/upload';

const PRESET = 'alayaimages';

const uploadMeida = async (source) => {
  const data = new FormData();
  data.append('file', source);
  data.append('upload_preset', PRESET);

  const res = await fetch(URL, {
    method: 'POST',
    body: data,
  });

  return res.json();
};

export default uploadMeida;
