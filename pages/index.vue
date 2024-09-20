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
    <main>
      <Header />
      <WelcomeBox />
    </main>
  </div>
</template>

<script scoped>
import Header from "~/components/Header.vue";
import WelcomeBox from "~/components/WelcomeBox.vue";
</script>

<style lang="scss" scoped>
.home-page {
  background-color: #1e1e1e;
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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

main {
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
}

// Media Queries for responsiveness
@media (max-width: 768px) {
  main {
    width: 100%;
    padding: 0;
  }
}

@media (max-width: 480px) {
  main {
    width: 100%;
    padding: 0;
  }
}
</style>
