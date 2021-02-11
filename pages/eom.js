import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({employee}) => {
return (
  <div className="page-container">
    <Toolbar></Toolbar>
    <div className={styles.main}>
      <h1>About us</h1>
      <div className={styles.employeeOfTheMonth}>
        <h3>{employee.name}</h3>
        <h6>Reporter</h6>
        <img
          src="https://store.playstation.com/store/api/chihiro/00_09_000/container/MX/es/999/UP2538-CUSA05620_00-AV00000000000209/1601167370000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
          alt="profile"
        />
        <p>{employee.description}</p>
      </div>
    </div>
  </div>
);
};


export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
    const employee = await apiResponse.json();
    return {
        props:{employee}
    }
};
export default EOM;