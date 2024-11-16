import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const HelpPage = () => {
  return (
    <MDBRow className="g-4" style={{ marginTop: '30px' }}>
      {/* Card 1 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Introduction to Quora</MDBCardTitle>
            <MDBCardText>
              What is Quora, how to get started
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      {/* Card 2 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Using Quora</MDBCardTitle>
            <MDBCardText>
              Asking and answering questions, following topics/users, reporting content, sending messages.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 3 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Best Practices and Guidelines</MDBCardTitle>
            <MDBCardText>
              Formatting tips, how to write good content, how to organize questions and other content on Quora.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 4 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Safety & Security</MDBCardTitle>
            <MDBCardText>
              Changing privacy settings, reporting harassment, deleting/deactivating your account.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 5 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Quora Spaces</MDBCardTitle>
            <MDBCardText>
              Helpful information and tips for Quora Spaces
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 6 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody>
            <MDBCardTitle>Managing Content</MDBCardTitle>
            <MDBCardText>
              Editing, deleting, and sharing content, personalizing your feed, using Bookmarks, and more.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default HelpPage;
