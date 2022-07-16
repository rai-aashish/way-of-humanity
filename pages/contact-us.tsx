import React, { useState, useRef } from 'react';
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
import TextAreaField from '../components/common/TextAreaField';
import ContactUsSuccessModal from 'components/dialogue boxes/ContactUsSuccessModal';
import MetaTags from 'components/MetaTags';
import MultiSelect from 'components/common/MultiSelect';
import Select from 'components/common/Select';
interface ContactUsProps {
  header: PrismicDocument;
  footer: PrismicDocument;
  contactUsPage: {
    data: {
      emailLabel: KeyTextField;
      forWhomLabel: KeyTextField;
      forWhom: { relation: KeyTextField }[];
      fullNameLabel: KeyTextField;
      messageLabel: KeyTextField;
      phoneNumberLabel: KeyTextField;
      postalCodeLabel: KeyTextField;
      servicesLabel: KeyTextField;
      services: { value: KeyTextField }[];
      slices: any[];
      streetLabel: KeyTextField;
      submitButtonLabel: KeyTextField;
      suburbLabel: KeyTextField;
      successMessage: RichTextField;
      errorMessage: RichTextField;
      waitingMessage: RichTextField;
      title: RichTextField;
      metaTitle: KeyTextField;
      metaDescription: KeyTextField;
      metaTags: KeyTextField;
      metaKeywords: KeyTextField;
    };
  };
}

export interface FormData {
  _for: string;
  name: string;
  services: string[];
  phoneNumber: string;
  email: string;
  street: string;
  suburb: string;
  postCode: string;
  message: string;
}

const ContactUs: NextPage<ContactUsProps> = ({ contactUsPage, footer, header }) => {
  const reCaptchaRef = useRef<any>(null);
  const INITIAL_FORM_STATE: FormData = {
    _for: contactUsPage.data.forWhom[0].relation as string,
    name: '',
    services: [],
    phoneNumber: '',
    email: '',
    street: '',
    suburb: '',
    postCode: '',
    message: '',
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
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

  const [formState, setFormState] = useState<'initial' | 'submitting' | 'success' | 'error'>('initial');

  //? form submit handler
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    setIsFormSubmitted(true);

    if (!validateForm()) return setIsError(() => true);
    setIsError(() => false);

    // ? verify reCaptcha
    const token = reCaptchaRef.current.getValue();
    const reCaptchaResponse = await axios.post(`${BACKEND_URL ?? ''}/api/reCaptcha/verify`, { token });

    if (!reCaptchaResponse.data?.human) return;

    // ? start submitting form
    setFormState(() => 'submitting');

    let response = await axios.post(`${BACKEND_URL ?? ''}/api/contact-us`, formData);

    if (response.status === 200) {
      resetForm();
      setFormState(() => 'success');
    } else {
      setFormState(() => 'error');
    }
    // ? reset reCaptcha
    reCaptchaRef.current.reset();
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

    if (formData.services.length === 0)
      setFormError((pre) => {
        return { ...pre, services: 'Please select at least one service' };
      });
    else {
      setFormError((pre) => {
        return { ...pre, phoneNumber: '' };
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
      formData.services.length === 0 ||
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
    setIsFormSubmitted(() => false);
  };

  const hideSuccessModal = () => setFormState(() => 'initial');

  //? handlers
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  };

  const handleOptionSelect = (value: string) => {
    setFormData((pre) => {
      return { ...pre, _for: value };
    });
  };

  const onServicesSelect = (value: string) => {
    let updatedServices = formData.services;
    if (!formData.services.includes(value)) {
      updatedServices = [...formData.services, value];
    } else {
      updatedServices = updatedServices.filter((service) => service != value);
    }

    setFormData((pre) => {
      return { ...pre, services: updatedServices };
    });
  };
  return (
    <Layout header={header} footer={footer}>
      <MetaTags
        title={contactUsPage.data.metaTitle as string}
        description={contactUsPage.data.metaDescription as string}
        keywords={contactUsPage.data.metaKeywords as string}
      />
      <Container grid className="pb-15">
        <div className="col-span-full text-center mb-12 mt-10 md:mt-12">
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
              <Select
                isError={isFormSubmitted && formError._for !== ''}
                onOptionSelect={handleOptionSelect}
                required
                name="_for"
                value={formData._for}
                label={contactUsPage.data.forWhomLabel}
                options={contactUsPage.data.forWhom as []}
              />
            </FormField>

            <FormField>
              <InputField
                required
                label={contactUsPage.data.fullNameLabel}
                type="text"
                name="name"
                isError={isFormSubmitted && formError.name !== ''}
                helperText={formError.name}
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <MultiSelect
                required
                itemsName="services"
                isError={isFormSubmitted && formData.services.length === 0}
                helperText={formError.services}
                label={contactUsPage.data.servicesLabel}
                options={contactUsPage.data.services as []}
                onOptionSelect={onServicesSelect}
                values={formData.services as []}
              />
            </FormField>

            <FormField>
              <InputField
                required
                label={contactUsPage.data.phoneNumberLabel}
                type="number"
                name="phoneNumber"
                isError={isFormSubmitted && formError.phoneNumber !== ''}
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
                isError={isFormSubmitted && formError.email !== ''}
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
                isError={isFormSubmitted && formError.street !== ''}
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
                isError={isFormSubmitted && formError.suburb !== ''}
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
                isError={isFormSubmitted && formError.postCode !== ''}
                helperText={formError.postCode}
                value={formData.postCode}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <TextAreaField
                maxChars={500}
                label={contactUsPage.data.messageLabel}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormField>

            {/* //? form error message */}
            {isError && (
              <div className="col-span-full md:col-start-3 md:col-span-8 p-4 border-l-4 border-l-error-base text-error-dark bg-error-light">
                <strong> Error:</strong> some fields are missing or are invalid !!
              </div>
            )}

            {/* //? submit */}
            <div className="col-span-full md:col-start-5 md:col-span-4 grid place-items-center gap-7">
              <Recaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={reCaptchaRef} />
              <Button variant="solid" size="large" className="w-full">
                {contactUsPage.data.submitButtonLabel}
              </Button>
            </div>
          </Container>
        </form>
      </Container>
      <ContactUsSuccessModal
        successMessage={contactUsPage.data.successMessage}
        errorMessage={contactUsPage.data.errorMessage}
        waitingMessage={contactUsPage.data.waitingMessage}
        formState={formState}
        hide={hideSuccessModal}
      />
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
