<template>
  <header class="header">
    <img src="../assets/images/logo.png" alt="Logo" class="logo" />
    <div class="mobilemenu">
      <button class="burger-menu" @click="goToHome">
        <Icon name="game-icons:barracks" />
      </button>
      <button class="burger-menu" @click="goToDiscord">
        <Icon name="line-md:discord" />
      </button>
      <button class="burger-menu" @click="toggleMenu">
        <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" />
      </button>
    </div>
    <!-- Navigation Menu (Desktop & Mobile) -->
    <nav :class="['navigation', { 'is-open': isMenuOpen }]">
      <ul>
        <li>
          <button @click="goToHome" class="home">
            <Icon name="game-icons:barracks" />
            Home
          </button>
        </li>
        <li>
          <button @click="goToMore" class="about">
            <Icon name="fluent:people-community-12-filled" />
            About Us
          </button>
        </li>
        <li>
          <button @click="goToDiscord" class="discord">
            <Icon name="line-md:discord" />
            Discord
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Reactive server variable
const isMenuOpen = ref(false);

const router = useRouter();

// Functions for navigation
const goToHome = () => {
  isMenuOpen.value = false; // Close menu after navigation
  router.push("/");
};

const goToMore = () => {
  isMenuOpen.value = false;
  router.push("/about");
};

const goToDiscord = () => {
  isMenuOpen.value = false;
  window.open("https://discord.gg/MDptAYZUfB", "_blank");
};

// Function to toggle burger menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between; /* Horizontally center */
  align-items: center; /* Vertically center */
  flex-direction: column;
  background-color: rgb(27, 27, 27, 0.8);
  position: relative;
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

.mobilemenu {
  display: flex;
  width: 100%;
}

.burger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
}

.navigation {
  display: flex;
  flex-direction: row;
  gap: 30px;
  border-top: solid 1px rgba(238, 238, 238, 0.05);
  padding: 10px;
  width: 100%;
  justify-content: center;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
  }

  li {
    margin: 0;
  }
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

/* Burger Menu Styles */
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
    flex-direction: row;
  }

  .navigation {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(27, 27, 27, 0.95);
    padding: 20px;
    display: none;
  }

  .navigation.is-open {
    display: flex;
  }

  .logo {
    width: 70%;
  }

  ul {
    flex-direction: column;
    align-items: center;
    margin-right: 30px !important;
  }

  li {
    text-align: center;
  }
}
</style>
