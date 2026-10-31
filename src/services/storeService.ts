import supabase from "../lib/supabase";

export const supabaseFunctions = {
  async getAllProducts({ username }) {
    const handleError = () => {
      console.error(`error sending message: ${error.message}`);
      return
    };
    const handleResponse = () => {
      return data.body
    };
    const { data, error } = await supabase.rpc(
      'get_store_by_Username',
      {
        p_username: username.toLocaleString()
      }
    );

    (error && handleError());

    (data.ok && handleResponse())
  }
}