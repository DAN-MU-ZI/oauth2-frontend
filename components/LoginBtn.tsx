export default function LoginBtn({ provider }: { provider: string }) {
    const handleLogin = () => {
        const redirectUri = `http://localhost:8080/oauth2/authorization/${provider}?redirect_uri=http://localhost:3000/oauth/redirect`;
        console.log(redirectUri);
        if (redirectUri) {
            window.location.href = redirectUri;
        }
    };

    return (
        <button onClick={handleLogin}>
            {provider + "로그인"}
        </button>
    );
}
