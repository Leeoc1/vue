<template>
  <div>
    <a id="custom-login-btn" class="kakao-btn" @click="kakaoLogin()">
      <img src="../assets/kakao_login_medium_narrow.png" width="222" />
    </a>
    <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      console.log("kakaoLogin 호출됨");
      if (!window.Kakao || !window.Kakao.isInitialized()) {
        console.error("Kakao SDK가 초기화되지 않았습니다.");
        return;
      }
      window.Kakao.Auth.login({
        scope: "profile_nickname,profile_image",
        success: (authObj) => {
          console.log("로그인 성공, authObj:", authObj);
          this.getKakaoAccount();
        },
        fail: (error) => {
          console.error("로그인 실패:", error);
        },
      });
    },
    getKakaoAccount() {
      console.log("getKakaoAccount 호출됨");
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log("API 요청 성공, 응답:", res);
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          console.log("nickname:", nickname);
          alert("로그인 성공!");
        },
        fail: (error) => {
          console.error("API 요청 실패:", error);
        },
      });
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("로그아웃");
        return;
      }
      window.Kakao.Auth.logout((response) => {
        console.log("access token", window.Kakao.Auth.getAccessToken());
        console.log("log out", response);
      });
    },
  },
};
</script>

<style></style>
