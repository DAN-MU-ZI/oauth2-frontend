export default function GoogleLoginBtn() {
    const handleLogin = () => {
        const redirectUri = 'http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect';
        console.log(redirectUri);
        if (redirectUri) {
            window.location.href = redirectUri;
        }
    };

    return (
        <button onClick={handleLogin}>
        구글 로그인
        </button>
    );
}
