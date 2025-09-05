<!-- JSONLab.vue -->
<template>
  <div class="json-lab">
    <h1>🗄️ JSON Data & Vue Directives Lab</h1>

    <section class="lab-section">
      <h2>📚 Working with JSON Arrays</h2>
      <p>Our <code>authors.json</code> contains an array of author objects.</p>

      <h3>Iterating through Arrays</h3>
      <!-- Activity 6: Render a list containing author names and their birth years. Hint: Make use of the v-for directive to iterate through the array of authors. -->
      <ul>
        <li v-for="author in authors" :key="author.id">
          <strong>{{ author.name }}</strong> - Born in {{ author.birthYear }}
        </li>
      </ul>
      
      <h3>Filtering Arrays</h3>
      <!-- Activity 7: Render a list containing authors born after 1850. Hint: Make use of the v-for directive to iterate through the array of authors that you have filtered out. -->
      <p>Authors born after 1850:</p>
      <ul>
        <li v-for="author in modernAuthors" :key="author.id">
          <strong>{{ author.name }}</strong> - Born in {{ author.birthYear }}
        </li>
      </ul>

      <h3>Mapping Arrays</h3>
      <p>Famous works:</p>
      <ul>
        <!-- Activity 8: Render a list of all famous works. Hint: Use the v-for directive to iterate through the array of authors that you have filtered out. -->
        <li v-for="work in allFamousWorks" :key="`${work.title}-${work.year}`">
          <strong>{{ work.title }}</strong> ({{ work.year }})
        </li>
      </ul>

      <h3>Finding in Arrays</h3>
      <p>Finding by property: {{ orwell?.name }}</p>

      <h3>Nested Arrays/Objects</h3>
      <p>{{ austen?.name }}'s works:</p>
      <!-- Activity 9: Render a list of Austen's works. Hint: Use the v-for directive to iterate through the array of authors that you have filtered out. -->
      <ul>
        <li v-for="work in austen?.famousWorks" :key="`${work.title}-${work.year}`">
          <strong>{{ work.title }}</strong> ({{ work.year }})
        </li>
      </ul>
    </section>

    <section class="lab-section">
      <h2>🏢 Working with JSON Objects</h2>
      <p>Our <code>bookstores.json</code> is a JSON object.</p>

      <h3>Accessing Properties</h3>
      <p>
        Company:
        <!-- Activity 9a: Get the company name from the bookstores object. -->
        <strong>{{ bookstores.name }}</strong>
      </p>

      <p>
        Total Stores:
        <!-- Activity 9b: Get the total number of stores from the bookstores object. -->
        <strong>{{ bookstores.totalStores }}</strong>
      </p>

      <h3>Iterating Object Properties</h3>
      <p>Store Types:</p>
      <!-- Activity 10: Iterate through the storeTypes array and display the store type and the number of stores that use that type. -->
      <ul>
        <li v-for="(count, type) in bookstores.storeTypes" :key="type">
          <strong>{{ type }}</strong>: {{ count }} stores
        </li>
      </ul>

      <h3>Nested Objects</h3>
      <p>Opening Hours:</p>
      <!-- Activity 11: Iterate through the openingHours object and display the day of the week and the opening and closing times. -->
      <ul>
        <li v-for="(hours, period) in bookstores.openingHours" :key="period">
          <strong>{{ period }}</strong>: {{ hours.open }} - {{ hours.close }}
        </li>
      </ul>

      <h3>Working with Arrays in Objects</h3>
      <!-- Activity 12: Get the top sellers from the bookstores object. -->
      <p>We operate in: <strong>{{ bookstores.countries.join(', ') }}</strong></p>
      <p>Our #1 seller: <strong>{{ bookstores.topSellers[0] }}</strong></p>
    </section>

    <section class="lab-section">
      <h2>v-if & v-else</h2>
      <p>Toggle visibility based on a condition.</p>
      <!-- Activity 13: Toggle the message visibility when the button is clicked. -->
      <!-- TODO: CODE TO TOGGLE MESSAGE VISIBILITY HERE. Hint: Use the v-if directive. -->
      <button @click="showMessage = !showMessage">Toggle Message</button>
      <p v-if="showMessage" class="message success">✨ You're a Vue superstar! ✨</p>
      <p v-else>Click the button to see a message.</p>
    </section>

    <section class="lab-section">
      <h2>Attribute, Class and Style Binding with <code>v-bind</code></h2>
      <p>Highlighting Specific Authors:</p>
      
      <div class="author-cards">
        <div 
          v-for="author in authors" 
          :key="author.id"
          class="author-card"
          :class="{ 
            'highlight': author.birthYear > 1850,
            'orwell-highlight': author.name === 'George Orwell'
          }"
          :style="{ 
            backgroundColor: author.name === 'George Orwell' ? '#ff6b6b' : 
                           author.birthYear > 1850 ? '#e7faf3' : '#f0f0f0',
            borderColor: author.name === 'George Orwell' ? '#e74c3c' : 
                        author.birthYear > 1850 ? '#42b883' : '#ddd',
            color: author.name === 'George Orwell' ? 'white' : 'inherit',
            transform: author.name === 'George Orwell' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: author.name === 'George Orwell' ? '0 8px 16px rgba(231, 76, 60, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
          }"
        >
          <h3>{{ author.name }}</h3>
          <p>Born: {{ author.birthYear }}</p>
          <p>Genres: {{ author.genres.join(', ') }}</p>
          <div v-if="author.name === 'George Orwell'" class="special-badge">
            ⭐ Featured Author ⭐
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
// Activity 1: Import JSON files (authors.json and bookstores.json)
import authors from "../assets/json/authors.json"
import bookstores from "../assets/json/bookstores.json"

const showMessage = ref(false)

// Activity 2: Get authors born after 1850
const modernAuthors = computed(() => {
  return authors.filter(author => author.birthYear > 1850)
})

// Activity 3: Get all famous works
const allFamousWorks = computed(() => {
  return authors.flatMap(author => author.famousWorks)
})

// Activity 4: Find author by name
const orwell = computed(() => {
  return authors.find(author => author.name === "George Orwell")
})

// Activity 5: Find author by ID
const austen = computed(() => {
  return authors.find(author => author.id === 1)
})
</script>

<style scoped>
.json-lab {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  color: #333;
}
h1 {
  text-align: center;
}

.lab-section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message {
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.success {
  background-color: #e7faf3;
  color: #42b883;
  border: 1px solid #42b883;
}

.highlight {
  background-color: #42b883;
}

code {
  background-color: #e0e0e0;
  padding: 2px 5px;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f0f0f0;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.author-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.author-card {
  padding: 15px;
  border-radius: 8px;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
}

.author-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.author-card.highlight {
  background-color: #e7faf3 !important;
  border-color: #42b883 !important;
}

.author-card.orwell-highlight {
  background-color: #ff6b6b !important;
  border-color: #e74c3c !important;
  color: white !important;
  transform: scale(1.05) !important;
  box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3) !important;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3);
  }
  50% {
    box-shadow: 0 8px 20px rgba(231, 76, 60, 0.5);
  }
  100% {
    box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3);
  }
}

.special-badge {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 15px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369870;
}
</style>
