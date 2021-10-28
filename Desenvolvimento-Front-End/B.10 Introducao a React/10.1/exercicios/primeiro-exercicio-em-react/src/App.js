import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const compromissos = ['Fazer exercicios', 'atualizar projetos', 'estudar o conteudo do dia', 'preencher o forms'];

function App() {
  return (
    <>
      <Header />
      <Content />
      {/* <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul> */}
      <Footer />
    </>
  );
}

export default App;
