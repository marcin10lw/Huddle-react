import { Container } from "./Container/styled";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function HuddlePage() {
  return (
    <>
      <Container>
        <Header />
        <Main />
      </Container>
      <Footer />
    </>
  );
}

export default HuddlePage;
