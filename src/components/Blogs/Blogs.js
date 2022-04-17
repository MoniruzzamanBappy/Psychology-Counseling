import React from "react";

const Blogs = () => {
  return (
    <div className="container text-justify">
      <h1>Difference between authorization and authentication</h1>
      <ul>
        <li>
          Authentication verifies who the user is. And Authorization determines
          what resources a user can access.
        </li>
        <li>
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
          And Authorization works through settings that are implemented and
          maintained by the organization.
        </li>
        <li>
          Authentication is the first step of a good identity and access
          management process. And Authorization always takes place after
          authentication.
        </li>
        <li>
          Authentication is visible to and partially changeable by the user. And
          Authorization isn’t visible to or changeable by the user.
        </li>
      </ul>
      <br />
      <h1>Why are you using firebase?</h1>
      <ul>
        <li>Save time on developing Webservice methods for authentication</li>
        <li>Detailed Google Analytics</li>
        <li>Reliable and Extensive Database</li>
        <li>Swift and secure hosting</li>
        <li>Best Testing Service</li>
      </ul>
      <div className="ms-4">
        <h3> What other options do you have to implement authentication?</h3>
        <ul>
          <li>HID DigitalPersona (formerly Crossmatch)</li>
          <li>The Okta Identity Cloud</li>
          <li>WatchGuard AuthPoint</li>
          <li>LastPass for Business</li>
          <li>Cisco Secure Access by Duo</li>
          <li>Azure Active Directory</li>
          <li>SecurID</li>
          <li>IBM Cloud App ID</li>
          <li>Amazon Cognito</li>
          <li>SolarWinds Access Rights Manager (ARM)</li>
          <li>Symantec VIP</li>
          <li>PingOne Cloud Platform</li>
        </ul>
      </div>
      <br />
      <h1>
        What other services does firebase provide other than authentication?
      </h1>
      <ul>
        <li>Firebase Database</li>
        <li>Firebase Cloud Storage</li>
        <li>Firebase Cloud Messaging</li>
        <li>Firebase Remote Config</li>
      </ul>
    </div>
  );
};

export default Blogs;
