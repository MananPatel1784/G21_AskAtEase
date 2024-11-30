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
        <MDBCard className="h-100 shadow-lg">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              Introduction to AskAtEase
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Easily explore topics, ask questions, and share answers.
              <ul className="text-start mt-2">
                <li><strong>Ask Questions:</strong> Click <em>Ask</em>, type your question, and submit.</li>
                <li><strong>Write Answers:</strong> Find a question, click <em>Answer</em>, and share your thoughts.</li>
                <li><strong>Follow Topics:</strong> Stay updated by following topics or users you care about.</li>
                <li><strong>Manage Profile:</strong> Update your profile and avatar for a personal touch.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 2 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100 shadow-lg">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              Using AskAtEase
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Easily explore topics, ask questions, and share answers.
              <ul className="text-start mt-2">
                <li><strong>Change User Account Name:</strong> Go to your profile, click on the "Edit" button next to your name, and enter your new desired name.</li>
                <li><strong>Change Primary Email Address:</strong> Go to your account settings, click on the "Email" section, and update your email address.</li>
                <li><strong>Change Password:</strong> Go to the "Password" section in your settings, click on "Change Password," or if you've forgotten it, use the "Forgot Password" option to reset it.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 3 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100 shadow-lg">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              Best Practices & Guidelines
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Follow these tips to make the most of AskAtEase:
              <ul className="text-start mt-2">
                <li><strong>Write Clearly:</strong> Use simple, concise language for better understanding.</li>
                <li><strong>Organize Content:</strong> Structure questions and answers logically.</li>
                <li><strong>Stay Respectful:</strong> Follow community guidelines and maintain decorum.</li>
                <li><strong>Enhance Readability:</strong> Use formatting like bullet points or bold text.</li>
                <li><strong>Stay Engaged:</strong> Follow topics and respond to comments to grow your reach.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 4 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100 shadow-lg">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              Safety & Security
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Ensure a secure experience on AskAtEase:
              <ul className="text-start mt-2">
                <li><strong>Report Issues:</strong> Report harassment or inappropriate content directly through the platform.</li>
                <li><strong>Account Management:</strong> Easily delete or deactivate your account from the settings.</li>
                <li><strong>Stay Vigilant:</strong> Avoid sharing personal information in public answers or messages.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 5 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100 shadow-lg">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              AskAtEase Spaces
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Create and join Spaces to connect with like-minded users:
              <ul className="text-start mt-2">
                <li><strong>Create a Space:</strong> Start a dedicated community on a topic of interest.</li>
                <li><strong>Join Spaces:</strong> Explore and join Spaces that match your passions.</li>
                <li><strong>Engage:</strong> Post questions, share answers, and collaborate within Spaces.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Card 6 */}
      <MDBCol sm="4" md="4" lg="4">
        <MDBCard className="h-100">
          <MDBCardBody className="text-center">
            <MDBCardTitle className="mb-3" style={{ color: '#AD3B29' }}>
              Managing Content
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              Take control of your content on AskAtEase:
              <ul className="text-start mt-2">
                <li><strong>Edit or Delete:</strong> Update or remove your questions and answers anytime.</li>
                <li><strong>Personalize Feed:</strong> Follow topics and users to customize your home feed.</li>
                <li><strong>Follow Users:</strong> Follow users to keep track of their content and updates.</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default HelpPage;
