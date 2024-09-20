<template>
  <div class="about-page">
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
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Only hide horizontal overflow */
  background-color: rgb(30, 30, 30);
}

.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e0e0e0;
  padding: 20px; /* Add padding to prevent content from touching screen edges */
  font-family: "Roboto", sans-serif;
  box-sizing: border-box; /* Ensure padding doesn't affect element's width */
}

.hero {
  text-align: center;
  border-bottom: 2px solid #444;
  width: 100%; /* Make sure hero section takes the full width */
  max-width: 984px; /* Limit max width for large screens */
  margin-bottom: 20px;
}

.hero .content {
  border-radius: 8px;
  max-width: 100%; /* Adjusts for mobile */
  padding: 0 20px; /* Add padding to prevent text from touching edges */
}

.hero h1 {
  margin-bottom: 20px;
  color: #f5f5f5;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px; /* Scale heading for readability */
}

.hero p {
  font-size: 14px; /* Scale up for readability */
  line-height: 1.6;
  color: #d3d3d3;
  max-width: 100%; /* Ensure the text is responsive */
}

.history,
.join {
  width: 100%; /* Make sections responsive */
  max-width: 1200px; /* Limit max width for large screens */
  padding: 0 20px; /* Add padding for responsiveness */
  margin: 20px 0;
}

.history h2,
.join h2 {
  margin-bottom: 20px;
  color: #c5c5c5;
  font-size: 24px; /* Adjust for readability */
}

.history p,
.join p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.discord {
  background-color: #7289da;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.discord:hover {
  background-color: #3a3a3a;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 28px; /* Adjust heading size for smaller screens */
  }

  .hero p {
    font-size: 14px; /* Smaller text size for mobile */
  }

  .history h2,
  .join h2 {
    font-size: 24px; /* Adjust heading size */
  }

  .history p,
  .join p {
    font-size: 14px; /* Smaller text for mobile readability */
  }

  .discord {
    font-size: 12px; /* Adjust button text size */
  }
}
</style>
