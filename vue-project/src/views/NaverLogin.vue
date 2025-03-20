<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout" v-if="isLoggedIn">로그아웃</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naverLogin: null,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.initializeNaverLogin();
    this.checkCallback();
  },
  methods: {
    initializeNaverLogin() {
      if (!window.naver) {
        console.error("Naver SDK가 로드되지 않았습니다.");
        return;
      }

      this.naverLogin = new window.naver.LoginWithNaverId({
        clientId: "CoFMDuiNQCSt4spL8LEA",
        callbackUrl: "http://localhost:8080/naverlogin",
        isPopup: false,
        loginButton: { color: "green", type: 3, height: 60 },
      });

      this.naverLogin.init();
      this.checkLoginStatus();
    },
    checkLoginStatus() {
      if (!this.naverLogin) return;

      this.naverLogin.getLoginStatus((status) => {
        if (status) {
          this.isLoggedIn = true;
          console.log("로그인 성공, 사용자 정보:", this.naverLogin.user);
          const email = this.naverLogin.user.getEmail();
          if (!email) {
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
            this.naverLogin.reprompt();
            return;
          }
        } else {
          console.log("로그인 상태 확인 실패 또는 미로그인");
          this.isLoggedIn = false;
        }
      });
    },
    checkCallback() {
      if (window.location.pathname === "/naverlogin") {
        console.log("콜백 URL 감지, 상태 확인 중...");
        this.checkLoginStatus();
        setTimeout(() => {
          if (this.isLoggedIn) {
            window.history.pushState({}, document.title, "/");
          }
        }, 1000);
      }
    },
    logout() {
      if (!this.naverLogin) {
        console.log("NaverLogin 인스턴스가 없습니다.");
        this.isLoggedIn = false;
        return;
      }

      this.naverLogin.logout(); // 클라이언트 측 로그아웃
      this.isLoggedIn = false;
      console.log("로그아웃 완료 (클라이언트 측)");
    },
  },
};
</script>
