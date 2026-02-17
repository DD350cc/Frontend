const API_URL = import.meta.env.VITE_API_URL;

export const verifyCertificates = async (number) => {

  try{
    const response = await fetch(
      `${API_URL}/api/certificates/verify/?number=${number}`
    );

    const data = await response.json()
    return data;
  }

  catch (error) {
    console.error("Error verifying certificates: ", error)
    return { exists: false };
  }
};