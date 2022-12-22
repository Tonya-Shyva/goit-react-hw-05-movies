import { ToastContainer } from 'react-toastify';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MainPageContainer } from 'pages/Home/Home.styled';

export const Movies = () => {
  return (
    <main>
      <MainPageContainer>
        <SearchBar />
      </MainPageContainer>
      <ToastContainer autoClose={3000} position="top-center" theme="dark" />
    </main>
  );
};
