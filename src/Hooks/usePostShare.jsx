
const usePostShare = () => {
  // Twitter Share
  const handleTwitterShare = () => {
    const TwitterShaeUrl = `https://twitter.com/share?url=https://ornate-vacherin-861b27.netlify.app/`;
    window.open(
      TwitterShaeUrl,
      "popup",
      "width=500, height=500 left=500 top=500"
    );
  };
  // Facebook Share
  const handleFacebookShare = () => {
    const FacebookShare = `https://www.facebook.com/share?url=https://ornate-vacherin-861b27.netlify.app/`;
    window.open(
      FacebookShare,
      "popup",
      "width=500, height=500 left=500 top=500"
    );
  };
  // Facebook Share
  const handleLinkedinShare = () => {
    const LinkedinShare = `https://linkedin.com/share?url=https://ornate-vacherin-861b27.netlify.app/`;
    window.open(
      LinkedinShare,
      "popup",
      "width=500, height=500 left=500 top=500"
    );
    };
    return[handleFacebookShare,handleLinkedinShare,handleTwitterShare]
};

export default usePostShare;