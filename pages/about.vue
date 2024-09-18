<template>
  <div class="about-page">
    <button class="back-button" @click="goBack">
      <span class="arrow"></span>
    </button>
    <section class="hero">
      <div class="content">
        <h1>About Our Clan</h1>
        <p>
          Welcome to our Hell Let Loose clan. We are a group of dedicated
          soldiers, working together on the battlefield to achieve victory.
          United by our shared passion for tactical gameplay, teamwork, and
          camaraderie, we fight through the virtual warzones just like those who
          served during World War II.
        </p>
      </div>
    </section>

    <section class="history">
      <h2>Our History</h2>
      <p>
        Founded in 2021, our clan has grown into a community of players who
        respect each other and take pride in our collective accomplishments. Our
        battles have forged strong bonds as we’ve faced relentless enemies,
        chaotic firefights, and grueling tactics in Hell Let Loose.
      </p>
    </section>

    <section class="join">
      <h2>Join Us</h2>
      <p>
        If you want to experience the intensity of a World War II simulation and
        be part of a tight-knit group, join us on the battlefield. You can
        become one of us and make history in every match.
      </p>
      <button @click="goToDiscord" class="discord">Join Our Discord</button>
    </section>
  </div>
</template>

<script setup>
const goToDiscord = () => {
  window.location.href = "https://discord.gg/MDptAYZUfB";
};
const goBack = () => {
  window.history.back();
};
</script>

<style scoped>
body {
  background-color: #1e1e1e;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #1e1e1e;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  z-index: 2;
  text-align: center;

  .arrow {
    position: relative;
    width: 0;
    height: 0;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 20px solid #fff;
    }
  }
}

.about-page {
  color: #e0e0e0;
  background-color: #1e1e1e;
  padding: 40px;
  font-family: "Roboto", sans-serif;
  height: 92vh;
}

.hero {
  text-align: center;
  border-bottom: 2px solid #444;
}

.hero .content {
  border-radius: 8px;
  width: 984px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #f5f5f5;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: left;
}

.hero p {
  font-size: 18px;
  line-height: 1.6;
  color: #d3d3d3;
  text-align: left;
  width: 984px;
}

.history {
  width: 984px;

  h2 {
    width: 984px;
  }
  p {
    width: 984px;
  }
}
.join {
  margin: 40px 0;
  width: 984px;
}

.history h2,
.join h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #c5c5c5;
}

.history p,
.join p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.discord {
  background-color: #7289da;
  color: #fff;
  font-weight: 600;
  color: #f5f5f5;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a3a3a;
  }
}

.join {
  text-align: left;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }
}
</style>
