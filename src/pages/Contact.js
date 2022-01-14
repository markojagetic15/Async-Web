import Form from "../Components/Form.js";
import Location from "../Components/Location.js";
import "./styles/Contact.scss";
import locationData from "../assets/location-data.js";
import useDocumentTitle from "../useDocumentTitle.js";
function diffLocation(address) {
  return (
    <div className="col-xl-4 col-l-4 col-md-6">
      <Location
        key={address.id}
        city={address.city}
        street={address.street}
        email={address.email}
        telephone={address.telephone}
      />
    </div>
  );
}

function Contact() {
  useDocumentTitle("Contact us - Async Labs");
  return (
    <div className="contact-container">
      <div>
        <h1 className="top-text">Let's talk</h1>
        <p>
          Deep light land beginning form fish there brought fifth forth earth us
          make cattle seasons every spirit one can't behold, creepeth fish thing
          male his him.
        </p>
        <h1 className="contact-outline">CONTACT</h1>
      </div>
      <div className="form">
        <Form
          field_1="Your name*"
          field_2="Email address*"
          field_3="Phone number"
          field_4="Company"
          field_5="Title*"
          field_6="Message*"
          type="text"
        />
      </div>
      <div className="row">{locationData.map(diffLocation)}</div>
    </div>
  );
}

export default Contact;
