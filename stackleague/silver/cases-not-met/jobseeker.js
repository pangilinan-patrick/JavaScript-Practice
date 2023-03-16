function jobseeker(graduates, companies) {
  const companiesArr = [];
  const gradsArr = [];
  const result = {};

  // load the keys up for the names of the graduates and companies
  for (let i = 0; i < graduates.length; i++) {
    for (let keys in graduates[i]) {
      gradsArr.push(Object.keys(graduates[i]));
    }
  }

  for (let i = 0; i < companies.length; i++) {
    for (let keys in companies[i]) {
      companiesArr.push(Object.keys(companies[i]));
    }
  }

  for (let j = 0; j < gradsArr.length; j++) {
    const qualified = []; // array for storing companies qualified for + salary for sorting
    for (let i = 0; i < companiesArr.length; i++) {
      let qualTotal = 0; // for the amount of company qualifications
      let qualGrad = 0; // for the amount of grad qualifications
      console.log(companies[i][companiesArr[i]]);
      // loop through job qualifications
      for (let keys in companies[i][companiesArr[i]]["Job Qualifications"]) {
        qualTotal++;

        // return null if any integers in the object is not a number
        if (
          isNaN(companies[i][companiesArr[i]]["Job Qualifications"][keys]) ||
          isNaN(companies[i][companiesArr[i]]["Salary"])
        )
          return null;
        // console.log(keys, companies[i][companiesArr[i]]["Salary"]);
        // console.log(
        //   isNaN(companies[i][companiesArr[i]]["Salary"]),
        //   "--------------"
        // );

        // for qualifications with 0 experience needed
        if (companies[i][companiesArr[i]]["Job Qualifications"][keys] === 0) {
          qualGrad++;
          continue;
        }

        //check if qualification exists for graduate
        if (graduates[j][gradsArr[j]].hasOwnProperty(keys)) {
          if (isNaN(graduates[j][gradsArr[j]][keys])) return null;
          if (
            graduates[j][gradsArr[j]][keys] >=
            companies[i][companiesArr[i]]["Job Qualifications"][keys]
          ) {
            // check if graduate has higher exp than qualification
            qualGrad++;
            console.log(
              companies[i][companiesArr[i]]["Job Title"],
              `(${companiesArr[i]})`
            );
            console.log("graduate: ", graduates[j][gradsArr[j]][keys]);
            console.log(keys);
            console.log(
              companies[i][companiesArr[i]]["Job Qualifications"][keys]
            );
          }
        }
      }

      console.log(qualGrad, qualTotal);
      // if experience is met, then add to array
      if (qualGrad >= qualTotal) {
        qualified.push([
          companies[i][companiesArr[i]]["Salary"],
          `${companies[i][companiesArr[i]]["Job Title"]} (${companiesArr[i]})`,
        ]);
        // sort by salary
        qualified.sort((a, b) => b[0] - a[0]);
        // remove salary
        let salaryRemoved = [...qualified.map((row) => row.slice(1))];
        // use concat and spread operator to turn 2d array into 1d array
        result[gradsArr[j]] = [].concat(...salaryRemoved);
      } else {
        qualified.push();
        let salaryRemoved = [...qualified.map((row) => row.slice(1))];
        result[gradsArr[j]] = [].concat(...salaryRemoved);
      }

      console.log(result);
      // console.log(`qTotal: ${qualTotal}`);
      // console.log(`empTotal: ${qualGrad}`);
      console.log("-------\n");
      for (let keys in graduates[j][gradsArr[j]]) {
        console.log(keys);
        console.log(graduates[j][gradsArr[j]][keys]);
      }
      // console.log(gradsArr);
      // console.log(companiesArr);
    }
  }
  console.log(result);
  return result;
}

// const companies = [
//   {
//     Stacktrek: {
//       "Job Title": "Business Analyst",
//       "Job Qualifications": {
//         "College Degree": 1,
//         "Process Modelling": 1,
//       },
//       Salary: 23000,
//     },
//   },
//   {
//     Stacktrek: {
//       "Job Title": "Backend Developer",
//       "Job Qualifications": {
//         "College Degree": 0,
//         NodeJS: 2,
//         Elixir: 1,
//         Javascript: 2,
//       },
//       Salary: 28000,
//     },
//   },
//   {
//     Stacktrek: {
//       "Job Title": "Frontend Developer",
//       "Job Qualifications": {
//         "College Degree": 1,
//         Vue: 0,
//         React: 2,
//         Javascript: 2,
//       },
//       Salary: 25000,
//     },
//   },
//   {
//     "RM Coo Inc.": {
//       "Job Title": "Senior Frontend Developer",
//       "Job Qualifications": {
//         "College Degree": 1,
//         Vue: 2,
//         React: 2,
//         Javascript: 3,
//       },
//       Salary: 32000,
//     },
//   },
// ];
//
// const graduates = [
//   {
//     "Anika Durban": {
//       "College Degree": 1,
//       Javascript: 0,
//       Elixir: 1,
//       NodeJS: 3,
//       React: 1,
//       Vue: 3,
//     },
//   },
//   { "Sach Tugbang": { "College Degree": 0, "Process Modelling": 1 } },
//   {
//     "Marie Koo": {
//       "Process Modelling": 0,
//       "College Degree": 0,
//       Javascript: 3,
//       Elixir: 0,
//       NodeJS: 3,
//       React: 3,
//       Vue: 3,
//     },
//   },
// ];

const companies = [
  {
    Stacktrek: {
      "Job Title": "Business Analyst",
      "Job Qualifications": {
        "College Degree": 1,
        "Process Modelling": 1,
      },
      Salary: 23000,
    },
  },
  {
    Stacktrek: {
      "Job Title": "Part-time Content Creator",
      "Job Qualifications": {
        "College Degree": 0,
        Java: 0,
        PHP: 0,
        Python: 0,
        Javascript: 0,
        "C#": 0,
      },
      Salary: 8000,
    },
  },
  {
    Stacktrek: {
      "Job Title": "Backend Developer",
      "Job Qualifications": {
        "College Degree": 0,
        NodeJS: 2,
        Elixir: 1,
        Javascript: 2,
      },
      Salary: 28000,
    },
  },
  {
    Stacktrek: {
      "Job Title": "Frontend Developer",
      "Job Qualifications": {
        "College Degree": 0,
        Vue: 0,
        React: 2,
        Javascript: 2,
      },
      Salary: 25000,
    },
  },
  {
    "RM Coo Inc.": {
      "Job Title": "Senior Frontend Developer",
      "Job Qualifications": {
        "College Degree": 1,
        Vue: 2,
        React: 2,
        Javascript: 3,
      },
      Salary: 32000,
    },
  },
];

const graduates = [
  {
    "Anika Durban": {
      "College Degree": 1,
      Javascript: 2,
      Elixir: 1,
      NodeJS: 3,
      React: 3,
      Vue: 3,
    },
  },
  { "Sach Tugbang": { "College Degree": 1, "Process Modelling": 1 } },
  {
    "Marie Koo": {
      "Process Modelling": 1,
      "College Degree": 1,
      Javascript: 3,
      Elixir: 0,
      NodeJS: 3,
      React: 3,
      Vue: 3,
    },
  },
];

jobseeker(graduates, companies);
