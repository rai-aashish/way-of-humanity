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
import Recaptcha from 'react-google-recaptcha';
import TextField from '../components/common/TextField';
import ContactUsSuccessModal from 'components/dialogue boxes/ContactUsSuccessModal';
import MetaTags from 'components/MetaTags';

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
      metaTitle: KeyTextField;
      metaDescription: KeyTextField;
      metaTags: KeyTextField;
      metaKeywords: KeyTextField;
    };
  };
}

const INITIAL_FORM_STATE = {
  _for: '',
  name: '',
  services: '',
  phoneNumber: '',
  email: '',
  street: '',
  suburb: '',
  postCode: '',
  message: '',
};
const ContactUs: NextPage<ContactUsProps> = ({ contactUsPage, footer, header }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [formError, setFormError] = useState({
    _for: '',
    name: '',
    services: '',
    phoneNumber: '',
    email: '',
    street: '',
    suburb: '',
    postCode: '',
    message: '',
  });

  const [isHuman, setIsHuman] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  //form submit handler
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!isHuman) return;

    let response = await axios.post('/api/contact-us', formData);

    if (response.statusText === 'OK') {
      resetForm();
      setShowSuccess(() => true);
      console.log(response.data);
    }
  };

  //? helper functions
  const validateForm = () => {
    //? form validation
    if (formData._for === '' || !formData._for === null)
      setFormError((pre) => {
        return { ...pre, _for: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, _for: '' };
      });
    }

    if (formData.email === '' || !formData.email === null)
      setFormError((pre) => {
        return { ...pre, email: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, email: '' };
      });
    }

    if (formData.name === '' || !formData.name === null)
      setFormError((pre) => {
        return { ...pre, name: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, name: '' };
      });
    }

    if (formData.phoneNumber === '' || !formData.phoneNumber === null)
      setFormError((pre) => {
        return { ...pre, phoneNumber: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, phoneNumber: '' };
      });
    }

    if (formData.postCode === '' || !formData.postCode === null)
      setFormError((pre) => {
        return { ...pre, postCode: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, postCode: '' };
      });
    }

    if (formData.street === '' || !formData.street === null)
      setFormError((pre) => {
        return { ...pre, street: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, street: '' };
      });
    }

    if (formData.suburb === '' || !formData.suburb === null)
      setFormError((pre) => {
        return { ...pre, suburb: 'This field is required' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, suburb: '' };
      });
    }
    //? valid email check
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))
      setFormError((pre) => {
        return { ...pre, email: 'Please enter valid email address' };
      });
    else
      setFormError((pre) => {
        return { ...pre, email: '' };
      });
    //? form validation end

    if (
      formData._for === '' ||
      !formData._for === null ||
      formData.email === '' ||
      !formData.email === null ||
      formData.name === '' ||
      !formData.name === null ||
      formData.phoneNumber === '' ||
      !formData.phoneNumber === null ||
      formData.postCode === '' ||
      !formData.postCode === null ||
      formData.services === '' ||
      !formData.services === null ||
      formData.street === '' ||
      !formData.street === null ||
      formData.suburb === '' ||
      !formData.suburb === null
    )
      return false;
    else return true;
  };

  const resetForm = () => {
    setFormData(() => INITIAL_FORM_STATE);
  };

  const hideSuccessModal = () => setShowSuccess(() => false);

  //? handlers
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  };

  const handleRecaptcha = () => {
    setIsHuman(true);
  };

  return (
    <Layout header={header} footer={footer}>
      <MetaTags
        title={contactUsPage.data.metaTitle as string}
        description={contactUsPage.data.metaDescription as string}
        keywords={contactUsPage.data.metaKeywords as string}
      />
      <Container grid className="pb-15">
        <div className="col-span-full text-center mb-12">
          <PrismicRichText
            field={contactUsPage.data.title}
            components={{
              heading2: ({ children }) => <h2 className="text-h3 md:text-h2">{children}</h2>,
            }}
          />
        </div>

        <form className="w-full col-span-full lg:col-start-2 lg:col-span-10" onSubmit={handleSubmitForm}>
          <Container grid className="gap-y-5" noPaddingX>
            <FormField>
              <InputField
                required
                label={contactUsPage.data.forWhomLabel}
                type="text"
                name="_for"
                isError={formError._for !== ''}
                helperText={formError._for}
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
                isError={formError.name !== ''}
                helperText={formError.name}
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
                isError={formError.services !== ''}
                helperText={formError.services}
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
                isError={formError.phoneNumber !== ''}
                helperText={formError.phoneNumber}
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
                isError={formError.email !== ''}
                helperText={formError.email}
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
                isError={formError.street !== ''}
                helperText={formError.street}
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
                isError={formError.suburb !== ''}
                helperText={formError.suburb}
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
                isError={formError.postCode !== ''}
                helperText={formError.postCode}
                value={formData.postCode}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <TextField
                label={contactUsPage.data.messageLabel}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormField>

            {/* //? submit */}
            <div className="col-span-full md:col-start-5 md:col-span-4 grid place-items-center gap-7">
              <Recaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptcha} />
              <Button disabled={!isHuman} variant="solid" size="large" className="w-full">
                {contactUsPage.data.submitButtonLabel}
              </Button>
            </div>
          </Container>
        </form>
      </Container>
      {showSuccess && <ContactUsSuccessModal hide={hideSuccessModal} />}
    </Layout>
  );
};

export default ContactUs;

const FormField: React.FC = ({ children }) => {
  return <div className="form-field col-span-full md:col-span-6">{children}</div>;
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
