<template>
  <div id="app">
    <!-- Bootstrap Header -->
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact us</a>
          </li>
        </ul>
      </header>
    </div>
    
    <main class="app-main">
      <router-view />
    </main>
    
    <footer class="app-footer">
      <p>&copy; 2024 Shaokun Library. Vue.js Learning Project.</p>
    </footer>
  </div>
</template>

<script setup>
// App now uses Vue Router; views are rendered via <router-view />
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.app-footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

.app-footer p {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .app-main {
    padding: 1rem;
  }
}
</style>
