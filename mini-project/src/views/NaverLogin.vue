<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">로그아웃</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      naverLogin: null,
    };
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "CoFMDuiNQCSt4spL8LEA",
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
    });

    // 설정정보를 초기화하고 연동을 준비
    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log("로그인 성공");
        console.log("사용자 정보:", this.naverLogin.user);

        // 필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
        const email = this.naverLogin.user.getEmail();
        if (email === undefined || email === null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("로그인 상태 확인 실패 또는 미로그인");
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = `/oauth2.0/token?grant_type=delete&client_id=CoFMDuiNQCSt4spL8LEA&client_secret=L9EtVHP1Rn&access_token=${accessToken}&service_provider=NAVER`;

      axios.get(url).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
