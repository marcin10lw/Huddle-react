import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Container } from "./Container/styled";

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
