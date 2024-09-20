<template>
  <header class="header">
    <img src="../assets/images/logo.png" alt="Logo" class="logo" />
    <div class="navigation">
      <button @click="goToMore" class="home">
        <Icon name="game-icons:barracks" />
        Home
      </button>
      <button @click="goToMore" class="about">
        <Icon name="fluent:people-community-12-filled" />
        About Us
      </button>
      <button @click="goToDiscord" class="discord">
        <Icon name="line-md:discord" />Discord
      </button>
    </div>
  </header>
</template>

<script scoped>
import { useRouter } from "vue-router";

// Reactive server variable
const router = useRouter();

// Function to navigate to 'About' page
const goToMore = () => {
  router.push("/about");
};

// Function to open Discord link
const goToDiscord = () => {
  window.open("https://discord.gg/MDptAYZUfB", "_blank");
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  flex-direction: column;
  background-color: rgb(27, 27, 27, 0.8);
}

.logo {
  width: 25%;
  height: auto;
}

@media (max-width: 768px) {
  .logo {
    width: 80%;
  }
}

.navigation {
  display: flex;
  flex-direction: row;
  gap: 30px;
  border-top: solid 1px rgba(238, 238, 238, 0.05);
  padding: 10px;
  width: 100%;
  justify-content: center;
}

button {
  display: flex;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  width: 150px;
  justify-content: center;
  gap: 5px;
}

.iconify {
  color: #f2c15a;
}

.home,
.about,
.discord {
  background-color: transparent;
  color: #fff;
  font-weight: 600;

  &:hover {
    color: #f2c15a;
  }
}
</style>
