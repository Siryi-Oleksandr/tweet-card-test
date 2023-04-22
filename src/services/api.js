import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1';

export async function getAllTweets() {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       toast.error(`Something went wrong! ${e.message}`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
