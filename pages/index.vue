<template>
  <div class="home-page">
    <div class="video-container">
      <video autoplay muted loop id="background-video">
        <source
          src="https://www.hellletloose.com/content/uploads/2023/05/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <Header />
    <div class="welcome-box">
      <p>Welcome</p>
      <div class="navigation">
        <button @click="goToMore" class="about">About Us</button>
        <button @click="goToDiscord" class="discord">Discord</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },
  methods: {
    goToMore() {
      // redirect or open a new page
      this.$router.push("/about");
    },
    goToDiscord() {
      // Open the URL in a new tab
      window.open("https://discord.gg/MDptAYZUfB", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  background-color: #1e1e1e;
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 40px 200px;
  color: white;
  text-align: center;
  border-radius: 5px;

  p {
    font-size: 24px;
    font-weight: 600;
  }
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 30px;
}

button {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-size: 16px;
  gap: 30px;
}

.about {
  background-color: #f2c15a;
  color: #000;
  font-weight: 600;

  &:hover {
    background-color: #fffefb;
  }
}

.discord {
  background-color: #7289da;
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: #1d2338;
  }
}
</style>
