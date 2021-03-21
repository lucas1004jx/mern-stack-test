import React, { useState } from 'react';
import uploadMeida from 'util/uploadMedia';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// Import Style

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PostCreateWidget = ({ addPost }) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const submit = () => {
    if (state.name && state.title && state.content && !loading) {
      addPost(state);
    }
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleUpload = async (e) => {
    const source = e.target.files[0];

    setLoading(true);

    const file = await uploadMeida(source);

    setState({
      ...state,
      media: file.secure_url,
    });
    setLoading(false);
  };

  const submitButtonDisabledCondition = !state.name || !state.title || !state.content || loading;

  return (
    <div className={`${classes.root} d-flex flex-column my-4 w-100`}>
      <h3>
        Create new post
      </h3>
      <TextField variant="filled" label="Author name" name="name" onChange={handleChange} />
      <TextField variant="filled" label="Post title" name="title" onChange={handleChange} />
      <TextField variant="filled" multiline rows="4" label="Post content" name="content" onChange={handleChange} />
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          onChange={handleUpload}
          hidden
        />
      </Button>
      <Button className="mt-4" variant="contained" color="primary" onClick={() => submit()} disabled={submitButtonDisabledCondition}>
        Submit
      </Button>
    </div>
  );
};

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostCreateWidget;
