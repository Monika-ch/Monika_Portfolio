import React from "react";


// use this link to edit google forms:
// https://docs.google.com/forms/d/1vJ4j7SbTV6nbXBMM4UzNGNS6Si5jBWsfmyJRfMQgBEo/edit#settings


const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScnO-L88ACHlf3R7Z5iNdKvTrBL-G9yBiAImfnW3CbDoPnszw/viewform?embedded=true";

const GoogleForm = () => {
  return (
    <div className="google-form-wrapper">
      <iframe
        src={GOOGLE_FORM_EMBED_URL}
        width="600"
        height="1577"
        minHeight="400"
        max-height="1577"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{ flexGrow: 1, minHeight: "800px" }} // Ensures a minimum height
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;