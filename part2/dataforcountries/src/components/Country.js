import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  //Get list of languages from object
  const languages = () =>
    country.languages
      .map(language => language.name)
      .map(language => <Language key={language} name={language} />);

  return (
    <div className="Country">
      <h1>{country.name}</h1>
      <div className="BasicInfo">
        <table>
          <tbody>
            <tr>
              <td>capital {country.capital}</td>
            </tr>
            <tr>
              <td>population {country.population}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Languages">
        <h2>languages</h2>
        <ul>{languages()}</ul>
      </div>
      <div className="CountryFlag">
        <img src={country.flag} width={100} height={100} alt="flag"></img>
      </div>
      <Weather name={country.name} />
    </div>
  );
};

const Language = ({ name }) => {
  return <li>{name}</li>;
};

export default Country;
