<template>
  <div>
    <div id="google-signin-btn"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeGoogleSignIn();
  },
  methods: {
    initializeGoogleSignIn() {
      console.log("initializeGoogleSignIn 시작");
      if (window.google && window.google.accounts) {
        this.loadGoogleSignIn();
      } else {
        console.log("Google GSI SDK 로드 대기 중...");
        window.addEventListener("load", this.loadGoogleSignIn);
      }
    },
    loadGoogleSignIn() {
      console.log("loadGoogleSignIn 호출됨");
      window.google.accounts.id.initialize({
        client_id:
          "955753367282-kld27dcb1ve81mur0qfien2g911jsn2d.apps.googleusercontent.com",
        callback: this.handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-btn"),
        {
          theme: "outline",
          size: "large",
          width: 240,
        }
      );
      console.log("버튼 렌더링 완료");
    },
    handleCredentialResponse(response) {
      console.log("로그인 성공, ID Token:", response.credential);
      // ID 토큰을 백엔드로 전송하거나 디코딩해 사용자 정보 추출 가능
      // 예: JWT 디코딩 라이브러리 사용 (https://jwt.io/)
    },
    signOut() {
      console.log("로그아웃 기능은 GSI에서 별도 구현 필요");
      // GSI는 기본적으로 클라이언트 측 로그아웃 없음, 서버 측 토큰 폐기 필요
    },
  },
};
</script>

<style>
#google-signin-btn {
  display: block;
  min-height: 50px;
  margin: 20px;
}
</style>
