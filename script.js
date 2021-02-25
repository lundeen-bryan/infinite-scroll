// Unsplash API
const count = 10;
const apiKey = 'YRSCBJ1nkDIDd10B4HPC0YDophg-yk33niJfGPgRIDs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch
  }
}

// on load
getPhotos();
