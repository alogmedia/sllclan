<template>
  <div class="welcome-box">
    <div class="welcome-details">
      <div v-if="server" class="serverdetails">
        <p>{{ server.name }}</p>
        <p class="players">
          <strong>Players:</strong> {{ server.players }}/{{ server.maxPlayers }}
        </p>
      </div>
      <button @click="goToSteam" class="steam">Connect To Server</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Reactive server variable
const server = ref(null);

// Function to open the Steam link
const goToSteam = () => {
  window.open("steam://run/686810//+connect 176.57.153.114:28000/", "_blank");
};

// Helper function to format server name by removing URLs
const formatServerName = (name) => {
  const urlRegex = /https?:\/\/[^\s]+/;
  return name.replace(urlRegex, "").trim();
};

// Fetch server details from API
const fetchServerDetails = () => {
  fetch(
    "https://api.battlemetrics.com/servers?fields%5Bserver%5D=rank%2Cname%2Cplayers%2CmaxPlayers%2Caddress%2Cip%2Cport%2Ccountry%2Clocation%2Cdetails%2Cstatus&relations%5Bserver%5D=game%2CserverGroup&filter%5Bgame%5D=hll&filter%5Bsearch%5D=scandinavian",
  )
    .then((response) => response.json())
    .then((data) => {
      const serverAttributes = data.data[0].attributes;
      server.value = {
        ...serverAttributes,
        name: formatServerName(serverAttributes.name),
      };
    })
    .catch((error) => {
      console.error("Error fetching server details:", error);
    });
};

// Fetch server details when the component is mounted
onMounted(() => {
  fetchServerDetails();
});
</script>

<style lang="scss" scoped>
.welcome-box {
  padding: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
}

.welcome-details {
  width: 75%;
}

.serverdetails {
  margin-bottom: 20px;
  border: solid 1px rgba(238, 238, 238, 0.05);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #7289da;
    margin: 0;
  }

  .players {
    color: #f2c15a;
  }
}

button {
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;

  &:first-of-type {
    margin-top: 20px;
  }
}

.about,
.discord {
  background-color: #7289da;
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: #1d2338;
  }
}

.steam {
  background-color: #f2c15a;
  color: #000;
  font-weight: 600;
  width: 50%;

  &:hover {
    background-color: #ffffff;
  }
}

// Media Queries for responsiveness
@media (max-width: 768px) {
  .welcome-box {
    width: 80%;
    padding: 15px;
  }
  .welcome-details {
    width: 80%;
  }
  .serverdetails p {
    font-size: 0.875rem;
  }

  button {
    font-size: 0.875rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .welcome-box {
    width: 80%;
    padding: 15px;
  }
  .welcome-details {
    width: 80%;
  }
  .serverdetails p {
    font-size: 0.75rem;
  }

  button {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
}
</style>
