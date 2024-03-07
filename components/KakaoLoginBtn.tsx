export default function GoogleLoginBtn() {
    const handleLogin = () => {
        const redirectUri = 'http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth/redirect';
        console.log(redirectUri);
        if (redirectUri) {
            window.location.href = redirectUri;
        }
    };

    return (
        <button onClick={handleLogin}>
        카카오 로그인
        </button>
    );
}
