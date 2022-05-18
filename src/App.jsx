import "./App.css"
import EmployeeBox from "./components/employee_box/employee_box"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Scheduler from "./components/scheduler/scheduler"
import styles from "./app.module.scss"
import { useEffect } from "react"

function App() {
  useEffect(() => {})

  return (
    <div className={styles.app}>
      <section className={styles.header}>
        <Header />
      </section>
      <section className={styles.content}>
        <article className={styles.employee}>
          <EmployeeBox />
        </article>
        <article className={styles.scheduler}>
          <Scheduler />
        </article>
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  )
}

export default App
