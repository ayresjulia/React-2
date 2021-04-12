import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* Helper class to get all snacks and all drinks from db. */

class SnackOrBoozeApi {
	static async getSnacks () {
		const result = await axios.get(`${BASE_API_URL}/snacks`);
		return result.data;
	}

	static async getDrinks () {
		const result = await axios.get(`${BASE_API_URL}/drinks`);
		return result.data;
	}
}

export default SnackOrBoozeApi;
