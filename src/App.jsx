import './App.css';
import EmployeeBox from './components/employee_box/employee_box';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Scheduler from './components/scheduler/scheduler';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.content}>
        <article className={styles.employee}>
          <EmployeeBox />
        </article>
        <article className={styles.scheduler}>
          <Scheduler />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default App;
