<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">W5. Library Registration Form</h1>
                <p class="text-center text-muted mb-4">Let's build some more advanced features into our form.</p>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                @blur="() => validateName(true)"
                                @input="() => validateName(false)"
                                v-model="formData.username"
                            >
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" v-model="formData.gender" @change="() => validateGender(true)">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                v-model="formData.password"
                                @blur="() => validatePassword(true)"
                                @input="() => validatePassword(false)"
                            >
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                        <div class="col-md-6">
                            <label for="confirm-password" class="form-label">Confirm password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="confirm-password"
                                v-model="formData.confirmPassword"
                                @blur="() => validateConfirmPassword(true)"
                                @input="() => validateConfirmPassword(false)"
                            >
                            <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian" @change="() => validateResident(true)">
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                            </div>
                            <div v-if="errors.resident" class="text-danger">{{ errors.resident }}</div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason for joining</label>
                        <textarea
                            class="form-control"
                            id="reason"
                            rows="3"
                            v-model="formData.reason"
                            @blur="() => validateReason(true)"
                            @input="() => validateReason(false)"
                        ></textarea>
                        <div v-if="errors.reason" :class="errors.reason === 'Great to have a friend' ? 'text-success' : 'text-danger'">{{ errors.reason }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="suburb" class="form-label">Suburb</label>
                        <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- PrimeVue DataTable -->
        <div class="row mt-5" v-if="submittedCards.length">
            <div class="col-12">
                <h3>This is a Primevue Datatable</h3>
                <p>DataTable from PrimeVue</p>
                <DataTable :value="submittedCards" tableStyle="min-width: 50rem">
                    <Column field="username" header="Username"></Column>
                    <Column field="password" header="Password"></Column>
                    <Column field="isAustralian" header="Australian Resident">
                        <template #body="slotProps">
                            {{ slotProps.data.isAustralian ? 'Yes' : 'No' }}
                        </template>
                    </Column>
                    <Column field="gender" header="Gender"></Column>
                    <Column field="reason" header="Reason"></Column>
                    <Column field="suburb" header="Suburb"></Column>
                </DataTable>
            </div>
        </div>

        <!-- Display submitted cards -->
        <div class="row mt-5" v-if="submittedCards.length">
            <div class="d-flex flex-wrap justify-content-start">
                <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        User Information
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Username: {{ card.username }}</li>
                        <li class="list-group-item">Password: {{ card.password }}</li>
                        <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
                        <li class="list-group-item">Gender: {{ card.gender }}</li>
                        <li class="list-group-item">Reason: {{ card.reason }}</li>
                        <li class="list-group-item">Suburb: {{ card.suburb }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Form data reactive object
const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  gender: 'male',
  reason: '',
  suburb: 'Clayton'
})

// Array to store submitted form data
const submittedCards = ref([])

// Form submission handler
const submitForm = () => {
  // Run a single, centralized validation pass
  validateName(true)
  validatePassword(true)
  validateConfirmPassword(true)
  validateResident(true)
  validateGender(true)
  validateReason(true)

  const hasError = Object.values(errors.value).some((msg) => !!msg)
  if (hasError) return

  submittedCards.value.push({
    ...formData.value
  })
  console.log('Form submitted:', formData.value)
  alert('Form submitted successfully!')
  clearForm()
}

// Clear form handler
const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    gender: 'male',
    reason: '',
    suburb: 'Clayton'
  }
}

// Errors state for Vue validation
const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  resident: null,
  gender: null,
  reason: null
})

// Validators
const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const pwd = formData.value.password
  if (pwd.length < 4) {
    if (blur) errors.value.password = 'Password must be at least 4 characters long'
  } else if (!/[A-Z]/.test(pwd)) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter'
  } else if (!/[a-z]/.test(pwd)) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter'
  } else if (!/[^A-Za-z0-9]/.test(pwd)) {
    if (blur) errors.value.password = 'Password must contain at least one special character'
  } else {
    errors.value.password = null
  }
}

const validateConfirmPassword = (blur) => {
  if (formData.value.confirmPassword !== formData.value.password) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateResident = (blur) => {
  if (!formData.value.isAustralian) {
    if (blur) errors.value.resident = 'Please confirm if you are an Australian resident'
  } else {
    errors.value.resident = null
  }
}

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) errors.value.gender = 'Please select a gender'
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  const reason = formData.value.reason.trim()
  if (reason.length < 5) {
    if (blur) errors.value.reason = 'Reason must be at least 5 characters'
  } else if (reason.toLowerCase().includes('friend')) {
    errors.value.reason = 'Great to have a friend'
  } else {
    errors.value.reason = null
  }
}
</script>

<style scoped>
/* Custom styles for cards */
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275FDA;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}

.text-danger {
  color: #dc3545 !important;
}

.text-success {
  color: #198754 !important;
}
</style>
