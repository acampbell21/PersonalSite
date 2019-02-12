import React, { Component } from 'react';
import classNames from 'classnames';
import { Grid, Image, Segment, Icon, Header } from 'semantic-ui-react';
import { handleUpload, uploadResumeImage } from '../actions/accounts';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import MissingAvatar from '../images/missingavi.png';
import MissingResume from '../images/missingresume.png';


export class ImportImage extends Component {
  state = { resume_image: '', image: '', fileUploading: false, resumeUploading: false}

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  toggleResumeUploading = () => {
    this.setState({ resumeUploading: !this.state.resumeUploading });
  }

  onProfileDrop = (image) => {
    this.toggleUploading();
    this.props.dispatch(handleUpload(image[0], this.toggleUploading));
  }

  onResumeDrop = (resume_image) => {
    this.toggleResumeUploading();
    this.props.dispatch(uploadResumeImage(resume_image[0], this.toggleUploading));
  }

  uploadDisplay = () => {
    const { image } = this.props.user;
    const userImage = image ? image : MissingAvatar;

    
    if(this.state.fileUploading) {
      return(
        <Segment basic>
          <Icon name='spinner' loading size='huge' />
          <Header as='h3'>User Image Uploading Please Wait...</Header>
        </Segment>
      );
    } else {
      return(
        <Dropzone
          onDrop={this.onProfileDrop} 
          style={{border: 'none'}}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <Segment {...getRootProps()}>
                <Image {...getInputProps()} src={userImage} 
                className={classNames('dropzone', {'dropzone--isActive': isDragActive})} />
              </Segment>
            )}
        </Dropzone>
      )
    }
  }

  uploadResumeDisplay = () => {
    const { resume_image } = this.props.user;
    const resumeImage = resume_image ? resume_image : MissingResume;

    if(this.state.resumeUploading) {
      return(
        <Segment basic>
          <Icon name='spinner' loading size='huge' />
          <Header as='h3'>Resume Image Uploading Please Wait...</Header>
        </Segment>
      );
    } else {
      return(
        <Dropzone
          onDrop={this.onResumeDrop}
          style={{border: 'none'}}>
            {({ getRootProps, getInputProps }) => (
              <Segment {...getRootProps()}>
                <Image  {...getInputProps()} src={resumeImage} size='small' shape='rounded' />
              </Segment>
            )}
        </Dropzone>
      )
    }
  }

  render() {
    return (
        <Grid.Column mobile={16} tablet={8} computer={4} style={{ margin: '0 auto' }}>
          { this.uploadDisplay() }
          { this.uploadResumeDisplay() }
        </Grid.Column>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(ImportImage);