import { TextContent } from "../TextContent";
import {
  StyledNewsletter,
  Form,
  EmailInput,
  SubmitButton,
  Error,
  NewsletterHeader,
  InputWrapper,
} from "./styled";

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <NewsletterHeader>NEWSLETTER</NewsletterHeader>
      <TextContent>
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </TextContent>
      <Form onSubmit={(event) => event.preventDefault()}>
        <InputWrapper>
          <EmailInput type="email" name="email" required placeholder="" />
          <Error>Check your email please</Error>
        </InputWrapper>
        <SubmitButton>Subscribe</SubmitButton>
      </Form>
    </StyledNewsletter>
  );
};

export default Newsletter;
