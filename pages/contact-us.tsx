import React, { useState } from 'react';
import Layout from 'components/Layout';
import { NextPage, GetStaticProps } from 'next';
import { createClient } from 'prismicio';
import { PrismicDocument, RichTextField, KeyTextField } from '@prismicio/types';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import { PrismicRichText } from '@prismicio/react';
import InputField from 'components/common/InputField';
import axios from 'axios';
//@ts-ignore
import Recaptcha from "react-google-recaptcha"

interface ContactUsProps {
  header: PrismicDocument;
  footer: PrismicDocument;
  contactUsPage: {
    data: {
      emailLabel: KeyTextField;
      forWhomLabel: KeyTextField;
      fullNameLabel: KeyTextField;
      messageLabel: KeyTextField;
      phoneNumberLabel: KeyTextField;
      postalCodeLabel: KeyTextField;
      servicesLabel: KeyTextField;
      services: { serviceName: KeyTextField }[];
      slices: any[];
      streetLabel: KeyTextField;
      submitButtonLabel: KeyTextField;
      suburbLabel: KeyTextField;
      title: RichTextField;
    };
  };
}

const ContactUs: NextPage<ContactUsProps> = ({ contactUsPage, footer, header }) => {
  console.log(contactUsPage);
  const [formData, setFormData] = useState({_for:"", name:"", services:"", phoneNumber:"", email:"", street:"", suburb:"", postCode:"", message : ""});
  const [isHuman, setIsHuman] = useState(false) 

  //form submit handler
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formData._for || !formData.name || !formData.services || !formData.phoneNumber || !formData.email || !formData.street || !formData.suburb || !formData.postCode )
     {
       alert("Please fill up the form completely");
        return
      }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))){
      alert("Invalid email")
      return
    }
    if(!isHuman)
      return 

    let postForm = await axios.post("/api/contact-us",formData)

    console.log(postForm);
    
  };

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((pre) => {
      return {...pre,[event.target.name]: event.target.value}
    })
  }

  const handleRecaptcha = () => {
    setIsHuman(true)
  }
  return (
    <Layout header={header} footer={footer}>
      <Container grid>
        <div className="col-span-full text-center">
          <PrismicRichText
            field={contactUsPage.data.title}
            components={{
              heading2: ({ children }) => <h2 className="text-h3 md:text-h2">{children}</h2>,
            }}
          />
        </div>

        <form className="w-full col-start-2 col-span-10" onSubmit={handleSubmitForm}>
          <Container grid className="my-5" noPaddingX>
            <FormField>
              <InputField
                required
                label={contactUsPage.data.forWhomLabel}
                type="text"
                name="_for"
                value={formData._for}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.fullNameLabel}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.servicesLabel}
                type="text"
                name="services"
                value={formData.services}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.phoneNumberLabel}
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.emailLabel}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.streetLabel}
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.suburbLabel}
                type="text"
                name="suburb"
                value={formData.suburb}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                required
                label={contactUsPage.data.postalCodeLabel}
                type="text"
                name="postCode"
                value={formData.postCode}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
               <InputField
                label={contactUsPage.data.messageLabel}
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormField>

            <Recaptcha
            sitekey = {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptcha}
            />

            {/* //? submit */}
            <div className="col-span-full">
              <Button disabled={!isHuman} variant="solid" size="large">
                {contactUsPage.data.submitButtonLabel}
              </Button>
            </div>
          </Container>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactUs;

const FormField: React.FC = ({ children }) => {
  return <div className="form-field col-span-6">{children}</div>;
};
//fetch data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let contactUsPage, header, footer;

  try {
    header = await client.getSingle('header');
    footer = await client.getSingle('footer');
    contactUsPage = await client.getSingle('contact-us-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { contactUsPage, header, footer },
    revalidate: 60,
  };
};
