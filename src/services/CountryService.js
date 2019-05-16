import axios from 'axios';

const apiPath = 'http://localhost:8081/countries';
const CSVPath = `${apiPath}/csv`;
const XLSXPath = `${apiPath}/xlsx`;

export default {
  apiPath,
  CSVPath,
  XLSXPath,
  async getAll() {
    const response = await axios.get(apiPath);
    return response.data;
  },
};
