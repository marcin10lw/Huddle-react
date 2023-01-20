import { StyledNewsletter, Form, EmailInput, SubmitButton, Error } from "./styled";

const Newsletter = () => {

  return (
    <StyledNewsletter>
      <h4>NEWSLETTER</h4>
      <p>
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <Form>
        <EmailInput type="email" name="email" />
        <Error>Check your email please</Error>
        <SubmitButton>Subscribe</SubmitButton>
      </Form>
    </StyledNewsletter>
  );
};

export default Newsletter;
