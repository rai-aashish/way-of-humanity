import React, { useState } from 'react';
import Layout from 'components/Layout';
import { NextPage, GetStaticProps } from 'next';
import { createClient } from 'prismicio';
import { PrismicDocument, RichTextField, KeyTextField } from '@prismicio/types';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import { PrismicRichText } from '@prismicio/react';
import InputField from 'components/common/InputField';

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
  const [forWhom, setForWhom] = useState<string>('');

  //form submit handler
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(forWhom);
  };
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
                name="relation"
                value={forWhom}
                onChange={(e) => setForWhom(() => e.target.value)}
              />
            </FormField>

            <FormField>
              <label htmlFor="fullName">{contactUsPage.data.fullNameLabel}</label>
              <input type="text" name="fullName" />
            </FormField>

            <FormField>
              <label htmlFor="services">{contactUsPage.data.servicesLabel}</label>
              <input type="text" name="services" />
            </FormField>

            {/* //? submit */}
            <div className="col-span-full">
              <Button variant="solid" size="large">
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
