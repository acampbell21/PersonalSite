import React, { Component } from 'react';
import { Header, Segment, Grid } from 'semantic-ui-react';
import ImportImage from './ImportImage';


const Edit = () => (
  <Grid verticalAlign='middle' columns={12} padded="vertically">
    <Grid.Row>
      <ImportImage />
    </Grid.Row>
  </Grid>
)

export default Edit;
