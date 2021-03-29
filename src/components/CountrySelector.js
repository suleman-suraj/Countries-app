// import { useState } from "react";
// import useCountries from "../hooks/useCountries";
// import Countries from "./pages/Countries";

// const CountrySelector = () => {
//   const { countries: countries, error, loading } = useCountries(
//     "https://restcountries.eu/rest/v2/all"
//   );
//   const [selctedCountry, setSelectedCountry] = useState("GH");

//   if (loading) return <h1>loading ...</h1>;
//   if (error) return <h1>error</h1>;

//   return (
//     <>
//       <div className="form-container">
//         {/* <h2>Now showing for : </h2> */}
//         <select
//           value={`${selctedCountry}`}
//           onChange={(e) => setSelectedCountry(e.target.value)}
//         >
//           {countries.countries.map((country) => (
//             <option value={`${country.iso3}`} key={`${country.iso3}`}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <Countries
//         url={`https://restcountries.eu/rest/v2/all/${selctedCountry}`}
//       ></Countries>
//     </>
//   );
// };

// export default CountrySelector;
