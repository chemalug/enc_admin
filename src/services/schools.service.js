import axios from "axios";

export function getSchools() {
  /**
   * ! Area de autenticación
   */

  if (!!localStorage.jwtToken) {
    try {
      return axios
        .get(`${process.env.REACT_APP_PROXY}/api/schools/`, {
          headers: {
            Authorization: localStorage.jwtToken,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log("asdfasdf" + err));
    } catch (e) {
      console.log(e.response.data);
    }
  }
}
