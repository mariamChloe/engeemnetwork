import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var hbspt: any;

@Component({
  selector: 'app-hub-spot-form',
  templateUrl: './hub-spot-form.component.html',
  styleUrls: ['./hub-spot-form.component.css'],
})
export class HubSpotFormComponent implements OnInit {
  // ngOnInit(): void {
  //   hbspt.forms.create({
  //     portalId: '143515210',
  //     formId: '23ddb7dc-ad6b-42e2-9c5d-7122404881b0',
  //     target: '#hubspotForm',
  //   });
  // }
  form: FormGroup = new FormGroup({});
  submitted = false;
  // Replace 'YOUR_HUBSPOT_PORTAL_ID' and 'YOUR_HUBSPOT_FORM_GUID' with actual values
  hubSpotEndpoint =
    'https://forms.hubspot.com/uploads/form/v2/143515210/19da8ead-bbac-4bde-a854-1c31342c050b';

  constructor(private formBuilder: FormBuilder) {}
  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    // Convert form data to JSON
    const formData = JSON.stringify(this.form.value);

    // Send data to HubSpot
    fetch(this.hubSpotEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted to HubSpot successfully:', data);

        // Optionally, reset the form after successful submission
        this.form.reset();
      })
      .catch((error) => {
        console.error('Error submitting form to HubSpot:', error);
      });
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
}
