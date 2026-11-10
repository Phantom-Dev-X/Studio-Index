import supabase from "../../lib/supabase";


const reuseableResponseHandlers = (data: any, error: any) => {
  const handleError = (_err: any) => {
    return null;
  };
  const res = (!(error === null)) ? handleError(error) : data;
  console.log(res)
  return res;
};

export const supabaseFunctions = {
  async getSellersProducts(username: string) {
    const { data, error } = await supabase
      .from('sellers')
      .select('*, products(*)')
      .eq('username', username)
      .single();

    return reuseableResponseHandlers(data, error);
  },

  async getSellersImage(username?: string) {

    const { data, error } = await supabase
      .from('sellers')
      .select('avatar_url')
      .eq('username', username)
      .maybeSingle();

    if (error) {
      return null;
    }

    return data?.avatar_url || null;
  },
  async getSellerInfo(username: string) {
    const { data, error } = await supabase.rpc('get_store_by_username', {
      'p_username': username.trim()
    }).single();

    return reuseableResponseHandlers(data, error)
  },
};