const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      activeUser: sessionStorage.getItem("activeUser"),
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: null,
      favorites: [],
      schools: [],
      colleges: [],
      combined_array: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getSchools: async () => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/api/schools");
          if (res.ok) {
            const data = await res.json();
            setStore({ schools: data });
            console.log(getStore().schools);
          }
          return true;
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      createBootcamp: async (
        name,
        logo,
        description,
        website,
        phone_number,
        school_email,
        mailing_address,
        career_options,
        housing_available,
        job_placement_available,
        job_placement_guarantee,
        accept_GI_Bill,
        length_in_weeks,
        tuition,
        minimum_skill_level,
        scholarships_available
      ) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/schools", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              logo,
              description,
              website,
              phone_number,
              school_email,
              mailing_address,
              career_options,
              housing_available,
              job_placement_available,
              job_placement_guarantee,
              accept_GI_Bill,
              length_in_weeks,
              tuition,
              minimum_skill_level,
              scholarships_available,
            }),
          });
          if (resp.ok) {
            alert("BootCamp Record Created successfully!");
            return true;
          }
        } catch (error) {
          console.log("Error occurred while creating new bootcamp", error);
        }
      },
      updateBootcamp: async (
        id,
        name,
        logo,
        description,
        website,
        phone_number,
        school_email,
        mailing_address,
        career_options,
        housing_available,
        job_placement_available,
        job_placement_guarantee,
        accept_GI_Bill,
        length_in_weeks,
        tuition,
        minimum_skill_level,
        scholarships_available
      ) => {
        try {
          await fetch(process.env.BACKEND_URL + "/api/schools/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              logo,
              description,
              website,
              phone_number,
              school_email,
              mailing_address,
              career_options,
              housing_available,
              job_placement_available,
              job_placement_guarantee,
              accept_GI_Bill,
              length_in_weeks,
              tuition,
              minimum_skill_level,
              scholarships_available,
            }),
          });
        } catch (error) {
          console.log("Error occurred while creating new bootcamp", error);
        }
      },
      deleteBootcamp: async (id) => {
        try {
          await fetch(process.env.BACKEND_URL + "/api/schools/" + id, {
            method: "DELETE",
          });
        } catch (error) {
          console.log("Could not delete record", error);
        }
        // window.location.reload(false);
      },

      getColleges: async () => {
        try {
          const res = await fetch(
            "https://api.collegeai.com/v1/api/college-list?api_key=gdxwlZ51B2qe4BR8Ha3XghIV&filters=%7B%0A%22max_tuition%22%3A50000%0A%7D&info_ids=website%2Cavg_cost_of_attendance%2Clogo_image%2Cshort_description%2Cmedian_earnings_six_yrs_after_entry%2Cmedian_earnings_ten_yrs_after_entry%2Cstate_abbr%2Cfour_year_graduation_rate%2Cin_state_tuition%2Con_campus_housing_available%2Clong_description"
          );
          if (res.ok) {
            const data = await res.json();
            setStore({ colleges: data.colleges });
            console.log(getStore().colleges);
          }
          return true;
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      getCombinedArray: () => {
        setStore({
          combined_array: [...getStore().schools, ...getStore().colleges],
        });
        console.log(getStore().combined_array);
      },
      getActiveUser: async (username) => {
        try {
          const res = await fetch(
            process.env.BACKEND_URL + "/api/user/active",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username }),
            }
          );
          const activeUser = await res.json();
          setStore({ activeUser: activeUser });
          console.log(getStore().activeUser);
          console.log(getStore().activeUser.favorites);
          sessionStorage.setItem("activeUser", activeUser);
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },

      getToken: async (username, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });
          if (resp.ok) {
            const token = await resp.json();
            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getActiveUser(username);
            return true;
          } else {
            throw "User not found";
          }
        } catch (error) {
          throw Error("Invalid username or password");
        }
      },

      createUser: async (username, password) => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });
          if (res.ok) {
            const token = await res.json();

            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getActiveUser(username);

            return true;
          } else {
            throw "Something went wrong";
          }
        } catch (error) {
          throw Error("Something went wrong");
        }
      },
      getFavorites: () => {},
      addFavorite: (item) => {
        console.log(item);
        let myFavorites = getStore().favorites;
        let selected = myFavorites.find((element) => element === item);
        if (selected) {
          myFavorites = myFavorites.filter((element) => item !== element);
          setStore({ favorites: myFavorites });
        } else {
          myFavorites = [...myFavorites, item];
          setStore({ favorites: myFavorites });
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getCollegesByID: async (collegeUnitId) => {
        console.log(collegeUnitId);
        const response = await fetch(
          `https://api.collegeai.com/v1/api/college/info?api_key=gdxwlZ51B2qe4BR8Ha3XghIV&college_unit_ids=${collegeUnitId}&info_ids=website%2Cavg_cost_of_attendance%2Clogo_image%2Cshort_description%2Cmedian_earnings_six_yrs_after_entry%2Cmedian_earnings_ten_yrs_after_entry%2Cstate_abbr%2Cfour_year_graduation_rate%2Cin_state_tuition%2Con_campus_housing_available%2Clong_description`
        );
        const data = await response.json();
        setStore({ colleges: data.colleges });
        console.log(data);
        return data.colleges[0];
      },
      // getBootCampsByID: async (id) => {
      //   console.log(id);
      //   const response = await fetch(
      //     process.env.BACKEND_URL + "/api/schools/" + id
      //   );
      //   const data = await response.json();
      //   setStore({ schools: data });
      //   console.log(data);
      //   return data;
      // },
      getBootCampsByID: async (id) => {
        console.log(id);
        const response = await fetch(
          process.env.BACKEND_URL + `/api/schools/` + id
        );
        const data = await response.json();

        return data;
      },
    },
  };
};

export default getState;
