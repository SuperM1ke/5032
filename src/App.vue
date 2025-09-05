<template>
  <div id="app">
    <header class="app-header">
      <h1>📚 Shaokun Library</h1>
      <p>Vue.js JSON Lab - FIT5032</p>
    </header>
    
    <main class="app-main">
      <JSONLab />
    </main>
    
    <footer class="app-footer">
      <p>&copy; 2024 Shaokun Library. Vue.js Learning Project.</p>
    </footer>
  </div>
</template>

<script setup>
import JSONLab from './components/JSON.vue'
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

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
}

.app-header p {
  font-size: 1.1rem;
  opacity: 0.9;
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
  .app-header h1 {
    font-size: 2rem;
  }
  
  .app-main {
    padding: 1rem;
  }
}
</style>
