import styled from "styled-components";
import PostTweetForm from "../components/PostTweetForm";
import Timeline from "../components/Timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
`;

const Home = () => {
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
};

export default Home;
