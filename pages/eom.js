import { Toolbar } from '../components/toolbar';
import Image from 'next/image';

export const EOM = ({employee}) => {
return (
  <div className="page-container">
    <Toolbar></Toolbar>
    <div className="flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols1 grid-cols-1 justify-items-center pt-5">
      <div className="flex grid grid-rows-10 mt-10 justify-items-center rounded-lg border-solid border-2 shadow-2xl bg-gray-100">
        <h1 className="font-bold text-xl p-1">Francisco Santoyo</h1>
        <div className="flex grid grid-rows-10 justify-items-center">
          <h3>{employee.name}</h3>
          <h6 className="p-2">Director</h6>
          <Image
            className="rounded-full p-2"
            src="/director.png"
            alt="profile"
            width="256"
            height="256"
          />
          <p className="p-2 text-lg text-blue-700 font-bold">Ext. 218</p>
        </div>
      </div>
      <div className="flex grid grid-rows-10 mt-10 justify-items-center rounded-lg border-solid border-2 shadow-2xl bg-gray-100">
        <h1 className="font-bold text-xl p-1">Rica Saldana</h1>
        <div className="flex grid grid-rows-10 justify-items-center">
          <h3>{employee.name}</h3>
          <h6 className="p-2">Reporter</h6>
          <Image
            className="rounded-full p-2"
            src="/reporter-1.png"
            alt="profile"
            width="256"
            height="256"
          />
          <p className="p-2 text-lg text-blue-700 font-bold">Ext. 203</p>
        </div>
      </div>
      <div className="flex grid grid-rows-10 mt-10 justify-items-center rounded-lg border-solid border-2 shadow-2xl bg-gray-100">
        <h1 className="font-bold text-xl p-1">John Vandik</h1>
        <div className="flex grid grid-rows-10 justify-items-center">
          <h3>{employee.name}</h3>
          <h6 className="p-2">Reporter</h6>
          <img
            className="rounded-full p-2"
            src="/reporter-2.png"
            alt="profile"
            width="256"
            height="256"
          />
          <p className="p-2 text-lg text-blue-700 font-bold">Ext. 201</p>
        </div>
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