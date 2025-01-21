import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisable(false);
  };

  const showModalHandler = () => {
    setModalIsVisable(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisable} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
